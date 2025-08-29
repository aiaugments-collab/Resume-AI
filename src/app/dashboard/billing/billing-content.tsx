'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  CreditCard, 
  Download, 
  Star, 
  Check, 
  AlertTriangle,
  Receipt,
  Settings,
  Crown,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';
import PageContainer from '@/components/layout/page-container';

export function BillingContent() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const currentPlan = {
    name: 'Free',
    price: 0,
    period: 'forever',
    resumesUsed: 1,
    resumesLimit: 1,
    features: [
      '1 AI-generated resume per month',
      'Basic templates',
      'PDF download',
      'ATS optimization'
    ]
  };

  const plans = [
    {
      name: 'Free',
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: 'Perfect for getting started',
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
      popular: false
    },
    {
      name: 'Pro',
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      description: 'For serious job seekers',
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
      popular: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: 29.99,
      yearlyPrice: 299.99,
      description: 'For teams and organizations',
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
      popular: false
    }
  ];

  const recentInvoices = [
    {
      id: 'INV-001',
      date: '2024-01-15',
      amount: 9.99,
      status: 'paid',
      plan: 'Pro Monthly'
    },
    {
      id: 'INV-002',
      date: '2023-12-15',
      amount: 9.99,
      status: 'paid',
      plan: 'Pro Monthly'
    },
    {
      id: 'INV-003',
      date: '2023-11-15',
      amount: 9.99,
      status: 'paid',
      plan: 'Pro Monthly'
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (billingCycle === 'yearly' && plan.yearlyPrice > 0) {
      const monthlyCost = plan.monthlyPrice * 12;
      const savings = monthlyCost - plan.yearlyPrice;
      return Math.round((savings / monthlyCost) * 100);
    }
    return 0;
  };

  return (
    <PageContainer>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Billing & Plans</h1>
          <p className="text-muted-foreground">
            Manage your subscription and billing information
          </p>
        </div>

        {/* Current Plan */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-blue-600/5">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <Crown className="h-5 w-5 mr-2 text-primary" />
                  Current Plan: {currentPlan.name}
                </CardTitle>
                <CardDescription>
                  {currentPlan.price === 0 
                    ? 'Free forever' 
                    : `$${currentPlan.price}/${currentPlan.period}`
                  }
                </CardDescription>
              </div>
              <Badge className="bg-gradient-to-r from-primary to-blue-600 text-white">
                Active
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Resume Usage</span>
                <span>{currentPlan.resumesUsed} / {currentPlan.resumesLimit}</span>
              </div>
              <Progress 
                value={(currentPlan.resumesUsed / currentPlan.resumesLimit) * 100} 
                className="h-2"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Resets on the 15th of each month
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Included Features</h4>
                <ul className="space-y-2">
                  {currentPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-primary to-blue-600">
                  <Zap className="h-4 w-4 mr-2" />
                  Upgrade to Pro
                </Button>
                <Button variant="outline" className="w-full">
                  <Settings className="h-4 w-4 mr-2" />
                  Manage Plan
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Billing Cycle Toggle */}
        <div className="flex justify-center">
          <div className="flex items-center space-x-4 p-1 bg-muted rounded-lg">
            <Button
              variant={billingCycle === 'monthly' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </Button>
            <Button
              variant={billingCycle === 'yearly' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setBillingCycle('yearly')}
              className="relative"
            >
              Yearly
              <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1">
                Save 20%
              </Badge>
            </Button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className={`relative h-full ${
                plan.popular 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-border'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">
                      ${getPrice(plan)}
                    </span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-muted-foreground">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    )}
                  </div>
                  {getSavings(plan) > 0 && (
                    <Badge variant="secondary" className="mt-2">
                      Save {getSavings(plan)}%
                    </Badge>
                  )}
                  <p className="text-sm text-muted-foreground mt-2">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <li key={limitIndex} className="flex items-start text-sm opacity-60">
                        <div className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5 flex items-center justify-center">
                          <div className="h-1 w-3 bg-muted-foreground rounded" />
                        </div>
                        {limitation}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      plan.name === currentPlan.name 
                        ? 'bg-muted text-muted-foreground cursor-not-allowed' 
                        : plan.popular 
                          ? 'bg-gradient-to-r from-primary to-blue-600 hover:opacity-90' 
                          : ''
                    }`}
                    variant={plan.popular && plan.name !== currentPlan.name ? 'default' : 'outline'}
                    disabled={plan.name === currentPlan.name}
                  >
                    {plan.name === currentPlan.name ? 'Current Plan' : `Upgrade to ${plan.name}`}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Payment Method & Invoices */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Payment Method */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Payment Method
              </CardTitle>
              <CardDescription>
                Manage your payment information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">VISA</span>
                  </div>
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-muted-foreground">Expires 12/25</p>
                  </div>
                </div>
                <Badge variant="secondary">Default</Badge>
              </div>
              
              <div className="space-y-2">
                <Button variant="outline" className="w-full">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Add Payment Method
                </Button>
                <Button variant="ghost" className="w-full text-sm">
                  Update Billing Address
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Invoices */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Receipt className="h-5 w-5 mr-2" />
                Recent Invoices
              </CardTitle>
              <CardDescription>
                Your billing history and receipts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentInvoices.map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium">{invoice.plan}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(invoice.date).toLocaleDateString()} • {invoice.id}
                      </p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="font-medium">${invoice.amount}</p>
                      <Badge 
                        variant={invoice.status === 'paid' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {invoice.status}
                      </Badge>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download All Invoices
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Warning */}
        <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h4 className="font-medium text-orange-800 dark:text-orange-200">
                  Approaching Usage Limit
                </h4>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  You&apos;ve used {currentPlan.resumesUsed} of {currentPlan.resumesLimit} AI-generated resumes this month. 
                  Upgrade to Pro for unlimited resume generation.
                </p>
                <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
                  Upgrade Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
