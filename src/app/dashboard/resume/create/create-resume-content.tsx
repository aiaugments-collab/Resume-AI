'use client';

import { ProfileSelectionStep } from '@/features/resume/components/profile-selection-step';
import useMultistepForm from '@/hooks/use-multistep-form';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ResumeCreateForm } from '@/features/resume/components/resume-create-form';
import PageContainer from '@/components/layout/page-container';

export default function CreateResumeContent() {
  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(
    null
  );

  const { currentStepIndex, step, isFirstStep, back, next } =
    useMultistepForm([
      <ProfileSelectionStep
        key='profile-selection'
        onProfileSelect={(profileId) => {
          setSelectedProfileId(profileId);
          next();
        }}
      />,
      <ResumeCreateForm key='resume-form' profileId={selectedProfileId} />
    ]);

  return (
    <PageContainer scrollable>
      <div className='flex flex-1 flex-col space-y-4'>
        <div className='mb-8'>
          <h1 className='mb-2 text-3xl font-bold'>Generate Professional Document</h1>
          <div className='flex items-center gap-2'>
            <div
              className={`h-2 w-2 rounded-full ${
                currentStepIndex === 0 ? 'bg-primary' : 'bg-muted'
              }`}
            />
            <div
              className={`h-2 w-2 rounded-full ${
                currentStepIndex === 1 ? 'bg-primary' : 'bg-muted'
              }`}
            />
          </div>
        </div>

        {step}

        <div className='mt-6 flex justify-between'>
          {!isFirstStep && (
            <Button variant='outline' onClick={back}>
              Back
            </Button>
          )}
          {isFirstStep && <div />}
        </div>
      </div>
    </PageContainer>
  );
}
