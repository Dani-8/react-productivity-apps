import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header({ progress, total, complete }) {
    return (
        <header className="mb-8">
            <Link to="/" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-indigo-600 mb-3">
                <ArrowLeft size={16} /> Back to Portal
            </Link>

            <div className='flex flex-col md:flex-row gap-3 items-center justify-between'>
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Workspace</h1>
                    <p className="text-slate-500 font-medium">Manage your daily tasks efficiently.</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className='text-right hidden md:block'>
                        <p className='text-xs font-bold text-slate-400 uppercase tracking-widest'>PROGRESS</p>
                        <p className='text-sm font-bold text-indigo-600 uppercase'>{progress}% TASKS DONE</p>
                    </div>
                    <div className='w-16 h-16 rounded-full flex items-center justify-center relative'>
                        <svg viewBox="0 0 64 64" className="absolute w-full h-full -rotate-90 overflow-visible">
                            <circle
                                cx="32" cy="32" r="28"
                                fill="transparent"
                                stroke="currentColor" strokeWidth="4"
                                className="text-slate-200"
                            />
                            <circle
                                cx="32" cy="32" r="28"
                                fill="transparent"
                                stroke="currentColor" strokeWidth="4"
                                strokeDasharray={`${progress * 1.76} 176`} strokeLinecap="round"
                                className="text-indigo-600 transition-all duration-500 ease-out"
                            />
                        </svg>
                        <span className="text-xs font-black">{complete}/{total}</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

