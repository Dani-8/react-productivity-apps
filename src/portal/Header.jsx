import { ShieldCheck, LayoutDashboard } from 'lucide-react';

function Header(){
    return (
        <header className='flex justify-between items-center mb-10'>
            <div>
                <div className='flex items-center gap-2 mb-2'>
                    <div className='bg-gradient-to-tr from-indigo-600 via-indigo-800 to-indigo-400 text-white p-3 rounded-2xl shadow-xl shadow-indigo-800/40'>
                        <LayoutDashboard size={25} />
                    </div>
                    <h2 className='text-2xl font-bold'>App Portal</h2>
                </div>
                <h1 className='text-4xl font-extrabold text-slate-900 tracking-tight mb-2'>Let’s get started!</h1>
                <div className="flex items-center gap-2 text-slate-500 mt-1">
                    <ShieldCheck size={25} className="text-emerald-500" />
                    <span className="text-sm font-medium">Session Active</span>
                </div>
            </div>
        </header>
    )
}


export default Header