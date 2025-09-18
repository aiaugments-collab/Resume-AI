import { SignIn } from '@clerk/nextjs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Access | Career Assistant',
  description: 'Secure enterprise authentication portal for career intelligence platform.'
};

export default function Page() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <SignIn signInUrl='/sign-in' forceRedirectUrl='/welcome' />
    </div>
  );
}
