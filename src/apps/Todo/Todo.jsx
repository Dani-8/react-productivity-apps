import React, {useState} from "react"

import Header from "./components/Header"
import StatsCards from "./components/StatsCards"


function Todo() {
    return (
        <div className="min-h-screen p-4 md:p-12 font-sans text-slate-900 bg-[#F8FAFC]">
            <div className="max-w-4xl mx-auto">
                <Header />


                <StatsCards />
            </div>
        </div>
    )
}



export default Todo