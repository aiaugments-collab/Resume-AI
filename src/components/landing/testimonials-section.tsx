'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer',
      company: 'Google',
      avatar: '/avatars/sarah.jpg',
      rating: 5,
      content: 'Resume AI completely transformed my job search. The AI-generated content was so much better than what I could write myself. I got 3x more interviews and landed my dream job at Google!',
      highlight: 'Landed dream job at Google'
    },
    {
      name: 'Marcus Johnson',
      role: 'Marketing Manager',
      company: 'Microsoft',
      avatar: '/avatars/marcus.jpg',
      rating: 5,
      content: 'I was struggling to tailor my resume for different positions. Resume AI made it effortless - just paste the job description and get a perfectly optimized resume. Saved me hours of work.',
      highlight: 'Saved hours of work'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Scientist',
      company: 'Netflix',
      avatar: '/avatars/emily.jpg',
      rating: 5,
      content: 'The ATS optimization is incredible. My resume started getting past the initial screening every time. The AI really understands what recruiters are looking for.',
      highlight: 'Passes ATS every time'
    },
    {
      name: 'David Kim',
      role: 'Product Manager',
      company: 'Spotify',
      avatar: '/avatars/david.jpg',
      rating: 5,
      content: 'As someone who hates writing about themselves, Resume AI was a lifesaver. The professional summaries it generates are compelling and authentic. Highly recommend!',
      highlight: 'Compelling summaries'
    },
    {
      name: 'Lisa Thompson',
      role: 'UX Designer',
      company: 'Adobe',
      avatar: '/avatars/lisa.jpg',
      rating: 5,
      content: 'The templates are beautiful and the AI content is spot-on. I went from getting no responses to having multiple companies reach out. This tool is a game-changer.',
      highlight: 'Multiple companies reached out'
    },
    {
      name: 'Alex Rivera',
      role: 'DevOps Engineer',
      company: 'Amazon',
      avatar: '/avatars/alex.jpg',
      rating: 5,
      content: 'I tried other resume builders but none compare to Resume AI. The keyword optimization and content quality are unmatched. Worth every penny of the Pro subscription.',
      highlight: 'Unmatched quality'
    }
  ];

  const stats = [
    { value: '95%', label: 'Success Rate' },
    { value: '3x', label: 'More Interviews' },
    { value: '10K+', label: 'Happy Users' },
    { value: '4.9★', label: 'Average Rating' }
  ];

  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Loved by{' '}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                job seekers
              </span>{' '}
              worldwide
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of professionals who have transformed their careers with Resume AI
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden border-0 bg-background shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary/20" />
                  </div>

                  {/* Rating */}
                  <div className="mb-4 flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-sm leading-relaxed text-muted-foreground mb-6">
                    &quot;{testimonial.content}&quot;
                  </blockquote>

                  {/* Highlight Badge */}
                  <Badge variant="outline" className="mb-4 text-xs">
                    {testimonial.highlight}
                  </Badge>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-r from-primary to-blue-600 text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Trusted by professionals at leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Google', 'Microsoft', 'Netflix', 'Spotify', 'Adobe', 'Amazon', 'Apple', 'Meta'].map((company) => (
              <div key={company} className="text-lg font-semibold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
