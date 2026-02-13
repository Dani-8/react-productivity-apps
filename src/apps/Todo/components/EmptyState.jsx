import { Filter } from "lucide-react"


export default function EmptyState(){
    return(
        <div className="flex items-center justify-center flex-col gap-5 py-20">
            <div className="text-slate-300 bg-slate-100 w-20 h-20 flex items-center justify-center rounded-full shadow-2xl/40">
                <Filter size={32} />
            </div>
            <p className="font-extrabold text-slate-400">No Tasks Found!</p>
        </div>
    )
}
