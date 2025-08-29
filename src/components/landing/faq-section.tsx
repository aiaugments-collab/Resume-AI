'use client';

import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'motion/react';

export function FAQSection() {
  const faqs = [
    {
      question: 'How does the AI resume generation work?',
      answer: 'Our AI analyzes the job description you provide and matches it with your profile information to create tailored resume content. It optimizes keywords, restructures your experience to highlight relevant skills, and generates compelling professional summaries that align with the job requirements.'
    },
    {
      question: 'Is my personal information secure?',
      answer: 'Absolutely. We use enterprise-grade encryption to protect your data. Your personal information is never shared with third parties, and you have full control over your data. You can delete your account and all associated data at any time.'
    },
    {
      question: 'What makes Resume AI different from other resume builders?',
      answer: 'Resume AI is the only resume builder that uses advanced AI to analyze job descriptions and automatically tailor your resume content. While other tools just provide templates, we create intelligent, ATS-optimized content that matches what employers are specifically looking for.'
    },
    {
      question: 'Can I edit the AI-generated content?',
      answer: 'Yes! The AI-generated content serves as a smart starting point. You have full control to edit, customize, and refine every section of your resume. Our live preview shows changes in real-time, so you can perfect your resume before downloading.'
    },
    {
      question: 'How accurate is the ATS optimization?',
      answer: 'Our ATS optimization has a 95% success rate based on user feedback. We continuously update our algorithms based on the latest ATS requirements from major companies. The AI ensures proper formatting, keyword density, and structure that ATS systems can easily parse.'
    },
    {
      question: 'Can I use Resume AI for different industries?',
      answer: 'Absolutely! Resume AI works across all industries and job types. The AI adapts its content generation based on the specific job description and industry requirements, whether you&apos;re in tech, healthcare, finance, marketing, or any other field.'
    },
    {
      question: 'What file formats can I download?',
      answer: 'You can download your resume as a high-quality PDF, which is the preferred format by most employers and ATS systems. Pro users also get access to additional formats including Word documents and plain text versions.'
    },
    {
      question: 'How many resumes can I create?',
      answer: 'Free users can create 1 AI-generated resume per month. Pro users get unlimited resume generation, which is perfect for applying to multiple positions. Each resume can be tailored to different job descriptions for maximum effectiveness.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee on all paid plans. If you&apos;re not completely satisfied with Resume AI, contact our support team within 30 days of purchase for a full refund, no questions asked.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees, and you&apos;ll continue to have access to Pro features until the end of your current billing period.'
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently asked{' '}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                questions
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about Resume AI and how it can help you land your dream job.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-background shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="rounded-lg bg-muted/50 p-8">
            <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
            </p>
            <a
              href="mailto:support@resume-ai.com"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
            >
              Contact Support →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
