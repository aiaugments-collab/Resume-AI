import { NavItem } from 'types';

export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItem[] = [
  {
    title: 'Intelligence Hub',
    url: '/dashboard/profile',
    icon: 'dashboard',
    label: 'Career Intelligence Dashboard'
  },
  {
    title: 'AI Career Advisor',
    url: '/dashboard/profile/ai-interview',
    icon: 'brain',
    label: 'AI-Powered Career Intelligence'
  },
  {
    title: 'Document Engine',
    url: '/dashboard/resume',
    icon: 'resume',
    label: 'Professional Document Management',
    items: [
      {
        title: 'Document Portfolio',
        url: '/dashboard/resume'
      },
      {
        title: 'Generate Document',
        url: '/dashboard/resume/create'
      }
    ]
  },
  {
    title: 'Executive Templates',
    url: '/dashboard/templates',
    icon: 'layout',
    label: 'Professional Template Library'
  },
  {
    title: 'Performance Analytics',
    url: '/dashboard/analytics',
    icon: 'analytics',
    label: 'Career Intelligence Analytics'
  },
  {
    title: 'Platform Settings',
    url: '/dashboard/settings',
    icon: 'settings',
    label: 'Account Configuration'
  },
  {
    title: 'Enterprise Support',
    url: '/dashboard/help',
    icon: 'help',
    label: 'Professional Support Center'
  }
];

export interface SaleUser {
  id: number;
  name: string;
  email: string;
  amount: string;
  image: string;
  initials: string;
}

export const recentSalesData: SaleUser[] = [
  {
    id: 1,
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    amount: '+$1,999.00',
    image: 'https://api.slingacademy.com/public/sample-users/1.png',
    initials: 'OM'
  },
  {
    id: 2,
    name: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    amount: '+$39.00',
    image: 'https://api.slingacademy.com/public/sample-users/2.png',
    initials: 'JL'
  },
  {
    id: 3,
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    amount: '+$299.00',
    image: 'https://api.slingacademy.com/public/sample-users/3.png',
    initials: 'IN'
  },
  {
    id: 4,
    name: 'William Kim',
    email: 'will@email.com',
    amount: '+$99.00',
    image: 'https://api.slingacademy.com/public/sample-users/4.png',
    initials: 'WK'
  },
  {
    id: 5,
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    amount: '+$39.00',
    image: 'https://api.slingacademy.com/public/sample-users/5.png',
    initials: 'SD'
  }
];
