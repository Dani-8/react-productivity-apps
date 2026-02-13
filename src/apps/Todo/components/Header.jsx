import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function(){
    return(
        <header className="mb-8">
            <Link to="/" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-indigo-600 mb-3">
                <ArrowLeft size={16} /> Back to Portal
            </Link>

            <div className='flex flex-col md:flex-row gap-3 items-center justify-between'>
                <div>   
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Workspace</h1>
                    <p className="text-slate-500 font-medium">Manage your daily tasks efficiently.</p>
                </div>

                <div className="">

                </div>
            </div>
        </header>
    )
}








