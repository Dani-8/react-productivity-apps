import { CircleDollarSign } from 'lucide-react';

export default function Header() {
    return (
        <header className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <CircleDollarSign className="text-indigo-600" /> Expense Tracker
            </h2>

            <span className="text-sm text-slate-500 font-medium bg-white px-3 py-1 rounded-full border shadow-sm">
                {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
        </header>
    );
}