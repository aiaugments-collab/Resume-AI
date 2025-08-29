'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Download,
  AlertTriangle,
  Info,
  CheckCircle,
  XCircle,
  Clock,
  User,
  Settings,
  Database
} from 'lucide-react';

interface LogEntry {
  id: string;
  timestamp: string;
  level: 'info' | 'warning' | 'error' | 'success';
  action: string;
  user: string;
  details: string;
  ip: string;
}

const mockLogs: LogEntry[] = [
  {
    id: '1',
    timestamp: '2024-01-20 14:30:25',
    level: 'info',
    action: 'User Login',
    user: 'admin@resumeai.com',
    details: 'Successful admin login',
    ip: '192.168.1.100'
  },
  {
    id: '2',
    timestamp: '2024-01-20 14:25:12',
    level: 'success',
    action: 'User Management',
    user: 'admin@resumeai.com',
    details: 'Updated user permissions for john.doe@example.com',
    ip: '192.168.1.100'
  },
  {
    id: '3',
    timestamp: '2024-01-20 14:20:45',
    level: 'warning',
    action: 'System Alert',
    user: 'system',
    details: 'High CPU usage detected (85%)',
    ip: 'localhost'
  },
  {
    id: '4',
    timestamp: '2024-01-20 14:15:33',
    level: 'info',
    action: 'Database',
    user: 'system',
    details: 'Automated backup completed successfully',
    ip: 'localhost'
  },
  {
    id: '5',
    timestamp: '2024-01-20 14:10:18',
    level: 'error',
    action: 'API Error',
    user: 'system',
    details: 'Failed to process resume generation request',
    ip: '203.0.113.45'
  },
  {
    id: '6',
    timestamp: '2024-01-20 14:05:07',
    level: 'info',
    action: 'Subscription',
    user: 'admin@resumeai.com',
    details: 'Created new Enterprise subscription plan',
    ip: '192.168.1.100'
  },
  {
    id: '7',
    timestamp: '2024-01-20 14:00:52',
    level: 'success',
    action: 'User Management',
    user: 'admin@resumeai.com',
    details: 'Suspended user account: spam.user@example.com',
    ip: '192.168.1.100'
  },
  {
    id: '8',
    timestamp: '2024-01-20 13:55:41',
    level: 'warning',
    action: 'Security',
    user: 'system',
    details: 'Multiple failed login attempts from IP: 198.51.100.42',
    ip: '198.51.100.42'
  }
];

export function AdminLogs() {
  const [logs] = useState<LogEntry[]>(mockLogs);
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [actionFilter, setActionFilter] = useState<string>('all');

  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.user.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = levelFilter === 'all' || log.level === levelFilter;
    const matchesAction = actionFilter === 'all' || log.action.toLowerCase().includes(actionFilter.toLowerCase());
    
    return matchesSearch && matchesLevel && matchesAction;
  });

  const getLevelBadge = (level: LogEntry['level']) => {
    switch (level) {
      case 'info':
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            <Info className="h-3 w-3 mr-1" />
            Info
          </Badge>
        );
      case 'success':
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="h-3 w-3 mr-1" />
            Success
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
        return <Badge variant="outline">{level}</Badge>;
    }
  };

  const getActionIcon = (action: string) => {
    if (action.toLowerCase().includes('user')) return <User className="h-4 w-4" />;
    if (action.toLowerCase().includes('system')) return <Settings className="h-4 w-4" />;
    if (action.toLowerCase().includes('database')) return <Database className="h-4 w-4" />;
    return <Clock className="h-4 w-4" />;
  };

  const logStats = {
    total: logs.length,
    info: logs.filter(l => l.level === 'info').length,
    warning: logs.filter(l => l.level === 'warning').length,
    error: logs.filter(l => l.level === 'error').length,
    success: logs.filter(l => l.level === 'success').length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Admin Logs</h1>
        <p className="text-muted-foreground">
          Monitor system activities and admin actions
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-5">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{logStats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Info</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{logStats.info}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Success</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{logStats.success}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Warnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{logStats.warning}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Errors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{logStats.error}</div>
          </CardContent>
        </Card>
      </div>

      {/* Logs Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>System Logs</CardTitle>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Logs
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search logs by action, details, or user..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="w-[150px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="error">Error</SelectItem>
              </SelectContent>
            </Select>
            <Select value={actionFilter} onValueChange={setActionFilter}>
              <SelectTrigger className="w-[150px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by action" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Actions</SelectItem>
                <SelectItem value="user">User Actions</SelectItem>
                <SelectItem value="system">System Events</SelectItem>
                <SelectItem value="security">Security</SelectItem>
                <SelectItem value="database">Database</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Logs Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Details</TableHead>
                  <TableHead>IP Address</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-mono text-sm">
                      {log.timestamp}
                    </TableCell>
                    <TableCell>
                      {getLevelBadge(log.level)}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getActionIcon(log.action)}
                        <span>{log.action}</span>
                      </div>
                    </TableCell>
                    <TableCell>{log.user}</TableCell>
                    <TableCell className="max-w-md truncate">
                      {log.details}
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      {log.ip}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredLogs.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No logs found matching your criteria.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
