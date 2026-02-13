import { useState } from 'react';
import { PlusCircle } from 'lucide-react';

export default function TransactionForm({ onAdd }) {
    const [error, setError] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("expense");
    const [category, setCategory] = useState("food");


    function handleSubmit(e) {
        e.preventDefault();

        if(!description && !amount || amount <= 0){
            setError("Please enter valid description and amount.")

            setTimeout(() => {
                setError("")
            }, 2500)
            
            return
        }

        onAdd({
            id: Date.now(),
            description,
            amount: parseFloat(amount),
            type,
            category,
            date: new Date().toLocaleDateString(),
        });

        setDescription("");
        setAmount("");
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-sm mb-8 border border-slate-200">
            {error && (
                <p className="text-red-500 text-sm mb-3">{error}</p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-2">
                    <input type="text" placeholder="Description (e.g. Salary, Rent)"
                        className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 text-sm placeholder-slate-400 transition ease duration-300"
                        value={description} onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <input type="number" placeholder="Amount"
                    className="p-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 text-sm placeholder-slate-400 transition ease duration-300"
                    value={amount} onChange={(e) => setAmount(e.target.value)}
                />

                <select
                    className="p-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 text-sm text-slate-700 placeholder-slate-400 cursor-pointer transition ease duration-300"
                    value={type}onChange={(e) => setType(e.target.value)}>
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                </select>

                <select
                    className="p-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 text-sm text-slate-700 placeholder-slate-400 cursor-pointer transition ease duration-300"
                    value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option>Food</option>
                    <option>Transport</option>
                    <option>Bills</option>
                    <option>Salary</option>
                    <option>Leisure</option>
                    <option>Other</option>
                </select>

                <button type="submit"
                    className="lg:col-span-3 outline-none bg-indigo-500 hover:bg-indigo-600 active:scale-92 text-white font-bold py-3 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center gap-2">
                    <PlusCircle size={18} /> Add Transaction
                </button>
            </div>
        </form>
    );
}
