'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jul', users: 8500 },
  { month: 'Aug', users: 9200 },
  { month: 'Sep', users: 10100 },
  { month: 'Oct', users: 10800 },
  { month: 'Nov', users: 11600 },
  { month: 'Dec', users: 12200 },
  { month: 'Jan', users: 12847 }
];

export function UserGrowthChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip 
          formatter={(value) => [Number(value).toLocaleString(), 'Users']}
        />
        <Area 
          type="monotone" 
          dataKey="users" 
          stroke="hsl(var(--primary))" 
          fill="hsl(var(--primary))"
          fillOpacity={0.2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
