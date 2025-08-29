'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jul', revenue: 45000 },
  { month: 'Aug', revenue: 52000 },
  { month: 'Sep', revenue: 61000 },
  { month: 'Oct', revenue: 68000 },
  { month: 'Nov', revenue: 75000 },
  { month: 'Dec', revenue: 82000 },
  { month: 'Jan', revenue: 89650 }
];

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip 
          formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Revenue']}
        />
        <Line 
          type="monotone" 
          dataKey="revenue" 
          stroke="hsl(var(--primary))" 
          strokeWidth={2}
          dot={{ fill: 'hsl(var(--primary))' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
