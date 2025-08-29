import { Metadata } from 'next';
import { BillingContent } from './billing-content';

export const metadata: Metadata = {
  title: 'Billing & Plans | Resume AI',
  description: 'Manage your subscription, billing information, and upgrade your plan.',
  openGraph: {
    title: 'Billing & Plans | Resume AI',
    description: 'Manage your subscription, billing information, and upgrade your plan.'
  },
  twitter: {
    title: 'Billing & Plans | Resume AI',
    description: 'Manage your subscription, billing information, and upgrade your plan.'
  }
};

export default function BillingPage() {
  return <BillingContent />;
}
