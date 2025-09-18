'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Bot, 
  User, 
  Send, 
  Sparkles, 
  Loader2,
  MessageCircle,
  Brain
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';

interface Message {
  id: string;
  type: 'ai' | 'user';
  content: string;
  timestamp: Date;
}

interface CareerInterviewProps {
  onComplete: (profileData: any) => void;
  onCancel: () => void;
}

export function CareerInterview({ onComplete, onCancel }: CareerInterviewProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [profileName, setProfileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const totalSteps = 7;
  const progress = (currentStep / totalSteps) * 100;

  const starterQuestions = [
    "Hi! I&apos;m your AI career assistant. Let&apos;s create an amazing profile together! 🚀",
    "First, what should we call this profile? (e.g., 'Software Engineer Profile', 'Marketing Professional')",
    "Great! Now, tell me about your current or most recent job role. What do you do day-to-day?",
    "What&apos;s your educational background? Include any degrees, certifications, or relevant courses.",
    "What are your key skills and areas of expertise?",
    "Can you describe a significant project or achievement you&apos;re proud of?",
    "What tools, technologies, or software do you work with regularly?",
    "What languages do you speak and at what level?",
    "Perfect! Let me process all this information and create your professional profile..."
  ];

  useEffect(() => {
    // Start the conversation
    addAIMessage(starterQuestions[0]);
    setTimeout(() => {
      addAIMessage(starterQuestions[1]);
      setCurrentStep(1);
    }, 1000);
  }, [starterQuestions]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addAIMessage = (content: string) => {
    const message: Message = {
      id: Date.now().toString(),
      type: 'ai',
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, message]);
  };

  const addUserMessage = (content: string) => {
    const message: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, message]);
  };

  const handleSendMessage = async () => {
    if (!currentInput.trim()) return;

    const userMessage = currentInput.trim();
    setCurrentInput('');
    setIsLoading(true);

    // Handle profile name input
    if (currentStep === 1) {
      setProfileName(userMessage);
      addUserMessage(userMessage);
      
      setTimeout(() => {
        addAIMessage(starterQuestions[2]);
        setCurrentStep(2);
        setIsLoading(false);
      }, 800);
      return;
    }

    // Add user message
    addUserMessage(userMessage);

    // Continue with next question
    if (currentStep < starterQuestions.length - 1) {
      setTimeout(() => {
        addAIMessage(starterQuestions[currentStep + 1]);
        setCurrentStep(currentStep + 1);
        setIsLoading(false);
      }, 800);
    } else {
      // Process the interview
      await processInterview();
    }
  };

  const processInterview = async () => {
    setIsProcessing(true);
    setIsLoading(false);

    try {
      // Collect all user responses (excluding profile name)
      const userResponses = messages
        .filter(msg => msg.type === 'user')
        .slice(1) // Skip profile name
        .map(msg => msg.content)
        .join('\n\n');

      // Call the API to process the interview
      const response = await fetch('/api/careerInterview/processInterview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          responses: userResponses,
          profileName: profileName
        }),
      });

      const result = await response.json();

      if (result.success) {
        addAIMessage("🎯 Excellent! Your professional profile has been successfully architected. You may now review and optimize it before deploying your career intelligence document.");
        
        setTimeout(() => {
          onComplete(result.profile);
        }, 2000);
      } else {
        throw new Error(result.error || 'Failed to process interview');
      }
    } catch (error) {
      // TODO: Replace with proper error reporting service (e.g., Sentry)
      if (process.env.NODE_ENV === 'development') {
        console.error('Error processing interview:', error);
      }
        toast.error('Platform processing error. Please retry or contact enterprise support.');
        addAIMessage("System processing error encountered. Please retry the operation or contact our enterprise support team for assistance.");
      setIsProcessing(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-gradient-to-r from-primary to-blue-600">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="font-semibold">AI Career Interview</h2>
              <p className="text-sm text-muted-foreground">
                Let&apos;s build your professional profile together
              </p>
            </div>
          </div>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </div>
        
        {/* Progress */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <span>Progress</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-3 max-w-[80%] ${
                message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}>
                <div className={`p-2 rounded-full ${
                  message.type === 'ai' 
                    ? 'bg-gradient-to-r from-primary to-blue-600' 
                    : 'bg-muted'
                }`}>
                  {message.type === 'ai' ? (
                    <Bot className="h-4 w-4 text-white" />
                  ) : (
                    <User className="h-4 w-4" />
                  )}
                </div>
                <Card className={`${
                  message.type === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-background'
                }`}>
                  <CardContent className="p-3">
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                    <p className="text-xs opacity-70 mt-2">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Loading indicator */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-gradient-to-r from-primary to-blue-600">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <Card className="bg-background">
                <CardContent className="p-3">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-sm text-muted-foreground">AI is thinking...</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}

        {/* Processing indicator */}
        {isProcessing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center"
          >
            <Card className="bg-gradient-to-r from-primary/10 to-blue-600/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-primary to-blue-600">
                    <Sparkles className="h-6 w-6 text-white animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Processing Your Profile</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      AI is analyzing your responses and creating your professional profile...
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Loader2 className="h-4 w-4 animate-spin text-primary" />
                    <span className="text-sm">This may take a few moments</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      {!isProcessing && (
        <div className="border-t bg-background/95 backdrop-blur p-4">
          <div className="flex space-x-3">
            <div className="flex-1">
              {currentStep === 1 ? (
                <Input
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter professional profile identifier..."
                  disabled={isLoading}
                />
              ) : (
                <Textarea
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your professional details... (Press Enter to submit)"
                  className="min-h-[60px] resize-none"
                  disabled={isLoading}
                />
              )}
            </div>
            <Button
              onClick={handleSendMessage}
              disabled={!currentInput.trim() || isLoading}
              size="lg"
              className="px-6"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
          
          <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-xs">
                <MessageCircle className="h-3 w-3 mr-1" />
                Step {currentStep} of {totalSteps}
              </Badge>
              {profileName && (
                <Badge variant="secondary" className="text-xs">
                  Profile: {profileName}
                </Badge>
              )}
            </div>
            <span>Press Enter to send • Shift+Enter for new line</span>
          </div>
        </div>
      )}
    </div>
  );
}
