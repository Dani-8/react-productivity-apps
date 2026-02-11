import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';

export default function KpiCards({ income, expense, balance }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-2 text-emerald-600">
                    <div className="p-2 bg-emerald-50 rounded-lg"><TrendingUp size={20} /></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Income</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800">${income.toLocaleString()}</h2>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-2 text-rose-600">
                    <div className="p-2 bg-rose-50 rounded-lg"><TrendingDown size={20} /></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Expense</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800">${expense.toLocaleString()}</h2>
            </div>

            <div className="bg-indigo-600 p-5 rounded-2xl shadow-lg text-white">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-indigo-500 rounded-lg"><Wallet size={20} /></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-100">Net Balance</span>
                </div>
                <h2 className="text-2xl font-bold">${balance.toLocaleString()}</h2>
            </div>
        </div>
    );
}