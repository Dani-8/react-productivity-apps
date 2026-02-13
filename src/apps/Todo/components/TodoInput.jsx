import { Plus } from 'lucide-react';

export default function TodoInput({input, setInput, onAdd}){
    return(
        <div className='bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-2 border border-slate-300 mb-5 focus-within:border-indigo-500 transition-all duration-300'>
            <form onSubmit={onAdd} className='flex gap-2'>
                <input type="text" placeholder="What needs to be done?"
                    className='flex-1 px-5 py-3 outline-none text-lg rounded-2xl placeholder:text-slate-300' 
                    value={input} onChange={e => setInput(e.target.value)}
                />
                <button className='cursor-pointer bg-indigo-500 hover:bg-indigo-700 text-white px-5 rounded-2xl shadow-lg shadow-indigo-200 transition-all duration-300 active:scale-90'>
                    <Plus size={24} />
                </button>
            </form>
        </div>
    )
}