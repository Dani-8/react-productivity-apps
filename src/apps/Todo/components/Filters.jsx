import { Search, Plus } from 'lucide-react';

export default function Filters({search, setSearch, filter, setFilter, onClearAll}){
    return(
        <div className='flex flex-col md:flex-row gap-4 mb-6 justify-between items-center'>
            <div className='relative w-full md:w-64 flex-1'>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                    type="text" placeholder="Search tasks..." 
                    className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-xl text-sm focus:ring-1 focus:ring-indigo-500 outline-none"
                    value={search} onChange={e => setSearch(e.target.value)}
                />
            </div>

            <div className='w-full flex items-center gap-4 md:w-auto'>
                <div className='flex bg-white border border-slate-200 rounded-xl p-1 flex-1 md:flex-none'>
                    {["All", "Active", "Complete"].map(f => (
                        <button key={f} onClick={() => setFilter(f)} className={`filter-btn cursor-pointer flex-1 md:flex-none px-6 py-1.5 text-xs font-bold rounded-lg transition-all duration-300 active:scale-90 ${
                            filter === f ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-indigo-700 hover:bg-slate-100'}`}>
                            {f}
                        </button>
                    ))}
                </div>
            </div>
            <button onClick={onClearAll}
                className="cursor-pointer text-xs font-bold text-rose-500 hover:bg-rose-50 px-4 py-2 rounded-xl transition-all duration-300 active:scale-90 border border-transparent hover:border-rose-100"
            >
                Clear All
            </button>
        </div>
    )
}

