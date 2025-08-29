'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Server, 
  Database, 
  Wifi, 
  HardDrive,
  Cpu,
  MemoryStick,
  Activity,
  CheckCircle,
  AlertTriangle,
  XCircle,
  RefreshCw,
  Clock,
  Zap,
  Globe
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

export function SystemStatus() {
  // Mock system data
  const systemHealth = {
    overall: 'healthy',
    uptime: '15 days, 4 hours, 23 minutes',
    lastRestart: '2024-01-05 03:00:00 UTC',
    version: 'v1.0.0'
  };

  const services = [
    { name: 'Web Server', status: 'healthy', uptime: '99.9%', responseTime: '45ms' },
    { name: 'Database', status: 'healthy', uptime: '99.8%', responseTime: '12ms' },
    { name: 'AI Service', status: 'healthy', uptime: '99.7%', responseTime: '2.3s' },
    { name: 'File Storage', status: 'warning', uptime: '98.5%', responseTime: '120ms' },
    { name: 'Email Service', status: 'healthy', uptime: '99.9%', responseTime: '89ms' },
    { name: 'Cache Redis', status: 'healthy', uptime: '99.9%', responseTime: '5ms' }
  ];

  const systemMetrics = {
    cpu: { usage: 45, cores: 8, load: '2.1, 1.8, 1.5' },
    memory: { used: 12.4, total: 32, percentage: 38.8 },
    disk: { used: 180, total: 500, percentage: 36 },
    network: { inbound: '125 MB/s', outbound: '89 MB/s' }
  };

  const performanceData = [
    { time: '00:00', cpu: 35, memory: 40, requests: 120 },
    { time: '04:00', cpu: 28, memory: 38, requests: 95 },
    { time: '08:00', cpu: 52, memory: 45, requests: 280 },
    { time: '12:00', cpu: 48, memory: 42, requests: 320 },
    { time: '16:00', cpu: 45, memory: 39, requests: 290 },
    { time: '20:00', cpu: 38, memory: 36, requests: 180 },
    { time: '24:00', cpu: 32, memory: 35, requests: 140 }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'healthy':
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="h-3 w-3 mr-1" />
            Healthy
          </Badge>
        );
      case 'warning':
        return (
          <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
            <AlertTriangle className="h-3 w-3 mr-1" />
            Warning
          </Badge>
        );
      case 'error':
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            <XCircle className="h-3 w-3 mr-1" />
            Error
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">System Status</h1>
          <p className="text-muted-foreground">
            Monitor system health and performance metrics
          </p>
        </div>
        <Button variant="outline">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      {/* System Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Healthy</div>
            <div className="text-xs text-muted-foreground">All systems operational</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uptime</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.9%</div>
            <div className="text-xs text-muted-foreground">{systemHealth.uptime}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <div className="text-xs text-muted-foreground">Currently online</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Requests/min</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <div className="text-xs text-muted-foreground">Average last hour</div>
          </CardContent>
        </Card>
      </div>

      {/* Services Status */}
      <Card>
        <CardHeader>
          <CardTitle>Services Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.name} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Server className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">{service.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Uptime: {service.uptime} • Response: {service.responseTime}
                    </div>
                  </div>
                </div>
                {getStatusBadge(service.status)}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Metrics */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Cpu className="h-5 w-5" />
              <span>CPU Usage</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Current Usage</span>
              <span className="text-2xl font-bold">{systemMetrics.cpu.usage}%</span>
            </div>
            <Progress value={systemMetrics.cpu.usage} className="h-2" />
            <div className="text-sm text-muted-foreground">
              {systemMetrics.cpu.cores} cores • Load average: {systemMetrics.cpu.load}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MemoryStick className="h-5 w-5" />
              <span>Memory Usage</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Used Memory</span>
              <span className="text-2xl font-bold">{systemMetrics.memory.percentage}%</span>
            </div>
            <Progress value={systemMetrics.memory.percentage} className="h-2" />
            <div className="text-sm text-muted-foreground">
              {systemMetrics.memory.used} GB / {systemMetrics.memory.total} GB
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <HardDrive className="h-5 w-5" />
              <span>Disk Usage</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Used Space</span>
              <span className="text-2xl font-bold">{systemMetrics.disk.percentage}%</span>
            </div>
            <Progress value={systemMetrics.disk.percentage} className="h-2" />
            <div className="text-sm text-muted-foreground">
              {systemMetrics.disk.used} GB / {systemMetrics.disk.total} GB
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Wifi className="h-5 w-5" />
              <span>Network Traffic</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Inbound</span>
                <span className="font-medium">{systemMetrics.network.inbound}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Outbound</span>
                <span className="font-medium">{systemMetrics.network.outbound}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>CPU & Memory Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="cpu" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  name="CPU %"
                />
                <Line 
                  type="monotone" 
                  dataKey="memory" 
                  stroke="hsl(var(--destructive))" 
                  strokeWidth={2}
                  name="Memory %"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Request Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="requests" 
                  stroke="hsl(var(--primary))" 
                  fill="hsl(var(--primary))"
                  fillOpacity={0.2}
                  name="Requests"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* System Information */}
      <Card>
        <CardHeader>
          <CardTitle>System Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <div className="text-sm font-medium text-muted-foreground">Version</div>
              <div className="text-lg font-semibold">{systemHealth.version}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Last Restart</div>
              <div className="text-lg font-semibold">{systemHealth.lastRestart}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Environment</div>
              <div className="text-lg font-semibold">Production</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Region</div>
              <div className="text-lg font-semibold">US-East-1</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
