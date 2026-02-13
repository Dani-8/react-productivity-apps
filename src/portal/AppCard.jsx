import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


export default function AppCard({to, title, descp, icon, iconBg, iconColor }){
    return (
        <Link to={to}>
            <button className='app-card group shadow-xl shadow-slate-200/50 hover:shadow-slate-400/40 border border-slate-300 hover:border-indigo-500'>
                <div className={`w-14 h-14 ${iconBg} ${iconColor} group-hover:scale-110 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {icon}
                </div>
                <h2 className='text-lg font-bold mb-2'>{title}</h2>
                <p className='text-sm text-slate-500 mb-6'>{descp}</p>
                <div className="flex items-center gap-2 text-indigo-500 font-bold text-sm">
                    Launch Application <ArrowRight className='group-hover:translate-x-2 transition-al' size={16} />
                </div>
            </button>
        </Link>
    )
}