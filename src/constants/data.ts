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
    title: 'Dashboard',
    url: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard Overview'
  },
  {
    title: 'AI Interview',
    url: '/dashboard/profile/ai-interview',
    icon: 'brain',
    label: 'AI Career Interview'
  },
  {
    title: 'Profiles',
    url: '/dashboard/profile',
    icon: 'user',
    label: 'Profile Management'
  },
  {
    title: 'Resumes',
    url: '/dashboard/resume',
    icon: 'resume',
    label: 'Resume Management',
    items: [
      {
        title: 'All Resumes',
        url: '/dashboard/resume'
      },
      {
        title: 'Create Resume',
        url: '/dashboard/resume/create'
      }
    ]
  },
  {
    title: 'Templates',
    url: '/dashboard/templates',
    icon: 'layout',
    label: 'Resume Templates'
  },
  {
    title: 'Analytics',
    url: '/dashboard/analytics',
    icon: 'analytics',
    label: 'Resume Analytics'
  },
  {
    title: 'Settings',
    url: '/dashboard/settings',
    icon: 'settings',
    label: 'Account Settings'
  },
  {
    title: 'Help & Support',
    url: '/dashboard/help',
    icon: 'help',
    label: 'Help Center'
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
