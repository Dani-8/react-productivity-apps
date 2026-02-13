import React from 'react';
import {Routes, Route} from "react-router-dom"

import Header from "./portal/Header"
import AppCardsList  from "./portal/AppCardsList"

import ExpenseTracker from "./apps/ExpenseTracker/ExpenseTracker"
import Todo from "./apps/Todo/Todo"

import './App.css'

function App() {
    return (
      <Routes>
        <Route path='/' element={
          <div className='min-h-screen bg-slate-50 p-6 md:p-12'>
            <div className='max-w-4xl mx-auto'>
              <Header />
              <h3 className="text-lg font-bold text-slate-700 mb-6">Select a workspace:</h3>
              <AppCardsList />
            </div>
          </div>
        }/>

          <Route path="/apps/ExpenseTracker/ExpenseTracker" element={<ExpenseTracker />} />
          <Route path="/apps/Todo/Todo" element={<Todo />} />
      </Routes>
    )
}

export default App
