import {Trash2} from 'lucide-react'

export default function TransactionItems({ transaction, deleteTransaction }){
    return(

        <div className='bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between hover:shadow-lg transition-all duration-300'>
            <div className='flex items-center gap-4'>
                <div className={`${transaction.type === "income" ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"} font-bold text-xl w-12 h-12 rounded-2xl flex items-center justify-center`}>
                    {transaction.category.charAt(0).toUpperCase()}
                </div>
                <div className=''>
                    <h3 className='text-lg font-bold'>{transaction.description}</h3>
                    <p className='text-sm text-slate-500'>{transaction.date} • {transaction.category}</p>
                </div>
            </div>

            <div className='flex items-center gap-5'>
                <span className={`${transaction.type === "income" ? "text-emerald-600" : "text-rose-600"} font-bold`}>
                    {transaction.type === "income" ? "+" : "-"}Rs.{transaction.amount}
                </span>
                <button onClick={() => deleteTransaction(transaction.id)} className=''>
                    <Trash2 className='w-5 h-5 text-rose-300 hover:text-rose-500 transition-all duration-300 cursor-pointer' />
                </button>
            </div>
        </div>

    )
}











