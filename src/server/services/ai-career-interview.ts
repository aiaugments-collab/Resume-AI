import { AIChatSession } from './google-ai-model';
import { z } from 'zod';

// Define the structured schema for AI response
export const aiProfileSchema = z.object({
  personal_details: z.object({
    firstname: z.string(),
    lastname: z.string(),
    email: z.string().email(),
    contactno: z.string(),
    city: z.string(),
    country: z.string(),
    professional_summary: z.string().optional(),
  }),
  work_experience: z.array(z.object({
    jobTitle: z.string(),
    employer: z.string(),
    city: z.string(),
    startDate: z.string(), // YYYY-MM-DD format
    endDate: z.string(), // YYYY-MM-DD format or "Present"
    description: z.string(),
    keyAchievements: z.array(z.string()),
  })),
  education: z.array(z.object({
    school: z.string(),
    degree: z.string(),
    field: z.string(),
    city: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    description: z.string().optional(),
  })),
  skills: z.array(z.object({
    skill_name: z.string(),
    proficiency_level: z.enum(['Beginner', 'Intermediate', 'Advanced', 'Expert']),
    category: z.string(), // e.g., "Technical", "Soft Skills", "Languages"
  })),
  tools_and_technologies: z.array(z.object({
    tool_name: z.string(),
    proficiency_level: z.enum(['Beginner', 'Intermediate', 'Advanced', 'Expert']),
    category: z.string(), // e.g., "Programming", "Design", "Analytics"
  })),
  languages: z.array(z.object({
    lang_name: z.string(),
    proficiency_level: z.enum(['Basic', 'Conversational', 'Fluent', 'Native']),
  })),
  certifications: z.array(z.object({
    name: z.string(),
    issuer: z.string(),
    date_obtained: z.string(),
    expiry_date: z.string().optional(),
  })).optional(),
  projects: z.array(z.object({
    name: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    url: z.string().optional(),
  })).optional(),
});

export type AIProfileData = z.infer<typeof aiProfileSchema>;

export async function processCareerInterview(
  interviewResponses: string
): Promise<AIProfileData> {
  const schemaStructure = JSON.stringify({
    personal_details: {
      firstname: "string",
      lastname: "string", 
      email: "string (valid email format)",
      contactno: "string (phone number)",
      city: "string",
      country: "string",
      professional_summary: "string (optional - 2-3 sentence professional summary)"
    },
    work_experience: [{
      jobTitle: "string",
      employer: "string", 
      city: "string",
      startDate: "string (YYYY-MM-DD format)",
      endDate: "string (YYYY-MM-DD format or 'Present')",
      description: "string (detailed job description)",
      keyAchievements: ["string array of key achievements"]
    }],
    education: [{
      school: "string",
      degree: "string",
      field: "string", 
      city: "string",
      startDate: "string (YYYY-MM-DD format)",
      endDate: "string (YYYY-MM-DD format)",
      description: "string (optional)"
    }],
    skills: [{
      skill_name: "string",
      proficiency_level: "Beginner|Intermediate|Advanced|Expert",
      category: "string (e.g., Technical, Soft Skills, Languages)"
    }],
    tools_and_technologies: [{
      tool_name: "string",
      proficiency_level: "Beginner|Intermediate|Advanced|Expert", 
      category: "string (e.g., Programming, Design, Analytics)"
    }],
    languages: [{
      lang_name: "string",
      proficiency_level: "Basic|Conversational|Fluent|Native"
    }],
    certifications: [{
      name: "string",
      issuer: "string",
      date_obtained: "string (YYYY-MM-DD)",
      expiry_date: "string (YYYY-MM-DD, optional)"
    }],
    projects: [{
      name: "string",
      description: "string",
      technologies: ["string array"],
      url: "string (optional)"
    }]
  }, null, 2);

  const prompt = `
You are an expert career counselor and resume writer. I will provide you with a person's career interview responses, and you need to extract and structure their professional information into a comprehensive profile.

CAREER INTERVIEW RESPONSES:
${interviewResponses}

INSTRUCTIONS:
1. Analyze the provided career interview responses carefully
2. Extract all relevant professional information
3. Infer missing details where reasonable (e.g., if they mention "software engineer at Google for 3 years ending last month", infer approximate dates)
4. For dates, use YYYY-MM-DD format. If exact dates aren't provided, make reasonable estimates
5. Categorize skills appropriately (Technical, Soft Skills, etc.)
6. Create a professional summary that captures their career essence
7. If information is missing or unclear, make reasonable professional assumptions
8. Ensure all required fields are populated with meaningful data

RESPONSE FORMAT:
Return ONLY a valid JSON object that matches this exact schema:

${schemaStructure}

IMPORTANT GUIDELINES:
- Use proper date formats (YYYY-MM-DD)
- Make proficiency level assessments based on experience described
- Group similar skills and tools logically
- Write clear, professional descriptions
- Include quantifiable achievements where mentioned
- If email/phone not provided, use placeholder formats but mark them clearly
- Ensure the professional_summary is compelling and accurate to their experience

Return only the JSON object, no additional text or formatting.
`;

  try {
    const result = await AIChatSession.sendMessage(prompt);
    const responseText = await result.response.text();
    
    console.log('AI Career Interview Response:', responseText);

    // Parse and validate the response
    const parsedData = JSON.parse(responseText);
    const validatedData = aiProfileSchema.parse(parsedData);

    return validatedData;
  } catch (error) {
    console.error('Error processing career interview:', error);
    throw new Error('Failed to process career interview. Please try again.');
  }
}

// Generate interview questions based on user's current responses
export async function generateFollowUpQuestions(
  currentResponses: string,
  missingAreas: string[]
): Promise<string[]> {
  const prompt = `
You are a career counselor conducting a professional interview. Based on the user's responses so far and the missing information areas, generate 3-5 thoughtful follow-up questions.

CURRENT RESPONSES:
${currentResponses}

MISSING AREAS:
${missingAreas.join(', ')}

Generate questions that:
1. Are conversational and friendly
2. Help gather the missing professional information
3. Encourage detailed responses
4. Are specific and actionable

Return only an array of question strings in JSON format.
Example: ["What specific technologies did you work with in your last role?", "Can you tell me about a major project you're proud of?"]
`;

  try {
    const result = await AIChatSession.sendMessage(prompt);
    const responseText = await result.response.text();
    
    const questions = JSON.parse(responseText);
    return Array.isArray(questions) ? questions : [];
  } catch (error) {
    console.error('Error generating follow-up questions:', error);
    return [
      "Can you tell me more about your work experience?",
      "What are your key skills and areas of expertise?",
      "What education or certifications do you have?"
    ];
  }
}
