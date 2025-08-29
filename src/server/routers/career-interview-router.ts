import { z } from 'zod';
import { j, privateProcedure } from '../jstack';
import { db } from '../db';
import { profiles, jobs, educations } from '../db/schema';
import { nanoid } from 'nanoid';
import { processCareerInterview, generateFollowUpQuestions } from '../services/ai-career-interview';

const careerInterviewSchema = z.object({
  responses: z.string().min(10, 'Please provide more detailed responses'),
  profileName: z.string().min(1, 'Profile name is required')
});

const followUpQuestionsSchema = z.object({
  currentResponses: z.string(),
  missingAreas: z.array(z.string())
});

export const careerInterviewRouter = j.router({
  // Process career interview and create profile
  processInterview: privateProcedure
    .input(careerInterviewSchema)
    .mutation(async ({ c, ctx, input }) => {
      const { user } = ctx;
      const { responses, profileName } = input;

      try {
        // Process the career interview with AI
        const aiProfileData = await processCareerInterview(responses);

        // Create the main profile
        const profileId = nanoid();
        const newProfile = {
          id: profileId,
          userId: user.id,
          profileName: profileName,
          firstname: aiProfileData.personal_details.firstname,
          lastname: aiProfileData.personal_details.lastname,
          email: aiProfileData.personal_details.email,
          contactno: aiProfileData.personal_details.contactno,
          city: aiProfileData.personal_details.city,
          country: aiProfileData.personal_details.country,
          summary: aiProfileData.personal_details.professional_summary || '',
          createdAt: new Date(),
          updatedAt: new Date()
        };

        const [createdProfile] = await db.insert(profiles).values(newProfile).returning();

        // Create work experience entries
        const jobEntries = aiProfileData.work_experience.map(job => ({
          profileId: profileId,
          jobTitle: job.jobTitle,
          employer: job.employer,
          city: job.city,
          startDate: job.startDate,
          endDate: job.endDate,
          description: job.description,
          createdAt: new Date(),
          updatedAt: new Date()
        }));

        if (jobEntries.length > 0) {
          await db.insert(jobs).values(jobEntries);
        }

        // Create education entries
        const educationEntries = aiProfileData.education.map(edu => ({
          profileId: profileId,
          school: edu.school,
          degree: edu.degree,
          field: edu.field,
          city: edu.city,
          startDate: edu.startDate,
          endDate: edu.endDate,
          description: edu.description || '',
          createdAt: new Date(),
          updatedAt: new Date()
        }));

        if (educationEntries.length > 0) {
          await db.insert(educations).values(educationEntries);
        }

        // Return the complete profile with AI-generated data
        return c.json({
          success: true,
          profile: {
            ...createdProfile,
            aiGeneratedData: {
              skills: aiProfileData.skills,
              tools: aiProfileData.tools_and_technologies,
              languages: aiProfileData.languages,
              certifications: aiProfileData.certifications,
              projects: aiProfileData.projects
            }
          }
        });

      } catch (error) {
        console.error('Error processing career interview:', error);
        return c.json(
          { 
            success: false, 
            error: 'Failed to process career interview. Please try again.' 
          }, 
          500
        );
      }
    }),

  // Generate follow-up questions based on current responses
  generateQuestions: privateProcedure
    .input(followUpQuestionsSchema)
    .mutation(async ({ c, input }) => {
      try {
        const questions = await generateFollowUpQuestions(
          input.currentResponses,
          input.missingAreas
        );

        return c.json({
          success: true,
          questions
        });
      } catch (error) {
        console.error('Error generating follow-up questions:', error);
        return c.json(
          { 
            success: false, 
            error: 'Failed to generate questions. Please try again.' 
          }, 
          500
        );
      }
    }),

  // Get interview starter questions
  getStarterQuestions: privateProcedure
    .query(async ({ c }) => {
      const starterQuestions = [
        "Tell me about your current or most recent job role. What do you do day-to-day?",
        "What's your educational background? Include any degrees, certifications, or relevant courses.",
        "What are your key skills and areas of expertise?",
        "Can you describe a significant project or achievement you're proud of?",
        "What tools, technologies, or software do you work with regularly?",
        "What languages do you speak and at what level?",
        "What type of role are you looking for next in your career?"
      ];

      return c.json({
        success: true,
        questions: starterQuestions
      });
    })
});
