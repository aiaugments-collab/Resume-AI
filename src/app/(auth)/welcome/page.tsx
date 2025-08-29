// sync auth status to database
'use client';
import { client } from '@/lib/client';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();
  const { data, error, isLoading } = useQuery({
    queryKey: ['get-database-sync-status'],
    refetchInterval: (query) => {
      return query.state.data?.isSynced ? false : 1000;
    },
    queryFn: async () => {
      try {
        const res = await client.auth.getDatabaseSyncStatus.$get();
        return await res.json();
      } catch (error) {
        console.error('Database sync error:', error);
        throw error;
      }
    },
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000)
  });

  useEffect(() => {
    if (data?.isSynced) {
      router.push('/dashboard/profile');
    }
  }, [data, router]);

  useEffect(() => {
    // If there's a persistent error, redirect to dashboard anyway after 10 seconds
    if (error) {
      const timeout = setTimeout(() => {
        router.push('/dashboard/profile');
      }, 10000);
      return () => clearTimeout(timeout);
    }
  }, [error, router]);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <div className='flex flex-col items-center'>
        <Loader2 className='mb-4 size-8 animate-spin' />
        {error ? (
          <div className='text-center'>
            <p className='text-lg text-red-600 mb-2'>Having trouble syncing your account...</p>
            <p className='text-sm text-gray-600'>We'll redirect you shortly, or you can try refreshing the page.</p>
          </div>
        ) : (
          <p className='text-lg'>Syncing your account data, please wait...</p>
        )}
      </div>
    </div>
  );
}
