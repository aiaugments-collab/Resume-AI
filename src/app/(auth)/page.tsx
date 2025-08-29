import { redirect } from 'next/navigation';

export default async function AuthPage() {
  // Redirect to the main landing page
  return redirect('/');
}
