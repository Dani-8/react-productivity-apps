import TransactionItems from "./TransactionItems"
import EmptyState from "./EmptyState"

export default function TransactionList({ transactions, deleteTransaction, onClearAllTransactions }){
    return(
        <div className="space-y-5">
            <div className="flex items-center justify-between px-1">
                <h3 className="text-lg text-slate-700 font-bold">Recent History</h3>
                {transactions.length > 0 && (
                    <button onClick={onClearAllTransactions} className="text-sm text-slate-400 cursor-pointer active:scale-85 hover:underline hover:text-rose-500 trasition ease duration-300">
                        Clear All
                    </button>
                )}
            </div>


            { transactions.length === 0 ? (
                <EmptyState />
            ) : (
                transactions.map((item) => {
                    return <TransactionItems key={item.id} transaction={item} deleteTransaction={deleteTransaction} />
                })
            )}


        </div>
    )
}