'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { ProfileWithRelations } from '@/server/routers/profile-router';
import { useState, useCallback } from 'react';
import { useProfiles } from '../api';
import CreateProfileModal from './create-profile-modal';
import { PlusCircle, Brain, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ProfileList() {
  const [selectedProfile, setSelectedProfile] =
    useState<ProfileWithRelations | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleModalChange = useCallback((open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setSelectedProfile(null);
    }
  }, []);

  const handleCreateClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedProfile(null);
    setIsOpen(true);
  }, []);

  const handleProfileClick = useCallback((profile: ProfileWithRelations) => {
    setSelectedProfile(profile);
    setIsOpen(true);
  }, []);

  const { data: profiles, isLoading } = useProfiles();

  if (isLoading) {
    return <Skeleton className='h-[400px] w-full' />;
  }

  return (
    <>
      <CreateProfileModal
        onChange={handleModalChange}
        isOpen={isOpen}
        profile={selectedProfile as ProfileWithRelations}
      />

      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {/* AI Interview Card */}
        <Card className='relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-blue-600/5 to-purple-600/5 p-6'>
          <div className='absolute top-2 right-2'>
            <Sparkles className='h-4 w-4 text-primary' />
          </div>
          <div className='flex h-full flex-col justify-between'>
            <div className='text-center'>
              <div className='mx-auto mb-3 p-2 rounded-full bg-gradient-to-r from-primary to-blue-600 w-fit'>
                <Brain className='h-6 w-6 text-white' />
              </div>
              <h3 className='font-semibold text-sm mb-2'>AI Career Interview</h3>
              <p className='text-xs text-muted-foreground mb-4'>
                Let AI guide you through creating a comprehensive profile in minutes
              </p>
            </div>
            <Link href='/dashboard/profile/ai-interview'>
              <Button className='w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white'>
                <Brain className='h-4 w-4 mr-2' />
                Start AI Interview
              </Button>
            </Link>
          </div>
        </Card>

        {/* Manual Create Card */}
        <Card
          onClick={handleCreateClick}
          className='flex cursor-pointer flex-col items-center justify-center border-2 border-dashed bg-gradient-to-br from-sidebar/60 to-sidebar p-8 hover:border-primary'
        >
          <div className='flex h-full flex-col items-center justify-center'>
            <PlusCircle className='mx-auto h-10 w-10' />
            <p className='mt-2 text-center text-sm text-muted-foreground'>
              Create manually
            </p>
          </div>
        </Card>

        {profiles?.map((profile) => (
          <Card
            key={profile.id}
            className='cursor-pointer bg-gradient-to-br from-sidebar/60 to-sidebar transition-all hover:border-primary'
            onClick={() =>
              handleProfileClick(profile as unknown as ProfileWithRelations)
            }
          >
            <CardHeader>
              <CardTitle>
                {profile.firstname} {profile.lastname}
              </CardTitle>
              <CardDescription>{profile.email}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <div className='text-sm'>
                  <span className='font-medium'>Phone:</span>{' '}
                  {profile.contactno}
                </div>
                <div className='text-sm'>
                  <span className='font-medium'>Location:</span> {profile.city},{' '}
                  {profile.country}
                </div>
                <div className='text-sm'>
                  <span className='font-medium'>Experience:</span>{' '}
                  {profile?.jobs?.length} positions
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
