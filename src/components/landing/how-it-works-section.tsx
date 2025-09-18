'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  User, 
  FileText, 
  Brain, 
  Download,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export function HowItWorksSection() {
  const steps = [
    {
      step: 1,
      icon: User,
      title: 'Professional Profile Architecture',
      description: 'Establish comprehensive professional identity framework through structured data collection and strategic competency mapping for optimal market positioning.',
      details: [
        'Executive profile configuration',
        'Achievement quantification metrics',
        'Credential verification system',
        'Strategic competency architecture'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      step: 2,
      icon: FileText,
      title: 'Market Intelligence Integration',
      description: 'Deploy advanced natural language processing to extract strategic requirements, competitive positioning insights, and market dynamics from target role specifications.',
      details: [
        'Role specification analysis',
        'Market requirement extraction',
        'Competitive landscape mapping',
        'Strategic keyword identification'
      ],
      color: 'from-green-500 to-blue-500'
    },
    {
      step: 3,
      icon: Brain,
      title: 'AI Optimization Engine',
      description: 'Execute proprietary machine learning algorithms to deliver contextually optimized professional narratives with predictive accuracy and strategic market alignment.',
      details: [
        'Semantic optimization framework',
        'Contextual narrative generation',
        'ATS penetration algorithms',
        'Strategic positioning intelligence'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: 4,
      icon: Download,
      title: 'Enterprise Deployment',
      description: 'Generate publication-ready executive documents with enterprise-grade formatting, compliance standards, and multi-channel distribution capabilities.',
      details: [
        'Real-time collaborative editing',
        'Executive template portfolio',
        'Enterprise-grade PDF generation',
        'Multi-platform distribution'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              Platform Architecture
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Strategic career optimization through{' '}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                intelligent automation
              </span>{' '}
              in 4 enterprise-grade processes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our proprietary AI architecture delivers data-driven career optimization through advanced machine learning, 
              predictive analytics, and strategic market intelligence for maximum competitive advantage.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="h-full overflow-hidden border-0 bg-background shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      {/* Step Number & Icon */}
                      <div className="flex-shrink-0">
                        <div className={`relative rounded-full bg-gradient-to-r ${step.color} p-4 shadow-lg`}>
                          <step.icon className="h-8 w-8 text-white" />
                          <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-background text-xs font-bold text-foreground shadow-md">
                            {step.step}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {step.description}
                        </p>
                        
                        {/* Details List */}
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>

                  {/* Connecting Line for Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-muted-foreground/30 to-transparent" />
                  )}
                </Card>

                {/* Step connector for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link href="/sign-in">
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Deploy Career Intelligence Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Enterprise trial available • SOC 2 compliant • Sub-15-second processing
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
