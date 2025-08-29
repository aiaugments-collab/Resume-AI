'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { 
  Check, 
  Star,
  Zap,
  Crown,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export function PricingSection() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started with AI-powered resumes',
      badge: null,
      features: [
        '1 AI-generated resume per month',
        'Basic templates',
        'PDF download',
        'ATS optimization',
        'Basic support'
      ],
      limitations: [
        'Limited customization',
        'Watermark on PDF'
      ],
      cta: 'Get Started Free',
      popular: false,
      gradient: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: 'per month',
      description: 'For job seekers who want unlimited access and premium features',
      badge: 'Most Popular',
      features: [
        'Unlimited AI-generated resumes',
        'All premium templates',
        'Advanced customization',
        'Multiple export formats',
        'Priority support',
        'Resume analytics',
        'Cover letter generation',
        'LinkedIn optimization'
      ],
      limitations: [],
      cta: 'Start Pro Trial',
      popular: true,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For teams and organizations with advanced needs',
      badge: 'Enterprise',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Custom branding',
        'API access',
        'Advanced analytics',
        'Dedicated support',
        'Custom integrations',
        'Bulk operations'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="pricing" className="py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              Pricing
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Choose the{' '}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                perfect plan
              </span>{' '}
              for your career
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start free and upgrade as your career grows. All plans include our core AI-powered resume generation.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className={`h-full overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-primary shadow-lg scale-105 lg:scale-110' 
                  : 'border-border hover:border-primary/50'
              }`}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className={`bg-gradient-to-r ${plan.gradient} text-white px-4 py-1`}>
                      {plan.badge === 'Most Popular' && <Star className="mr-1 h-3 w-3" />}
                      {plan.badge === 'Enterprise' && <Crown className="mr-1 h-3 w-3" />}
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <div className={`mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.gradient} p-3`}>
                    {plan.name === 'Free' && <Zap className="h-6 w-6 text-white" />}
                    {plan.name === 'Pro' && <Sparkles className="h-6 w-6 text-white" />}
                    {plan.name === 'Enterprise' && <Crown className="h-6 w-6 text-white" />}
                  </div>
                  
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== 'Custom' && (
                      <span className="text-muted-foreground">/{plan.period}</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation) => (
                      <li key={limitation} className="flex items-start space-x-3 opacity-60">
                        <div className="h-5 w-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                          <div className="h-1 w-3 bg-muted-foreground rounded" />
                        </div>
                        <span className="text-sm text-muted-foreground">{limitation}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={plan.name === 'Enterprise' ? '/contact' : '/sign-up'} className="block">
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? `bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white` 
                          : ''
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </Link>

                  {plan.name === 'Pro' && (
                    <p className="mt-3 text-center text-xs text-muted-foreground">
                      7-day free trial • Cancel anytime
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 rounded-full bg-green-50 dark:bg-green-950 px-4 py-2 text-sm text-green-700 dark:text-green-300">
            <Check className="h-4 w-4" />
            <span>30-day money-back guarantee on all paid plans</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
