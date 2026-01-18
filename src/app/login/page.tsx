'use client';

import { useActionState } from 'react';
import { authenticate } from '@/lib/actions/auth';
import Link from 'next/link';

export default function LoginPage() {
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#f6f6f8] dark:bg-[#101022]">
            <form action={formAction} className="flex flex-col gap-4 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg w-full max-w-sm border border-slate-200 dark:border-slate-700">
                <div className="mb-4 text-center">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Welcome Back</h1>
                    <p className="text-slate-500 text-sm">Sign in to your heritage account</p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="email">Email</label>
                    <input
                        className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 p-2.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#1313ec]"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="user@example.com"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="password">Password</label>
                    <input
                        className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 p-2.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#1313ec]"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="******"
                        required
                        minLength={6}
                    />
                </div>
                <div
                    className="flex h-8 items-end space-x-1"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {errorMessage && (
                        <p className="text-sm text-red-500">{errorMessage}</p>
                    )}
                </div>
                <button className="w-full bg-[#1313ec] hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg transition-colors disabled:opacity-50" aria-disabled={isPending} type="submit">
                    Log in
                </button>
                <div className="text-center text-sm text-slate-500 mt-2">
                    Don&apos;t have an account? <Link href="/signup" className="text-[#1313ec] hover:underline font-bold">Sign up</Link>
                </div>
            </form>
        </div>
    );
}
