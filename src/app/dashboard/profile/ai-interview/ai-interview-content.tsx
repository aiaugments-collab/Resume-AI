'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CareerInterview } from '@/components/ai-career-interview/career-interview';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Sparkles, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export function AIInterviewContent() {
  const [showInterview, setShowInterview] = useState(false);
  const router = useRouter();

  const handleStartInterview = () => {
    setShowInterview(true);
  };

  const handleInterviewComplete = (profileData: any) => {
    toast.success('Profile created successfully!');
    // Redirect to profile list or edit page
    router.push('/dashboard/profile');
  };

  const handleCancel = () => {
    if (showInterview) {
      setShowInterview(false);
    } else {
      router.back();
    }
  };

  if (showInterview) {
    return (
      <div className="h-screen flex flex-col">
        <CareerInterview 
          onComplete={handleInterviewComplete}
          onCancel={handleCancel}
        />
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => router.back()}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Profiles
          </Button>
          
          <div className="text-center">
            <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-r from-primary to-blue-600 w-fit">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2">
              AI Career Interview
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let our AI guide you through creating a comprehensive professional profile. 
              Just have a conversation, and we&apos;ll build your profile automatically.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="mx-auto mb-3 p-2 rounded-full bg-blue-100 dark:bg-blue-900 w-fit">
                <Sparkles className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">AI-Powered</h3>
              <p className="text-sm text-muted-foreground">
                Our advanced AI asks the right questions and extracts key information from your responses.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="mx-auto mb-3 p-2 rounded-full bg-green-100 dark:bg-green-900 w-fit">
                <Clock className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Quick & Easy</h3>
              <p className="text-sm text-muted-foreground">
                Complete your profile in just 5-10 minutes through natural conversation.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="mx-auto mb-3 p-2 rounded-full bg-purple-100 dark:bg-purple-900 w-fit">
                <CheckCircle className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Comprehensive</h3>
              <p className="text-sm text-muted-foreground">
                Captures work experience, education, skills, and achievements automatically.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How it works */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="h-5 w-5 mr-2 text-primary" />
              How it works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="mx-auto mb-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  1
                </div>
                <h4 className="font-medium mb-1">Start Interview</h4>
                <p className="text-sm text-muted-foreground">
                  Begin the AI-guided conversation
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  2
                </div>
                <h4 className="font-medium mb-1">Answer Questions</h4>
                <p className="text-sm text-muted-foreground">
                  Share your career story naturally
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  3
                </div>
                <h4 className="font-medium mb-1">AI Processing</h4>
                <p className="text-sm text-muted-foreground">
                  AI structures your information
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  4
                </div>
                <h4 className="font-medium mb-1">Review & Edit</h4>
                <p className="text-sm text-muted-foreground">
                  Fine-tune your profile
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sample Questions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Sample Questions You&apos;ll Be Asked</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Badge variant="outline" className="mt-0.5">Q1</Badge>
                <p className="text-sm">Tell me about your current or most recent job role. What do you do day-to-day?</p>
              </div>
              <div className="flex items-start space-x-3">
                <Badge variant="outline" className="mt-0.5">Q2</Badge>
                <p className="text-sm">What&apos;s your educational background? Include any degrees, certifications, or relevant courses.</p>
              </div>
              <div className="flex items-start space-x-3">
                <Badge variant="outline" className="mt-0.5">Q3</Badge>
                <p className="text-sm">What are your key skills and areas of expertise?</p>
              </div>
              <div className="flex items-start space-x-3">
                <Badge variant="outline" className="mt-0.5">Q4</Badge>
                <p className="text-sm">Can you describe a significant project or achievement you&apos;re proud of?</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={handleStartInterview}
            className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-8 py-6 text-lg font-semibold"
          >
            <Brain className="h-5 w-5 mr-2" />
            Start AI Interview
            <Sparkles className="h-5 w-5 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Takes 5-10 minutes • Completely free • Edit anytime
          </p>
        </div>
      </motion.div>
    </div>
  );
}
