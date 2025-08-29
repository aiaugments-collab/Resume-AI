import { Metadata } from 'next';
import { AIInterviewContent } from './ai-interview-content';

export const metadata: Metadata = {
  title: 'AI Career Interview | Resume AI',
  description: 'Create your professional profile through an AI-powered career interview. Let our AI guide you through building a comprehensive profile.',
  openGraph: {
    title: 'AI Career Interview | Resume AI',
    description: 'Create your professional profile through an AI-powered career interview. Let our AI guide you through building a comprehensive profile.'
  },
  twitter: {
    title: 'AI Career Interview | Resume AI',
    description: 'Create your professional profile through an AI-powered career interview. Let our AI guide you through building a comprehensive profile.'
  }
};

export default function AIInterviewPage() {
  return <AIInterviewContent />;
}
