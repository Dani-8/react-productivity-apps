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
  const income = transactions.filter(t => t)



  return (
    <div className='w-full min-h-screen bg-slate-50 p-4 md:p-8 font-sans'>
      <div className='max-w-5xl mx-auto'>

        <Header />

        <KpiCards income={1000} expense={500} balance={500} />

        <TransactionForm onAdd={addTransaction} />

        <TransactionList />

        {/* <TransactionItems /> */}

        {/* <EmptyState /> */}

      </div>
    </div>
  )
}

export default App
