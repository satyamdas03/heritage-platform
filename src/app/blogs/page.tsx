import prisma from '@/lib/prisma';
import Link from 'next/link';

async function getBlogs() {
    try {
        const blogs = await prisma.blog.findMany({
            where: { published: true },
            orderBy: { createdAt: 'desc' },
        });
        return blogs;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return [];
    }
}

export default async function BlogsPage() {
    const blogs = await getBlogs();

    // Featured blog (first one)
    const featuredBlog = blogs[0];
    const otherBlogs = blogs.slice(1);

    return (
        <div className="min-h-screen bg-[#f8f7f6] dark:bg-[#221810] text-[#181411] dark:text-[#f8f7f6]">
            <main className="max-w-[1200px] mx-auto px-6 py-10">
                {/* Page Header */}
                <div className="mb-10">
                    <h1 className="text-4xl lg:text-5xl font-bold font-display mb-4">Heritage Stories</h1>
                    <p className="text-lg text-[#897261] dark:text-gray-400 max-w-2xl">
                        Discover the rich tapestry of Bengal&apos;s cultural heritage through stories from our artisans and preservation efforts.
                    </p>
                </div>

                {/* Featured Story */}
                {featuredBlog && (
                    <section className="mb-16">
                        <div className="relative group cursor-pointer overflow-hidden rounded-xl bg-white dark:bg-[#2d221a] shadow-sm border border-[#e6e0db] dark:border-[#3d2e23]">
                            <div className="flex flex-col lg:flex-row">
                                <div
                                    className="lg:w-3/5 h-[400px] bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: featuredBlog.imageUrl ? `url('${featuredBlog.imageUrl}')` : `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQ00n4Jw1hZbMgvAOAHFyM9cGGqrmfoA1xIgTKJbv0CkZNdK0shORuOHSWF-u9YjkRVoiyUstEN9MKRA-f78judzUVicnIC0b951ltbYkEU9Au3TPsWAieT437bzbRqYkDnYCSOKncXMxOraKm4n6_16_I77QOOkO3OeZJay6X1rqMNJ3w7DlNWNeEn9P2KnOCxFXTzY5WRyPuXRrqBUPPWQsT-749g_ej6zVeTUaWL46cML29yO0g3MWe6m97GlGW7gSWr1C6neg')` }}
                                />
                                <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                                    <span className="inline-block px-3 py-1 rounded-full bg-[#ee7c2b]/10 text-[#ee7c2b] text-xs font-bold tracking-widest uppercase mb-4 w-fit">
                                        Featured Story
                                    </span>
                                    <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4 text-[#181411] dark:text-white">
                                        {featuredBlog.title}
                                    </h2>
                                    <p className="text-[#897261] dark:text-gray-400 mb-6 text-lg leading-relaxed">
                                        {featuredBlog.excerpt || featuredBlog.content.replace(/<[^>]+>/g, '').substring(0, 150) + '...'}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-sm text-[#897261] dark:text-gray-500 font-medium">
                                            By Admin • {Math.ceil(featuredBlog.content.length / 1000)} Min Read
                                        </span>
                                        <Link href={`/blogs/${featuredBlog.id}`} className="flex items-center gap-2 text-[#ee7c2b] font-bold hover:gap-3 transition-all">
                                            Read Story <span className="material-symbols-outlined">arrow_forward</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Blog Grid */}
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-2/3">
                        <div className="flex items-center justify-between mb-8 border-b border-[#e6e0db] dark:border-[#3d2e23] pb-4">
                            <h3 className="text-2xl font-bold">Latest Heritage Stories</h3>
                        </div>

                        {otherBlogs.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {otherBlogs.map((blog) => (
                                    <Link href={`/blogs/${blog.id}`} key={blog.id} className="flex flex-col group">
                                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 shadow-sm border border-[#e6e0db] dark:border-[#3d2e23]">
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                                            <div
                                                className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                                                style={{ backgroundImage: blog.imageUrl ? `url('${blog.imageUrl}')` : `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAoEFBL1i3XkevlFKy1DT7c4ZX6rlmIimeulDDONeY0P-7iuY4UByo4TvdVJ8eRy6YmsjH0K6SBJiX28B85d8Kaya9n1NHWD0YDOjUUfPI-R400c7-yExZ0BWLcV-FrVGVpxbR2VN5VYI4vD-dg4U7ry53L8Z-0-j1acfDiQsNUBcSP0S4huTIOeo6GSxelUUz_jpbPRGiAirIXlwo9zdoLQeu5ld2Satt7AAxJR72PrWyIsN1OfigdUoGDNz6TK6n65ZngDMr7BA')` }}
                                            />
                                            <span className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-black/80 px-3 py-1 rounded-lg text-[10px] font-bold tracking-widest uppercase text-[#ee7c2b]">
                                                {blog.category}
                                            </span>
                                        </div>
                                        <h4 className="text-xl font-bold mb-2 group-hover:text-[#ee7c2b] transition-colors">
                                            {blog.title}
                                        </h4>
                                        <p className="text-[#897261] dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                            {blog.excerpt || blog.content.replace(/<[^>]+>/g, '').substring(0, 100) + '...'}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-[#897261] uppercase font-bold tracking-tighter">
                                                Admin • {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                            </span>
                                            <span className="material-symbols-outlined text-[#ee7c2b] text-xl">bookmark</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 text-[#897261]">
                                <span className="material-symbols-outlined text-6xl mb-4 block">article</span>
                                <p className="text-lg">No stories published yet. Check back soon!</p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:w-1/3 space-y-10">
                        {/* Newsletter Signup */}
                        <div className="p-8 bg-[#ee7c2b] text-white rounded-xl shadow-lg relative overflow-hidden">
                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold mb-3 font-display">Preserve the Heritage</h4>
                                <p className="text-white/80 text-sm mb-6">
                                    Join our community for weekly stories and updates from the soulful heart of Bengal.
                                </p>
                                <form className="space-y-3">
                                    <input
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/50 text-white focus:ring-2 focus:ring-white/50 outline-none text-sm"
                                        placeholder="Your email address"
                                        type="email"
                                    />
                                    <button
                                        className="w-full bg-white text-[#ee7c2b] font-bold py-3 rounded-lg hover:bg-opacity-90 transition-all text-sm uppercase tracking-wider"
                                        type="submit"
                                    >
                                        Subscribe Now
                                    </button>
                                </form>
                            </div>
                            <div className="absolute -right-10 -bottom-10 opacity-10">
                                <span className="material-symbols-outlined text-[150px]">eco</span>
                            </div>
                        </div>

                        {/* Popular Tags */}
                        <div className="p-6 bg-white dark:bg-[#2d221a] rounded-xl border border-[#e6e0db] dark:border-[#3d2e23] shadow-sm">
                            <h4 className="text-lg font-bold mb-4">Popular Tags</h4>
                            <div className="flex flex-wrap gap-2">
                                {['JAMDANI', 'TERRACOTTA', 'BAUL MUSIC', 'RURAL BENGAL', 'PATTACHITRA', 'SUNDARBANS'].map((tag) => (
                                    <span key={tag} className="px-3 py-1.5 bg-[#f8f7f6] dark:bg-[#221810] text-[#897261] hover:bg-[#ee7c2b]/20 hover:text-[#ee7c2b] rounded text-xs font-bold transition-colors cursor-pointer">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
