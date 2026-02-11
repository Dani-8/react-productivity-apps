import React, { useState, useEffect } from 'react';
import Header from './components/ExpenseTracker/Header';
import KpiCards from './components/ExpenseTracker/KpiCards';
import TransactionForm from './components/ExpenseTracker/TransactionForm';
import TransactionList from './components/ExpenseTracker/TransactionList';
import TransactionItems from './components/ExpenseTracker/TransactionItems';
import EmptyState from './components/ExpenseTracker/EmptyState';
import './App.css'

function App() {
  const [transactions, setTransactions] = useState([])

  const addTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions])
  }


  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id))
  }

  const clearAllTransactions = () => {
    setTransactions([])
  }



  // KPIs Calculation
  const income = transactions.filter(t => t.type === "income").reduce((acc, t) => acc + t.amount, 0)
  const expense = transactions.filter(t => t.type === "expense").reduce((acc, t) => acc + t.amount, 0)
  const balance = income - expense


  return (
    <div className='w-full min-h-screen bg-slate-50 p-4 md:p-8 font-sans'>
      <div className='max-w-5xl mx-auto'>

        <Header />

        <KpiCards income={income} expense={expense} balance={balance} />

        <TransactionForm onAdd={addTransaction} />

        <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} onClearAllTransactions={clearAllTransactions} />

      </div>
    </div>
  )
}

export default App
