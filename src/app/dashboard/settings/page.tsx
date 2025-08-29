import { Metadata } from 'next';
import { SettingsContent } from './settings-content';

export const metadata: Metadata = {
  title: 'Settings | Resume AI',
  description: 'Manage your account settings, preferences, and privacy options.',
  openGraph: {
    title: 'Settings | Resume AI',
    description: 'Manage your account settings, preferences, and privacy options.'
  },
  twitter: {
    title: 'Settings | Resume AI',
    description: 'Manage your account settings, preferences, and privacy options.'
  }
};

export default function SettingsPage() {
  return <SettingsContent />;
}
