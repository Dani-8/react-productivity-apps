import React from 'react';
import {Routes, Route} from "react-router-dom"

import Header from "./portal/Header"
import AppCard  from "./portal/AppCard"

import ExpenseTracker from "./apps/ExpenseTracker/ExpenseTracker"
import Todo from "./apps/Todo/Todo"

import './App.css'

function App() {
    return (
      <div className='min-h-screen bg-slate-50 p-6 md:p-12'>
        <div className='max-w-4xl mx-auto'>
          <Header />
            <h3 className="text-lg font-bold text-slate-700 mb-6">Select a workspace:</h3>
          <AppCard />
        </div>
      </div>
    )
}

export default App
