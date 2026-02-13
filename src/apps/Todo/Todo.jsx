import React, {useState} from "react"

import Header from "./components/Header"
import StatsCards from "./components/StatsCards"
import TodoInput from "./components/TodoInput"


function Todo() {
    return (
        <div className="min-h-screen p-4 md:p-12 font-sans text-slate-900 bg-[#F8FAFC]">
            <div className="max-w-4xl mx-auto">
                <Header progress={50}/>

                <StatsCards total={10} pending={5} completed={5} />

                <TodoInput />
            </div>
        </div>
    )
}



export default Todo