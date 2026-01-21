'use client';

import Link from "next/link";
import { useSession } from "next-auth/react";

const ADMIN_EMAIL = 'satyamdas03@gmail.com';

export function SecondaryNavbar() {
    const { data: session } = useSession();

    return (
        <div className="bg-[#181511]/90 backdrop-blur-md text-white px-4 py-2 md:px-10 text-xs md:text-sm tracking-wide border-b border-white/5">
            <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row justify-between items-center gap-2">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">call</span>
                        <span>+91 9903047208</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">mail</span>
                        <span>suwarnabharat2022@gmail.com</span>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-6 text-white/80">
                    {/* Blog Buttons */}
                    {session?.user?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase() && (
                        <Link
                            className="text-[#ee7c2b] font-bold hover:text-[#c2621b] transition-colors"
                            href="/admin/blogs"
                        >
                            Write Blog
                        </Link>
                    )}
                    <Link
                        className="hover:text-[#ec9213] transition-colors font-bold"
                        href="/blogs"
                    >
                        View Blogs
                    </Link>

                    {/* Standard Links */}
                    <Link className="hover:text-[#ec9213] transition-colors" href="#">About Us</Link>
                    <Link className="hover:text-[#ec9213] transition-colors" href="/sponsor">Support</Link>
                    <Link className="hover:text-[#ec9213] transition-colors" href="#">FAQ</Link>
                </div>
            </div>
        </div>
    );
}
