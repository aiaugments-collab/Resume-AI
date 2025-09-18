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
      title: 'Machine Learning Content Engine',
      description: 'Proprietary neural networks analyze market trends, hiring patterns, and role requirements to generate contextually optimized professional narratives with predictive accuracy.',
      badge: 'Enterprise AI',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Target,
      title: 'Advanced ATS Penetration System',
      description: 'Multi-layered algorithmic optimization engine ensuring maximum compatibility across 500+ enterprise ATS platforms with real-time parsing validation and keyword density optimization.',
      badge: 'Strategic',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Intelligent Automation Framework',
      description: 'High-performance processing architecture delivers enterprise-grade document generation with sub-15-second latency and 99.9% accuracy consistency.',
      badge: 'Performance',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Palette,
      title: 'Executive Template Portfolio',
      description: 'Curated collection of industry-specific templates designed by Fortune 500 consultants, optimized for C-suite, senior management, and executive-level positioning.',
      badge: 'Premium',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      icon: FileText,
      title: 'Real-Time Rendering Engine',
      description: 'Advanced WYSIWYG technology with live collaborative editing, version control, and instant preview capabilities for streamlined workflow optimization.',
      badge: 'Technology',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Download,
      title: 'Multi-Format Distribution Hub',
      description: 'Enterprise-grade export capabilities supporting 15+ formats including PDF/A compliance, Microsoft Word integration, and LinkedIn API synchronization.',
      badge: 'Integration',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security Infrastructure',
      description: 'SOC 2 Type II compliant platform with end-to-end encryption, GDPR compliance, and zero-trust architecture ensuring maximum data protection.',
      badge: 'Compliance',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      icon: Clock,
      title: 'Intelligent Version Management',
      description: 'Advanced document lifecycle management with automated versioning, collaborative workflows, and audit trail capabilities for enterprise accountability.',
      badge: 'Management',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Career Intelligence',
      description: 'Advanced analytics dashboard leveraging market data, industry trends, and competitive intelligence to provide strategic career positioning insights and optimization recommendations.',
      badge: 'Intelligence',
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
              Platform Capabilities
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Enterprise-Grade Career Intelligence{' '}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Platform Capabilities
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Leverage our proprietary AI architecture, advanced machine learning algorithms, and enterprise-grade infrastructure 
              to deliver unparalleled career optimization solutions with measurable ROI and strategic competitive advantage.
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
