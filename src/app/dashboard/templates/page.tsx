import { Metadata } from 'next';
import { TemplatesContent } from './templates-content';

export const metadata: Metadata = {
  title: 'Resume Templates | Resume AI',
  description: 'Browse and preview professional resume templates designed for ATS optimization.',
  openGraph: {
    title: 'Resume Templates | Resume AI',
    description: 'Browse and preview professional resume templates designed for ATS optimization.'
  },
  twitter: {
    title: 'Resume Templates | Resume AI',
    description: 'Browse and preview professional resume templates designed for ATS optimization.'
  }
};

export default function TemplatesPage() {
  return <TemplatesContent />;
}
