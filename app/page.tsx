'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TransactionList from '@/components/TransactionList';
import TransactionForm from '@/components/TransactionForm';
import ExpensesChart from '@/components/ExpensesChart';
import { PlusCircle } from 'lucide-react';
import { Transaction } from '@/lib/types';

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now().toString() }]);
    setShowForm(false);
  };

  const deleteTransaction = (id: string) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const editTransaction = (updatedTransaction: Transaction) => {
    setTransactions(
      transactions.map((t) => (t.id === updatedTransaction.id ? updatedTransaction : t))
    );
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Personal Finance Tracker
          </h1>
          <Button 
            onClick={() => setShowForm(true)} 
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            <PlusCircle className="w-5 h-5" />
            Add Transaction
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 bg-accent border-accent">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Monthly Expenses</h2>
            <ExpensesChart transactions={transactions} />
          </Card>

          <Card className="p-6 bg-accent border-accent">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Recent Transactions</h2>
            <TransactionList
              transactions={transactions}
              onDelete={deleteTransaction}
              onEdit={editTransaction}
            />
          </Card>
        </div>

        {showForm && (
          <TransactionForm
            onSubmit={addTransaction}
            onCancel={() => setShowForm(false)}
          />
        )}
      </div>
    </div>
  );
}