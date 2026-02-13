import { BarChart3, Circle, CheckCircle2 } from 'lucide-react';

export default function StatsCards({total, pending, completed}){
    const cards = [
        {
            label: "Total",
            value: total,
            icon: <BarChart3 size={20} />,
            bg: "bg-blue-50",
            hoverBg: "group-hover:bg-blue-100",
            color: "text-blue-600",
            hoverColor: "group-hover:text-blue-600",
            hoverBorderColor: "hover:border-blue-500/60",
        },
        {
            label: "Pending",
            value: pending,
            icon: <Circle size={20} />,
            bg: "bg-amber-50",
            hoverBg: "group-hover:bg-amber-100",
            color: "text-amber-600",
            hoverColor: "group-hover:text-amber-600",
            hoverBorderColor: "hover:border-amber-500/60",
        },
        {
            label: "Completed",
            value: completed,
            icon: <CheckCircle2 size={20} />,
            bg: "bg-emerald-50",
            hoverBg: "group-hover:bg-emerald-100",
            color: "text-emerald-600",
            hoverColor: "group-hover:text-emerald-600",
            hoverBorderColor: "hover:border-emerald-500/60",
        },
    ]


    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {
                cards.map((card, i) => (
                    <div key={i} className={`stat-card group bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 ${card.hoverBorderColor} transition duration-300 flex items-center gap-4`}>
                        <div className={`${card.bg} ${card.color} rounded-xl p-3 ${card.hoverBg} transition duration-300`}>
                            {card.icon}
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-bold uppercase">{card.label}</p>
                            <p className={`text-xl font-black ${card.hoverColor} transition duration-300`}>{card.value}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}