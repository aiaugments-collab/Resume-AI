import { Metadata } from 'next';
import { HelpContent } from './help-content';

export const metadata: Metadata = {
  title: 'Help & Support | Resume AI',
  description: 'Get help with Resume AI, browse our knowledge base, and contact support.',
  openGraph: {
    title: 'Help & Support | Resume AI',
    description: 'Get help with Resume AI, browse our knowledge base, and contact support.'
  },
  twitter: {
    title: 'Help & Support | Resume AI',
    description: 'Get help with Resume AI, browse our knowledge base, and contact support.'
  }
};

export default function HelpPage() {
  return <HelpContent />;
}
