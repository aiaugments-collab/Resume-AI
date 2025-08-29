'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  CreditCard, 
  FileText, 
  DollarSign,
  TrendingUp,
  TrendingDown,
  Activity
} from 'lucide-react';
import { getDashboardMetrics, getUsers, getSubscriptions } from '@/lib/admin-mock-data';
import { RevenueChart } from './charts/revenue-chart';
import { UserGrowthChart } from './charts/user-growth-chart';

export function AdminDashboard() {
  const metrics = getDashboardMetrics();
  const users = getUsers();
  const subscriptions = getSubscriptions();

  const recentUsers = users.slice(0, 5);
  const activeSubscriptions = subscriptions.filter(sub => sub.status === 'Active');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your Resume AI platform performance
        </p>
      </div>

      {/* Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.totalUsers.toLocaleString()}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              +{metrics.userGrowth}% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.activeSubscriptions.toLocaleString()}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              Conversion: {metrics.conversionRate}%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${metrics.monthlyRevenue.toLocaleString()}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              +{metrics.revenueGrowth}% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resumes Generated</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.resumesGenerated.toLocaleString()}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Activity className="h-3 w-3 text-blue-500 mr-1" />
              This month
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <RevenueChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <UserGrowthChart />
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground">{user.email}</div>
                  </div>
                  <div className="text-right">
                    <Badge variant={user.plan === 'Free' ? 'secondary' : 'default'}>
                      {user.plan}
                    </Badge>
                    <div className="text-xs text-muted-foreground mt-1">
                      {user.joinDate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeSubscriptions.map((sub) => (
                <div key={sub.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{sub.userName}</div>
                    <div className="text-sm text-muted-foreground">{sub.plan} Plan</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">${sub.amount}</div>
                    <div className="text-xs text-muted-foreground">
                      {sub.interval}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Health</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {(100 - metrics.churnRate).toFixed(1)}%
              </div>
              <div className="text-sm text-muted-foreground">Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {metrics.conversionRate}%
              </div>
              <div className="text-sm text-muted-foreground">Conversion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                ${(metrics.monthlyRevenue / metrics.activeSubscriptions).toFixed(0)}
              </div>
              <div className="text-sm text-muted-foreground">ARPU</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {(metrics.resumesGenerated / metrics.totalUsers).toFixed(1)}
              </div>
              <div className="text-sm text-muted-foreground">Resumes per User</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
