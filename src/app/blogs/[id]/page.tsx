import prisma from '@/lib/prisma';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getBlog(id: string) {
    try {
        const blog = await prisma.blog.findUnique({
            where: { id, published: true },
        });
        return blog;
    } catch (error) {
        console.error('Error fetching blog:', error);
        return null;
    }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const blog = await getBlog(id);

    if (!blog) {
        notFound();
    }

    const tags = blog.tags ? JSON.parse(blog.tags) : [];

    return (
        <div className="min-h-screen bg-[#f8f7f6] dark:bg-[#221810] text-[#181411] dark:text-[#f8f7f6]">
            {/* Hero Image */}
            {blog.imageUrl && (
                <div
                    className="w-full h-[400px] bg-cover bg-center relative"
                    style={{ backgroundImage: `url('${blog.imageUrl}')` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#221810] to-transparent" />
                </div>
            )}

            <main className="max-w-[800px] mx-auto px-6 py-12">
                {/* Back Link */}
                <Link href="/blogs" className="inline-flex items-center gap-2 text-[#ee7c2b] font-bold mb-8 hover:gap-3 transition-all">
                    <span className="material-symbols-outlined">arrow_back</span> Back to Stories
                </Link>

                {/* Category Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-[#ee7c2b]/10 text-[#ee7c2b] text-xs font-bold tracking-widest uppercase mb-4">
                    {blog.category}
                </span>

                {/* Title */}
                <h1 className="text-4xl lg:text-5xl font-bold font-display mb-6 leading-tight">
                    {blog.title}
                </h1>

                {/* Meta */}
                <div className="flex items-center gap-4 text-[#897261] text-sm mb-8 pb-8 border-b border-[#e6e0db] dark:border-[#3d2e23]">
                    <span>By Admin</span>
                    <span>•</span>
                    <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <span>•</span>
                    <span>{Math.ceil(blog.content.length / 1000)} Min Read</span>
                </div>

                <article
                    className="prose prose-lg dark:prose-invert max-w-none [&_img]:rounded-xl [&_img]:shadow-md prose-img:max-w-full prose-p:text-justify prose-p:leading-relaxed break-words overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Tags */}
                {tags.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-[#e6e0db] dark:border-[#3d2e23]">
                        <h4 className="text-sm font-bold text-[#897261] mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag: string) => (
                                <span key={tag} className="px-3 py-1.5 bg-[#ee7c2b]/10 text-[#ee7c2b] rounded text-xs font-bold uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Share Section */}
                <div className="mt-12 p-6 bg-white dark:bg-[#2d221a] rounded-xl border border-[#e6e0db] dark:border-[#3d2e23]">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="font-bold mb-1">Share this story</h4>
                            <p className="text-sm text-[#897261]">Help preserve our heritage by spreading the word</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="p-3 bg-[#f8f7f6] dark:bg-[#221810] rounded-lg hover:bg-[#ee7c2b]/10 hover:text-[#ee7c2b] transition-colors">
                                <span className="material-symbols-outlined">share</span>
                            </button>
                            <button className="p-3 bg-[#f8f7f6] dark:bg-[#221810] rounded-lg hover:bg-[#ee7c2b]/10 hover:text-[#ee7c2b] transition-colors">
                                <span className="material-symbols-outlined">bookmark</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
