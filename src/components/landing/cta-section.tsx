'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-blue-600 to-purple-600 px-8 py-20 text-center shadow-2xl"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-blue-600/90 to-purple-600/90" />
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur">
              <Sparkles className="h-8 w-8 text-white" />
            </div>

            {/* Headline */}
            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to deploy enterprise-grade career intelligence?
            </h2>

            {/* Subtitle */}
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
              Join Fortune 500 executives and enterprise professionals leveraging our AI-powered career optimization platform. 
              Deploy strategic career intelligence solutions today.
            </p>

            {/* Benefits */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span>Sub-15-second processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <ArrowRight className="h-4 w-4" />
                <span>Enterprise-grade optimization</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4" />
                <span>Predictive career analytics</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/sign-in">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Deploy Platform Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold backdrop-blur"
                >
                  Sign In
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 text-sm text-white/70">
              <p>✓ Enterprise trial available • ✓ SOC 2 compliant • ✓ 24/7 support included</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
