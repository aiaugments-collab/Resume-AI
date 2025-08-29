'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Download, 
  FileText, 
  Target,
  Award,
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { motion } from 'motion/react';
import PageContainer from '@/components/layout/page-container';

export function AnalyticsContent() {
  const [timeRange, setTimeRange] = useState('30d');

  const stats = [
    {
      title: 'Total Resume Views',
      value: '2,847',
      change: '+12.5%',
      trend: 'up',
      icon: Eye,
      description: 'Views in the last 30 days'
    },
    {
      title: 'Downloads',
      value: '1,234',
      change: '+8.2%',
      trend: 'up',
      icon: Download,
      description: 'Resume downloads'
    },
    {
      title: 'Applications Sent',
      value: '89',
      change: '-2.1%',
      trend: 'down',
      icon: FileText,
      description: 'Job applications submitted'
    },
    {
      title: 'Response Rate',
      value: '23.6%',
      change: '+5.3%',
      trend: 'up',
      icon: Target,
      description: 'Employer responses received'
    }
  ];

  const recentActivity = [
    {
      type: 'view',
      resume: 'Software Engineer Resume',
      company: 'Google',
      time: '2 hours ago',
      location: 'Mountain View, CA'
    },
    {
      type: 'download',
      resume: 'Product Manager Resume',
      company: 'Microsoft',
      time: '5 hours ago',
      location: 'Seattle, WA'
    },
    {
      type: 'application',
      resume: 'Data Scientist Resume',
      company: 'Netflix',
      time: '1 day ago',
      location: 'Los Gatos, CA'
    },
    {
      type: 'view',
      resume: 'UX Designer Resume',
      company: 'Adobe',
      time: '2 days ago',
      location: 'San Jose, CA'
    }
  ];

  const topPerformingResumes = [
    {
      name: 'Software Engineer Resume',
      views: 456,
      downloads: 234,
      applications: 12,
      responseRate: 25,
      template: 'Professional Executive'
    },
    {
      name: 'Product Manager Resume',
      views: 389,
      downloads: 198,
      applications: 8,
      responseRate: 37.5,
      template: 'Modern Graduate'
    },
    {
      name: 'Data Scientist Resume',
      views: 312,
      downloads: 156,
      applications: 6,
      responseRate: 16.7,
      template: 'Tech Minimalist'
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'view': return Eye;
      case 'download': return Download;
      case 'application': return FileText;
      default: return Eye;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'view': return 'text-blue-600';
      case 'download': return 'text-green-600';
      case 'application': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <PageContainer>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
            <p className="text-muted-foreground">
              Track your resume performance and application success
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {['7d', '30d', '90d', '1y'].map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTimeRange(range)}
              >
                {range}
              </Button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                      <div className="flex items-center space-x-1">
                        {stat.trend === 'up' ? (
                          <ArrowUpRight className="h-4 w-4 text-green-600" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 text-red-600" />
                        )}
                        <span className={`text-sm font-medium ${
                          stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    <div className="p-3 rounded-full bg-muted">
                      <stat.icon className="h-6 w-6 text-muted-foreground" />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chart Placeholder */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Resume Performance Over Time
                </CardTitle>
                <CardDescription>
                  Views, downloads, and applications for the last {timeRange}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground">Chart visualization would go here</p>
                    <p className="text-sm text-muted-foreground">
                      Interactive charts showing trends over time
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Latest interactions with your resumes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const Icon = getActivityIcon(activity.type);
                  const colorClass = getActivityColor(activity.type);
                  
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`p-2 rounded-full bg-muted ${colorClass}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">
                          {activity.resume}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.company} • {activity.location}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-xs capitalize">
                        {activity.type}
                      </Badge>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Top Performing Resumes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              Top Performing Resumes
            </CardTitle>
            <CardDescription>
              Your most successful resumes ranked by performance metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {topPerformingResumes.map((resume, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{resume.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Template: {resume.template}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      #{index + 1}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">{resume.views}</p>
                      <p className="text-xs text-muted-foreground">Views</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{resume.downloads}</p>
                      <p className="text-xs text-muted-foreground">Downloads</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600">{resume.applications}</p>
                      <p className="text-xs text-muted-foreground">Applications</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-orange-600">{resume.responseRate}%</p>
                      <p className="text-xs text-muted-foreground">Response Rate</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Performance Score</span>
                      <span>{Math.round((resume.responseRate / 40) * 100)}%</span>
                    </div>
                    <Progress value={(resume.responseRate / 40) * 100} className="h-2" />
                  </div>
                  
                  {index < topPerformingResumes.length - 1 && (
                    <div className="border-b border-muted mt-6" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Insights & Recommendations */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                Key Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <p className="text-sm">Your response rate is 18% above average</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <p className="text-sm">Tech companies view your resume 40% more</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <p className="text-sm">Peak activity is on Tuesday mornings</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2 text-primary" />
                Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="text-sm font-medium">Optimize for Mobile</p>
                  <p className="text-xs text-muted-foreground">
                    60% of views are from mobile devices
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="text-sm font-medium">Update Keywords</p>
                  <p className="text-xs text-muted-foreground">
                    Add trending skills to improve visibility
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="text-sm font-medium">Try New Template</p>
                  <p className="text-xs text-muted-foreground">
                    Creative templates show 25% higher engagement
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
