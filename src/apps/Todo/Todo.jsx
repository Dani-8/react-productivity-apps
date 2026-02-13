import React, { useState } from "react"

import Header from "./components/Header"
import StatsCards from "./components/StatsCards"
import TodoInput from "./components/TodoInput"
import Filters from "./components/Filters"
import EmptyState from "./components/EmptyState"
import TodoList from "./components/TodoList"
// ====================================================
// ====================================================
// ====================================================

function Todo() {

    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("All")
    const [editingId, setEditingId] = useState(null)
    const [editText, setEditText] = useState("")


    const addTodo = (e) => {
        e.preventDefault()

        if (!input.trim()) return

        const newTodo = {
            id: Date.now(),
            text: input.trim(),
            completed: false,
            createdAt: new Date().toLocaleDateString(),
        }

        setTodos([newTodo, ...todos]);
        setInput('');
    }

    // -------------------------------------------------------
    // -------------------------------------------------------

    const toggleTodo = (id) => {
        setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(t => t.id !== id))
    }

    const startEdit = (todo) => {
        setEditingId(todo.id);
        setEditText(todo.text);
    }

    const saveEdit = (id) => {
        setTodos(todos.map(t => t.id === id ? {...t, text: editText.trim() } : t))
        setEditingId(null);
    }

    const clearAll = () => {
        if(todos.length > 0 && window.confirm('Clear all tasks?')){
            setTodos([])
        }
    }

    // -------------------------------------------------------
    // -------------------------------------------------------


    const completedCount = todos.filter(t => t.completed).length
    const pending = todos.length - completedCount
    const progress = todos.length ? Math.round((completedCount / todos.length) * 100) : 0


    const filteredTodos = todos.filter(t => {
        const matches = t.text.toLowerCase().includes(search.toLowerCase())

        if(filter === "All") return matches
        if(filter === "Active") return matches && !t.completed
        if(filter === "Complete") return matches && t.completed

        return matches
    })

    

    // -------------------------------------------------------
    // -------------------------------------------------------

    return (
        <div className="min-h-screen p-4 md:p-12 font-sans text-slate-900 bg-[#F8FAFC]">
            <div className="max-w-4xl mx-auto">
                <Header progress={progress} complete={completedCount} total={todos.length} />

                <StatsCards total={todos.length} pending={pending} completed={completedCount} />

                <Filters 
                    search={search} setSearch={setSearch} 
                    filter={filter} setFilter={setFilter} 
                    onClearAll={clearAll}
                />

                <TodoInput 
                    input={input} 
                    setInput={setInput} 
                    onAdd={addTodo} 
                />

                <TodoList 
                    todos={filteredTodos}
                    editingId={editingId}
                    editText={editText}
                    setEditText={setEditText}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                    onStartEdit={startEdit}
                    onSaveEdit={saveEdit}
                    onCancelEdit={() => setEditingId(null)}
                />
            </div>
        </div>
    )
}



export default Todo