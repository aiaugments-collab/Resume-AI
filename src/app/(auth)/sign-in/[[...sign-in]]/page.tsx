import { SignIn } from '@clerk/nextjs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication | Sign In',
  description: 'Sign In page for authentication.'
};

export default function Page() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <SignIn signInUrl='/sign-in' forceRedirectUrl='/welcome' />
    </div>
  );
}
