import Link from "next/link";

export function Footer() {
    return (
        <footer className="mt-auto border-t border-[#e6e2db] bg-white dark:bg-card-dark dark:border-white/10">
            <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 text-text-main dark:text-white mb-4">
                            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <span className="material-symbols-outlined text-xl">temple_hindu</span>
                            </div>
                            <h2 className="text-lg font-bold">The Heritage Platform</h2>
                        </div>
                        <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">
                            Connecting the world to the fading arts of rural Bengal. Every purchase directly empowers an artisan family.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <a href="#" className="text-text-muted hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">social_leaderboard</span>
                            </a>
                            <a href="#" className="text-text-muted hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">photo_camera</span>
                            </a>
                            <a href="#" className="text-text-muted hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">alternate_email</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-display font-bold text-text-main dark:text-white mb-4">Discover</h4>
                        <ul className="space-y-3 text-sm text-text-muted dark:text-gray-400">
                            <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
                            <li><Link href="/artisans" className="hover:text-primary transition-colors">Artisan Profiles</Link></li>
                            <li><Link href="/archive" className="hover:text-primary transition-colors">Art Forms of Bengal</Link></li>
                            <li><Link href="/impact" className="hover:text-primary transition-colors">Impact Report</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-display font-bold text-text-main dark:text-white mb-4">Help</h4>
                        <ul className="space-y-3 text-sm text-text-muted dark:text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Authenticity Certificate</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Wholesale Inquiries</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-display font-bold text-text-main dark:text-white mb-4">Newsletter</h4>
                        <p className="text-sm text-text-muted dark:text-gray-400 mb-4">Subscribe for stories from the villages.</p>
                        <div className="flex gap-2">
                            <input
                                className="w-full rounded-md border-gray-200 bg-background-light px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:bg-white/5 dark:border-white/10 dark:text-white"
                                placeholder="Email address"
                                type="email"
                            />
                            <button className="rounded-md bg-text-main px-4 py-2 text-sm font-bold text-white hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-lg">send</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t border-gray-100 dark:border-white/5 pt-8 gap-4">
                    <p className="text-xs text-text-muted dark:text-gray-500">© 2023 The Heritage Platform. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-xs text-text-muted hover:text-text-main dark:text-gray-500 dark:hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="text-xs text-text-muted hover:text-text-main dark:text-gray-500 dark:hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
