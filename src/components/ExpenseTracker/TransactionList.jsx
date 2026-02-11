import TransactionItems from "./TransactionItems"
import EmptyState from "./EmptyState"

// {transactions, onDate, onClearAll}
export default function TransactionList(){
    return(
        <div className="space-y-5">
            <div className="flex items-center justify-between px-1">
                <h3 className="text-lg text-slate-700 font-bold">Recent History</h3>
                {/* {transactions.length > 0 && ( */}
                    <button className="text-sm text-slate-400 cursor-pointer active:scale-85 hover:underline hover:text-rose-500 trasition ease duration-300">
                        Clear All
                    </button>
                {/* )} */}
            </div>


            {/* <EmptyState /> */}
            <TransactionItems />

            
        </div>
    )
}