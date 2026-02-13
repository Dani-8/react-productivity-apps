import { CheckCircle2, Circle, Calendar, Edit3, Trash2, Save, X } from 'lucide-react';


export default function TodoItem({todo, isEditing, editText, setEditText, onToggle, onDelete, onSaveEdit, onStartEdit, onCancelEdit}) {
    return (
        <div className={`flex items-center justify-bbetween group bg-white p-4 rounded-2xl shadow-lg border border-slate-200 hover:border-indigo-400 transition-all duration-300`}>


            <div className='flex items-center gap-3 flex-1'>
                <button onClick={onToggle} className={`transition-colors ${todo.completed ? 'text-indigo-500' : 'text-slate-300 hover:text-indigo-400'}`}>
                    {todo.completed ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                </button>

                <div className='flex-1'>
                    {isEditing ? (
                        <input
                            className="w-full bg-slate-50 border-b-2 border-indigo-500 outline-none font-semibold text-slate-700 py-1"
                            value={editText} onChange={e => setEditText(e.target.value)} autoFocus
                            onKeyDown={e => e.key === 'Enter' && onSaveEdit()}
                        />
                    ) : (
                        <>
                            <h3 className={`font-semibold text-slate-700 ${todo.completed ? 'line-through text-slate-400' : ''}`}>
                                {todo.text}
                            </h3>
                            <p className="text-[10px] text-slate-400 flex items-center gap-1 mt-1">
                                <Calendar size={10} /> {todo.createdAt}
                            </p>
                        </>
                    )}
                </div>
            </div>


            <div className='flex items-center gap-1'>
                {isEditing ? (
                    <>
                        <button onClick={onSaveEdit} className="cursor-pointer p-2 text-emerald-500 hover:bg-emerald-50 rounded-lg">
                            <Save size={18} />
                        </button>
                        <button onClick={onCancelEdit} className="cursor-pointer p-2 text-slate-400 hover:bg-slate-50 rounded-lg">
                            <X size={18} />
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={onStartEdit} className="cursor-pointer text-slate-200 hover:text-indigo-500 transition-colors p-2 md:opacity-0 group-hover:opacity-100">
                            <Edit3 size={18} />
                        </button>
                        <button onClick={onDelete} className="cursor-pointer text-slate-200 hover:text-rose-500 transition-colors p-2 md:opacity-0 group-hover:opacity-100">
                            <Trash2 size={18} />
                        </button>
                    </>
                )}
            </div>


        </div>
    )
}









