import { CircleDollarSign, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <header className="mb-8">
            <Link to="/" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-indigo-600 mb-3">
                <ArrowLeft size={16} /> Back to Portal
            </Link>

            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <CircleDollarSign className="text-indigo-600" />
                    Expense Tracker
                </h2>

                <span className="cursor-pointer text-sm text-slate-500 hover:text-indigo-600 font-medium bg-white px-3 py-1 rounded-full border hover:border-indigo-600 shadow-sm">
                    {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </span>
            </div>
        </header>
    );
}
