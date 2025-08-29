import { Metadata } from 'next';
import { AnalyticsContent } from './analytics-content';

export const metadata: Metadata = {
  title: 'Analytics | Resume AI',
  description: 'Track your resume performance, views, and application success rates.',
  openGraph: {
    title: 'Analytics | Resume AI',
    description: 'Track your resume performance, views, and application success rates.'
  },
  twitter: {
    title: 'Analytics | Resume AI',
    description: 'Track your resume performance, views, and application success rates.'
  }
};

export default function AnalyticsPage() {
  return <AnalyticsContent />;
}
