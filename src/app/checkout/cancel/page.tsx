import Link from 'next/link';

export default function CheckoutCancelPage() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center bg-[#f6f6f8] dark:bg-[#101022] p-4 text-center">
            <div className="size-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-600 mb-6">
                <span className="material-symbols-outlined text-4xl">cancel</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Payment Cancelled</h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8">
                The transaction was cancelled. No charges were made.
            </p>

            <Link
                href="/cart"
                className="px-8 py-3 rounded-lg bg-[#1313ec] text-white font-bold hover:bg-blue-700 transition-colors"
            >
                Return to Cart
            </Link>
        </div>
    );
}
