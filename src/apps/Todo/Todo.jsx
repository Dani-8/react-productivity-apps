import React, {useState} from "react"

import Header from "./components/Header"


function Todo() {
    return (
        <div className="min-h-screen p-4 md:p-12 font-sans text-slate-900 bg-[#F8FAFC]">
            <div className="max-w-4xl mx-auto">
                <Header />

            </div>
        </div>
    )
}



export default Todo