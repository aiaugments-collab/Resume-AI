'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Zap, 
  Target, 
  FileText, 
  Palette, 
  Download,
  Shield,
  Clock,
  TrendingUp
} from 'lucide-react';
import { motion } from 'motion/react';

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Content Generation',
      description: 'Our advanced AI analyzes job descriptions and creates tailored resume content that matches exactly what employers are looking for.',
      badge: 'Core Feature',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Target,
      title: 'ATS Optimization',
      description: 'Automatically optimized for Applicant Tracking Systems with proper keywords, formatting, and structure to pass initial screenings.',
      badge: 'Essential',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Instant Generation',
      description: 'Generate a complete, professional resume in under 30 seconds. Simply paste the job description and let AI do the work.',
      badge: 'Fast',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Palette,
      title: 'Professional Templates',
      description: 'Choose from multiple professionally designed templates that are proven to get results across different industries.',
      badge: 'Design',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      icon: FileText,
      title: 'Real-time Preview',
      description: 'See your resume come to life with live preview as you make changes. What you see is exactly what you get.',
      badge: 'Preview',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Download,
      title: 'Multiple Export Options',
      description: 'Download your resume as a high-quality PDF or save it for future edits. Your data is always accessible.',
      badge: 'Export',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Your personal information is encrypted and secure. We never share your data with third parties.',
      badge: 'Secure',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      icon: Clock,
      title: 'Version History',
      description: 'Keep track of different versions of your resume for different job applications. Never lose your work.',
      badge: 'Tracking',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Success Analytics',
      description: 'Get insights on how your resume performs and suggestions for improvements based on industry standards.',
      badge: 'Analytics',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              Features
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to create the{' '}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                perfect resume
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Powered by cutting-edge AI technology, Resume AI provides all the tools you need 
              to create professional, ATS-optimized resumes that get results.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative h-full overflow-hidden border-0 bg-gradient-to-br from-background to-muted/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 rounded-lg bg-gradient-to-r ${feature.gradient} p-3`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {feature.badge}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
