import { Metadata } from 'next';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Dashboard | Resume AI',
  description:
    'Manage your resumes and profiles in one place. Create, edit, and track your job applications.',
  openGraph: {
    title: 'Dashboard | Resume AI',
    description:
      'Manage your resumes and profiles in one place. Create, edit, and track your job applications.'
  },
  twitter: {
    title: 'Dashboard | Resume AI',
    description:
      'Manage your resumes and profiles in one place. Create, edit, and track your job applications.'
  }
};

export default async function Dashboard() {
  const { redirectToSignIn, userId } = await auth();

  if (!userId) {
    return redirectToSignIn();
  } else {
    redirect('/dashboard/profile');
  }
}
