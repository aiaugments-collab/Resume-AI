// Mock data for admin panel demonstration

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  plan: 'Free' | 'Premium' | 'Enterprise';
  status: 'Active' | 'Suspended' | 'Inactive';
  joinDate: string;
  lastActive: string;
  resumesGenerated: number;
  totalSpent: number;
}

export interface Subscription {
  id: string;
  userId: string;
  userName: string;
  plan: 'Premium' | 'Enterprise';
  status: 'Active' | 'Canceled' | 'Past Due';
  startDate: string;
  nextBilling: string;
  amount: number;
  interval: 'monthly' | 'yearly';
}

export interface ResumeAnalytics {
  totalGenerated: number;
  successRate: number;
  popularTemplates: Array<{
    name: string;
    usage: number;
    percentage: number;
  }>;
  dailyStats: Array<{
    date: string;
    generated: number;
  }>;
}

export interface DashboardMetrics {
  totalUsers: number;
  activeSubscriptions: number;
  monthlyRevenue: number;
  resumesGenerated: number;
  userGrowth: number;
  revenueGrowth: number;
  conversionRate: number;
  churnRate: number;
}

// Mock Users Data
export const mockUsers: AdminUser[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    plan: 'Premium',
    status: 'Active',
    joinDate: '2024-01-15',
    lastActive: '2024-01-20',
    resumesGenerated: 12,
    totalSpent: 299
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    plan: 'Free',
    status: 'Active',
    joinDate: '2024-01-18',
    lastActive: '2024-01-19',
    resumesGenerated: 3,
    totalSpent: 0
  },
  {
    id: '3',
    name: 'Michael Chen',
    email: 'michael.chen@company.com',
    plan: 'Enterprise',
    status: 'Active',
    joinDate: '2024-01-10',
    lastActive: '2024-01-20',
    resumesGenerated: 45,
    totalSpent: 999
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily.davis@email.com',
    plan: 'Premium',
    status: 'Suspended',
    joinDate: '2024-01-12',
    lastActive: '2024-01-17',
    resumesGenerated: 8,
    totalSpent: 149
  },
  {
    id: '5',
    name: 'Robert Wilson',
    email: 'robert.w@example.com',
    plan: 'Free',
    status: 'Inactive',
    joinDate: '2024-01-05',
    lastActive: '2024-01-08',
    resumesGenerated: 1,
    totalSpent: 0
  }
];

// Mock Subscriptions Data
export const mockSubscriptions: Subscription[] = [
  {
    id: 'sub_1',
    userId: '1',
    userName: 'John Doe',
    plan: 'Premium',
    status: 'Active',
    startDate: '2024-01-15',
    nextBilling: '2024-02-15',
    amount: 29.99,
    interval: 'monthly'
  },
  {
    id: 'sub_2',
    userId: '3',
    userName: 'Michael Chen',
    plan: 'Enterprise',
    status: 'Active',
    startDate: '2024-01-10',
    nextBilling: '2025-01-10',
    amount: 999,
    interval: 'yearly'
  },
  {
    id: 'sub_3',
    userId: '4',
    userName: 'Emily Davis',
    plan: 'Premium',
    status: 'Past Due',
    startDate: '2024-01-12',
    nextBilling: '2024-01-19',
    amount: 29.99,
    interval: 'monthly'
  }
];

// Mock Resume Analytics
export const mockResumeAnalytics: ResumeAnalytics = {
  totalGenerated: 1247,
  successRate: 94.2,
  popularTemplates: [
    { name: 'Modern Professional', usage: 456, percentage: 36.6 },
    { name: 'Creative Designer', usage: 312, percentage: 25.0 },
    { name: 'Tech Specialist', usage: 289, percentage: 23.2 },
    { name: 'Executive', usage: 190, percentage: 15.2 }
  ],
  dailyStats: [
    { date: '2024-01-14', generated: 45 },
    { date: '2024-01-15', generated: 52 },
    { date: '2024-01-16', generated: 38 },
    { date: '2024-01-17', generated: 61 },
    { date: '2024-01-18', generated: 47 },
    { date: '2024-01-19', generated: 55 },
    { date: '2024-01-20', generated: 49 }
  ]
};

// Mock Dashboard Metrics
export const mockDashboardMetrics: DashboardMetrics = {
  totalUsers: 12847,
  activeSubscriptions: 3421,
  monthlyRevenue: 89650,
  resumesGenerated: 45231,
  userGrowth: 12.5,
  revenueGrowth: 18.3,
  conversionRate: 26.6,
  churnRate: 3.2
};

// Helper functions
export const getUsers = (): AdminUser[] => mockUsers;
export const getSubscriptions = (): Subscription[] => mockSubscriptions;
export const getResumeAnalytics = (): ResumeAnalytics => mockResumeAnalytics;
export const getDashboardMetrics = (): DashboardMetrics => mockDashboardMetrics;

export const getUserById = (id: string): AdminUser | undefined => 
  mockUsers.find(user => user.id === id);

export const getSubscriptionsByStatus = (status: Subscription['status']): Subscription[] =>
  mockSubscriptions.filter(sub => sub.status === status);

export const getUsersByPlan = (plan: AdminUser['plan']): AdminUser[] =>
  mockUsers.filter(user => user.plan === plan);
