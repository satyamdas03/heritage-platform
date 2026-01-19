"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import { signOut } from "next-auth/react"; // We'll need to use client-side signout or a server action passed down
// Actually, easier to use a Link to a logout route or just a form for now if we want to stay clean.
// Let's keep it simple: Pass user prop.

type User = {
    name?: string | null;
    email?: string | null;
    image?: string | null;
}

export function Navbar({ user }: { user?: User }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="sticky top-0 z-50 w-full border-b border-[#e6e2db] bg-white/95 backdrop-blur-sm dark:border-white/10 dark:bg-card-dark/95">
            <header className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-10">
                <div className="flex items-center gap-4 lg:gap-8">
                    <Link href="/" className="flex items-center gap-3 text-text-main dark:text-white">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ec9213] to-[#b45309] shadow-md">
                            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-display text-lg font-bold leading-tight tracking-tight">
                                Suwarna Bharat
                            </h2>
                            <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#b45309] dark:text-[#ec9213]">
                                Soul of India
                            </span>
                        </div>
                    </Link>
                    <div className="hidden items-center gap-6 lg:flex xl:gap-8">
                        <Link
                            className="font-body text-sm font-medium text-text-main transition-colors hover:text-primary dark:text-white"
                            href="/marketplace"
                        >
                            Marketplace
                        </Link>
                        <Link
                            className="font-body text-sm font-medium text-text-main transition-colors hover:text-primary dark:text-white"
                            href="/artisans"
                        >
                            Artisans
                        </Link>
                        <Link
                            className="font-body text-sm font-medium text-text-main transition-colors hover:text-primary dark:text-white"
                            href="/artisan-speaks"
                        >
                            Speaks
                        </Link>
                        <Link
                            className="font-body text-sm font-medium text-text-main transition-colors hover:text-primary dark:text-white"
                            href="/designer-hub"
                        >
                            Hub
                        </Link>
                        <Link
                            className="font-body text-sm font-medium text-text-main transition-colors hover:text-primary dark:text-white"
                            href="/apprentice"
                        >
                            Programs
                        </Link>
                        <Link
                            className="font-body text-sm font-medium text-text-main transition-colors hover:text-primary dark:text-white"
                            href="/calendar"
                        >
                            Calendar
                        </Link>
                        <Link
                            className="font-body text-sm font-medium text-text-main transition-colors hover:text-primary dark:text-white"
                            href="/trails"
                        >
                            Trails
                        </Link>
                        <Link
                            className="font-body text-sm font-medium text-text-main transition-colors hover:text-primary dark:text-white"
                            href="/archive"
                        >
                            Archive
                        </Link>
                        <Link
                            className="font-body text-sm font-medium text-text-main transition-colors hover:text-primary dark:text-white"
                            href="/impact"
                        >
                            Impact
                        </Link>
                    </div>
                </div>
                <div className="flex flex-1 justify-end gap-3 lg:gap-4">
                    <label className="hidden min-w-[160px] max-w-[256px] flex-col md:flex">
                        <div className="flex h-10 w-full flex-1 items-stretch rounded-lg bg-[#f4f3f0] dark:bg-white/5">
                            <div className="flex items-center justify-center border-r-0 pl-4 text-text-muted dark:text-gray-400">
                                <span className="material-symbols-outlined text-[20px]">
                                    search
                                </span>
                            </div>
                            <input
                                className="form-input h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none border-l-0 border-none bg-transparent px-4 pl-2 text-sm font-normal leading-normal text-text-main placeholder:text-text-muted focus:border-none focus:outline-0 focus:ring-0 dark:text-white dark:placeholder:text-gray-500"
                                placeholder="Search"
                            />
                        </div>
                    </label>
                    <div className="flex items-center gap-2">
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
                            >
                                <span className="material-symbols-outlined">
                                    {theme === "dark" ? "light_mode" : "dark_mode"}
                                </span>
                            </button>
                        )}
                        <Link
                            href="/cart"
                            className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
                        >
                            <span className="material-symbols-outlined">shopping_bag</span>
                        </Link>
                    </div>

                    {!user ? (
                        <>
                            <Link
                                href="/login"
                                className="hidden h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 text-sm font-bold text-text-main hover:bg-black/5 dark:text-white dark:hover:bg-white/10 sm:flex"
                            >
                                Log In
                            </Link>
                            <Link
                                href="/signup"
                                className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-primary-dark"
                            >
                                <span className="truncate">Sign Up</span>
                            </Link>
                        </>
                    ) : (
                        <Link
                            href="/profile"
                            className="h-10 w-10 cursor-pointer rounded-full bg-cover bg-center border border-slate-200 dark:border-slate-700"
                            style={{
                                backgroundImage: `url("${user.image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuB30k9cDq3V5f9t6VVO_07gbOG6zbLlnd2ADwW4VSPgxvuYWTaVTSofJN2s0hFplyktQ5UvR44GTE8UCAPKcZfvqbN1bo6FAXGYNr1GqpDD1lgqX02ACTkGSDOfFzKhf38YhbPypgtq19giGURygLySjpY0fjBpep6V01kxPChTEzTT3OcvridAXqinD-f98T5uD244V5tIevp_6MXFzfpeLZ_9Diplqy1Qro8tJF-aDxu-KXOVkq0AmUSenpiLbRSbcoW1drqs4sM'}")`,
                            }}
                        ></Link>
                    )}
                </div>
            </header>
        </div>
    );
}
