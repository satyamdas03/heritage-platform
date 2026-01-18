'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function CheckoutSuccessPage() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get('session_id');

    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center bg-[#f6f6f8] dark:bg-[#101022] p-4 text-center">
            <div className="size-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mb-6">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Payment Successful!</h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8">
                Thank you for your support. Your contribution directly impacts the artisan community.
                {sessionId && <span className="block mt-2 text-xs opacity-50">Transaction ID: {sessionId}</span>}
            </p>

            <div className="flex gap-4">
                <Link
                    href="/marketplace"
                    className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white font-bold hover:bg-white dark:hover:bg-slate-700 transition-colors"
                >
                    Continue Shopping
                </Link>
                <Link
                    href="/impact"
                    className="px-6 py-3 rounded-lg bg-[#1313ec] text-white font-bold hover:bg-blue-700 transition-colors"
                >
                    View Impact
                </Link>
            </div>
        </div>
    );
}
