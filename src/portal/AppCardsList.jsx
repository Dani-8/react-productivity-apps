import { Wallet, CheckSquare } from 'lucide-react';
import AppCard from './AppCard';


export default function AppCardsList() {
    return (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <AppCard
                to="/apps/ExpenseTracker/ExpenseTracker"
                icon={<Wallet size={40} />}
                iconBg="bg-emerald-50"
                iconColor="text-emerald-500"
                title="Expense Tracker"
                descp="Full control over your budget. Log expenses, analyze spending, and save more."
            />
            <AppCard
                to="/apps/Todo/Todo"
                icon={<CheckSquare size={32} />}
                iconBg="bg-indigo-50"
                iconColor="text-indigo-500"
                title="Todo App"
                descp="The ultimate productivity tool. Track tasks, set goals, and get things done."
            />
        </div>

    )
}