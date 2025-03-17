'use client';

import { Transaction } from '@/lib/types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Card } from './ui/card';

interface ExpensesChartProps {
  transactions: Transaction[];
}

export default function ExpensesChart({ transactions }: ExpensesChartProps) {
  const monthlyData = transactions.reduce((acc: any[], transaction) => {
    const date = new Date(transaction.date);
    const monthYear = `${date.toLocaleString('default', {
      month: 'short',
    })} ${date.getFullYear()}`;

    const existingMonth = acc.find((item) => item.month === monthYear);
    if (existingMonth) {
      existingMonth.amount += transaction.amount;
    } else {
      acc.push({ month: monthYear, amount: transaction.amount });
    }
    return acc;
  }, []);

  if (transactions.length === 0) {
    return (
      <div className="h-[400px] flex items-center justify-center text-muted-foreground">
        No data to display
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={monthlyData}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" opacity={0.1} />
        <XAxis 
          dataKey="month" 
          stroke="hsl(var(--muted-foreground))"
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
        />
        <YAxis 
          stroke="hsl(var(--muted-foreground))"
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
        />
        <Tooltip
          formatter={(value: number) => [`$${Math.abs(value).toFixed(2)}`, 'Amount']}
          contentStyle={{
            backgroundColor: 'hsl(var(--accent))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
            color: 'hsl(var(--foreground))',
          }}
        />
        <Bar
          dataKey="amount"
          fill="url(#colorGradient)"
          radius={[6, 6, 0, 0]}
          maxBarSize={80}
        />
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--chart-1))" />
            <stop offset="100%" stopColor="hsl(var(--chart-2))" />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
}