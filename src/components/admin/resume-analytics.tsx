'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  FileText, 
  TrendingUp, 
  Zap, 
  Target,
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { getResumeAnalytics, getDashboardMetrics } from '@/lib/admin-mock-data';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export function ResumeAnalytics() {
  const analytics = getResumeAnalytics();
  const metrics = getDashboardMetrics();

  // Mock additional data
  const weeklyStats = [
    { day: 'Mon', generated: 145, successful: 138 },
    { day: 'Tue', generated: 167, successful: 159 },
    { day: 'Wed', generated: 134, successful: 127 },
    { day: 'Thu', generated: 189, successful: 178 },
    { day: 'Fri', generated: 201, successful: 192 },
    { day: 'Sat', generated: 98, successful: 94 },
    { day: 'Sun', generated: 87, successful: 82 }
  ];

  const aiPerformance = [
    { metric: 'Processing Speed', value: 2.3, unit: 'seconds' },
    { metric: 'Success Rate', value: 94.2, unit: '%' },
    { metric: 'User Satisfaction', value: 4.7, unit: '/5' },
    { metric: 'Template Match', value: 89.1, unit: '%' }
  ];

  const usageByHour = [
    { hour: '00', usage: 12 }, { hour: '01', usage: 8 }, { hour: '02', usage: 5 },
    { hour: '03', usage: 3 }, { hour: '04', usage: 4 }, { hour: '05', usage: 7 },
    { hour: '06', usage: 15 }, { hour: '07', usage: 28 }, { hour: '08', usage: 45 },
    { hour: '09', usage: 67 }, { hour: '10', usage: 89 }, { hour: '11', usage: 95 },
    { hour: '12', usage: 78 }, { hour: '13', usage: 82 }, { hour: '14', usage: 91 },
    { hour: '15', usage: 88 }, { hour: '16', usage: 76 }, { hour: '17', usage: 65 },
    { hour: '18', usage: 54 }, { hour: '19', usage: 43 }, { hour: '20', usage: 32 },
    { hour: '21', usage: 25 }, { hour: '22', usage: 18 }, { hour: '23', usage: 14 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Resume Analytics</h1>
        <p className="text-muted-foreground">
          Monitor resume generation performance and usage patterns
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Generated</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.totalGenerated.toLocaleString()}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              +12.5% this month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{analytics.successRate}%</div>
            <div className="text-xs text-muted-foreground">
              AI generation success
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Processing Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3s</div>
            <div className="text-xs text-muted-foreground">
              Per resume generation
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Average</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">178</div>
            <div className="text-xs text-muted-foreground">
              Resumes per day
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Daily Generation Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={analytics.dailyStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="generated" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="generated" fill="hsl(var(--primary))" name="Generated" />
                <Bar dataKey="successful" fill="hsl(var(--primary))" fillOpacity={0.6} name="Successful" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Template Popularity */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Popular Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.popularTemplates.map((template, index) => (
                <div key={template.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">#{index + 1}</Badge>
                      <span className="font-medium">{template.name}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {template.usage} uses ({template.percentage}%)
                    </div>
                  </div>
                  <Progress value={template.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Usage by Hour</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={usageByHour}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="usage" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* AI Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>AI Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            {aiPerformance.map((metric) => (
              <div key={metric.metric} className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-primary">
                  {metric.value}{metric.unit}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {metric.metric}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Health */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>System Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>API Response Time</span>
                <Badge variant="default" className="bg-green-100 text-green-800">Excellent</Badge>
              </div>
              <div className="flex justify-between">
                <span>AI Model Status</span>
                <Badge variant="default" className="bg-green-100 text-green-800">Online</Badge>
              </div>
              <div className="flex justify-between">
                <span>Database Health</span>
                <Badge variant="default" className="bg-green-100 text-green-800">Optimal</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-blue-500" />
              <span>Processing Queue</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Pending Jobs</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between">
                <span>Processing</span>
                <span className="font-medium">2</span>
              </div>
              <div className="flex justify-between">
                <span>Completed Today</span>
                <span className="font-medium">1,247</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              <span>Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                No critical alerts
              </div>
              <div className="text-sm">
                <Badge variant="secondary">Info</Badge>
                <span className="ml-2">High usage detected</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

