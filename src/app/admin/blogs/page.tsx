'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ADMIN_EMAIL = 'satyamdas03@gmail.com';

interface Blog {
    id: string;
    title: string;
    content: string;
    excerpt: string | null;
    category: string;
    tags: string | null;
    imageUrl: string | null;
    published: boolean;
    createdAt: string;
}

export default function AdminBlogsPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentBlog, setCurrentBlog] = useState<Partial<Blog>>({
        title: '',
        content: '',
        excerpt: '',
        category: 'Heritage News',
        tags: '',
        imageUrl: '',
        published: false,
    });
    const [loading, setLoading] = useState(true);

    const isAdmin = session?.user?.email === ADMIN_EMAIL;

    useEffect(() => {
        if (status === 'loading') return;
        if (!session) {
            router.push('/login');
            return;
        }
        if (isAdmin) {
            fetchBlogs();
        } else {
            setLoading(false); // Stop loading to show access denied
        }
    }, [session, status, isAdmin, router]);

    const fetchBlogs = async () => {
        try {
            const res = await fetch('/api/blogs?admin=true');
            const data = await res.json();
            setBlogs(data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false);
        }
    };

    if (status === 'loading' || (loading && isAdmin)) {
        return (
            <div className="min-h-screen bg-[#f8f7f6] dark:bg-[#221a10] flex items-center justify-center">
                <div className="text-[#897261]">Loading...</div>
            </div>
        );
    }

    if (!isAdmin) {
        return (
            <div className="min-h-screen bg-[#f8f7f6] dark:bg-[#221a10] flex flex-col items-center justify-center p-4">
                <span className="material-symbols-outlined text-6xl text-red-500 mb-4">gpp_maybe</span>
                <h1 className="text-2xl font-bold mb-2">Access Denied</h1>
                <p className="text-[#897261] mb-6 text-center max-w-md">
                    You are logged in as <strong>{session?.user?.email}</strong>.
                    This area is restricted to administrators.
                </p>
                <Link href="/" className="px-6 py-3 bg-[#ee7c2b] text-white font-bold rounded-lg hover:bg-opacity-90">
                    Return Home
                </Link>
            </div>
        );
    }

    const handleSubmit = async (published: boolean) => {
        try {
            const method = currentBlog.id ? 'PUT' : 'POST';
            const tags = currentBlog.tags ? currentBlog.tags.split(',').map(t => t.trim()) : [];

            const res = await fetch('/api/blogs', {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...currentBlog,
                    tags,
                    published,
                }),
            });

            if (res.ok) {
                alert(published ? 'Blog published successfully!' : 'Draft saved!');
                setCurrentBlog({ title: '', content: '', excerpt: '', category: 'Heritage News', tags: '', imageUrl: '', published: false });
                setIsEditing(false);
                fetchBlogs();
            } else {
                const data = await res.json();
                console.error('Save failed:', data);
                alert(data.error || 'Operation failed');
            }
        } catch (error) {
            console.error('Error saving blog:', error);
            alert('An error occurred while saving. Check console for details.');
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCurrentBlog({ ...currentBlog, imageUrl: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleEdit = (blog: Blog) => {
        setCurrentBlog({
            ...blog,
            tags: blog.tags ? JSON.parse(blog.tags).join(', ') : '',
        });
        setIsEditing(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this blog?')) return;

        try {
            const res = await fetch(`/api/blogs?id=${id}`, { method: 'DELETE' });
            if (res.ok) {
                fetchBlogs();
            } else {
                alert('Failed to delete blog');
            }
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#f8f7f6] dark:bg-[#221a10] flex items-center justify-center">
                <div className="text-[#897261]">Loading...</div>
            </div>
        );
    }

    if (!isAdmin) {
        return null;
    }

    return (
        <div className="flex h-screen overflow-hidden bg-[#f8f7f6] dark:bg-[#221810] text-[#181411] dark:text-[#f8f7f6]">
            {/* Sidebar */}
            <aside className="w-64 flex-shrink-0 bg-white dark:bg-[#2d221a] border-r border-[#e6e0db] dark:border-[#3d2e23] hidden lg:flex flex-col">
                <div className="p-6 flex items-center gap-3">
                    <Link href="/" className="text-[#ee7c2b]">
                        <img src="/peacock.png" alt="Logo" className="h-8 w-8" />
                    </Link>
                    <h1 className="text-lg font-bold tracking-tight text-[#181411] dark:text-white uppercase">Admin Hub</h1>
                </div>
                <nav className="flex-grow px-4 space-y-1 mt-4">
                    <Link href="/" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#897261] hover:bg-[#ee7c2b]/5 hover:text-[#ee7c2b] rounded-lg transition-all">
                        <span className="material-symbols-outlined">home</span> Back to Site
                    </Link>
                    <button
                        onClick={() => { setIsEditing(true); setCurrentBlog({ title: '', content: '', excerpt: '', category: 'Heritage News', tags: '', imageUrl: '', published: false }); }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-[#ee7c2b] bg-[#ee7c2b]/10 rounded-lg transition-all border-r-4 border-[#ee7c2b]"
                    >
                        <span className="material-symbols-outlined">edit_note</span> New Post
                    </button>
                    <Link href="/blogs" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#897261] hover:bg-[#ee7c2b]/5 hover:text-[#ee7c2b] rounded-lg transition-all">
                        <span className="material-symbols-outlined">visibility</span> View Blogs
                    </Link>
                </nav>
                <div className="p-6 border-t border-[#e6e0db] dark:border-[#3d2e23]">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#ee7c2b]/20 flex items-center justify-center text-[#ee7c2b] font-bold">A</div>
                        <div className="flex-grow">
                            <p className="text-xs font-bold">{session?.user?.name || 'Admin'}</p>
                            <p className="text-[10px] text-[#897261]">Heritage Curator</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-grow flex flex-col min-w-0">
                <header className="h-16 bg-white dark:bg-[#2d221a] border-b border-[#e6e0db] dark:border-[#3d2e23] px-6 flex items-center justify-between z-10">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#897261] uppercase tracking-widest">Blog Dashboard /</span>
                            <h2 className="text-sm font-bold">{isEditing ? (currentBlog.id ? 'Edit Post' : 'New Post') : 'All Posts'}</h2>
                        </div>
                    </div>
                    {isEditing && (
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() => handleSubmit(false)}
                                className="px-4 py-2 text-sm font-bold text-[#897261] hover:text-[#ee7c2b] transition-colors"
                            >
                                Save Draft
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsEditing(false)}
                                className="px-4 py-2 text-sm font-bold text-[#897261] border border-[#e6e0db] dark:border-[#3d2e23] rounded-lg hover:bg-gray-50 transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={() => handleSubmit(true)}
                                className="px-6 py-2 bg-[#ee7c2b] text-white text-sm font-bold rounded-lg hover:bg-opacity-90 transition-all shadow-sm"
                            >
                                Publish
                            </button>
                        </div>
                    )}
                </header>

                <main className="flex-grow overflow-y-auto p-8">
                    {isEditing ? (
                        /* Editor View */
                        <div className="flex gap-8">
                            <div className="flex-grow max-w-[800px] space-y-6">
                                <input
                                    className="w-full text-4xl font-bold font-display border-none focus:ring-0 placeholder-gray-300 dark:placeholder-gray-600 bg-transparent p-0 text-[#181411] dark:text-white"
                                    placeholder="Post Title"
                                    value={currentBlog.title || ''}
                                    onChange={(e) => setCurrentBlog({ ...currentBlog, title: e.target.value })}
                                />
                                <textarea
                                    className="w-full min-h-[400px] border border-[#e6e0db] dark:border-[#3d2e23] rounded-lg p-4 text-lg leading-relaxed placeholder-gray-300 dark:placeholder-gray-600 bg-white dark:bg-[#2d221a] resize-none focus:ring-[#ee7c2b] focus:border-[#ee7c2b] text-[#181411] dark:text-[#dcd6d0]"
                                    placeholder="Begin your heritage story here..."
                                    value={currentBlog.content || ''}
                                    onChange={(e) => setCurrentBlog({ ...currentBlog, content: e.target.value })}
                                />
                            </div>

                            {/* Settings Sidebar */}
                            <aside className="w-72 space-y-6">
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-[#897261]">Featured Image</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="w-full text-xs text-[#897261] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#ee7c2b]/10 file:text-[#ee7c2b] hover:file:bg-[#ee7c2b]/20"
                                    />
                                    {currentBlog.imageUrl && (
                                        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-[#e6e0db]">
                                            <img src={currentBlog.imageUrl} alt="Preview" className="object-cover w-full h-full" />
                                            <button
                                                onClick={() => setCurrentBlog({ ...currentBlog, imageUrl: '' })}
                                                className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1 hover:bg-red-500"
                                            >
                                                <span className="material-symbols-outlined text-xs">close</span>
                                            </button>
                                        </div>
                                    )}
                                    <input
                                        className="w-full bg-white dark:bg-[#2d221a] border-[#e6e0db] dark:border-[#3d2e23] rounded-lg text-sm focus:ring-[#ee7c2b] focus:border-[#ee7c2b] text-[#181411] dark:text-white"
                                        placeholder="Or clean image URL..."
                                        value={currentBlog.imageUrl || ''}
                                        onChange={(e) => setCurrentBlog({ ...currentBlog, imageUrl: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-[#897261]">Category</label>
                                    <select
                                        className="w-full bg-white dark:bg-[#2d221a] border-[#e6e0db] dark:border-[#3d2e23] rounded-lg text-sm focus:ring-[#ee7c2b] focus:border-[#ee7c2b] text-[#181411] dark:text-white"
                                        value={currentBlog.category || 'Heritage News'}
                                        onChange={(e) => setCurrentBlog({ ...currentBlog, category: e.target.value })}
                                    >
                                        <option>Heritage News</option>
                                        <option>Craft Stories</option>
                                        <option>Village Life</option>
                                        <option>Traditional Arts</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-[#897261]">Tags (comma separated)</label>
                                    <input
                                        className="w-full bg-white dark:bg-[#2d221a] border-[#e6e0db] dark:border-[#3d2e23] rounded-lg text-sm focus:ring-[#ee7c2b] focus:border-[#ee7c2b] text-[#181411] dark:text-white"
                                        placeholder="Jamdani, Weaving, Bengal"
                                        value={currentBlog.tags || ''}
                                        onChange={(e) => setCurrentBlog({ ...currentBlog, tags: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-[#897261]">Short Excerpt</label>
                                    <textarea
                                        className="w-full bg-white dark:bg-[#2d221a] border-[#e6e0db] dark:border-[#3d2e23] rounded-lg text-sm focus:ring-[#ee7c2b] focus:border-[#ee7c2b] resize-none text-[#181411] dark:text-white"
                                        placeholder="A brief summary..."
                                        rows={3}
                                        value={currentBlog.excerpt || ''}
                                        onChange={(e) => setCurrentBlog({ ...currentBlog, excerpt: e.target.value })}
                                    />
                                </div>
                            </aside>
                        </div>
                    ) : (
                        /* Blog List View */
                        <div className="space-y-4">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold">All Blog Posts</h3>
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="px-4 py-2 bg-[#ee7c2b] text-white text-sm font-bold rounded-lg hover:bg-opacity-90 transition-all flex items-center gap-2"
                                >
                                    <span className="material-symbols-outlined text-lg">add</span> New Post
                                </button>
                            </div>

                            {blogs.length === 0 ? (
                                <div className="text-center py-20 text-[#897261]">
                                    <span className="material-symbols-outlined text-6xl mb-4 block">article</span>
                                    <p className="text-lg mb-4">No blog posts yet</p>
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="px-6 py-3 bg-[#ee7c2b] text-white font-bold rounded-lg"
                                    >
                                        Create Your First Post
                                    </button>
                                </div>
                            ) : (
                                <div className="bg-white dark:bg-[#2d221a] rounded-xl border border-[#e6e0db] dark:border-[#3d2e23] overflow-hidden">
                                    <table className="w-full">
                                        <thead className="bg-[#f8f7f6] dark:bg-[#221810]">
                                            <tr>
                                                <th className="text-left px-6 py-4 text-xs font-bold text-[#897261] uppercase tracking-wider">Title</th>
                                                <th className="text-left px-6 py-4 text-xs font-bold text-[#897261] uppercase tracking-wider">Category</th>
                                                <th className="text-left px-6 py-4 text-xs font-bold text-[#897261] uppercase tracking-wider">Status</th>
                                                <th className="text-left px-6 py-4 text-xs font-bold text-[#897261] uppercase tracking-wider">Date</th>
                                                <th className="text-right px-6 py-4 text-xs font-bold text-[#897261] uppercase tracking-wider">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-[#e6e0db] dark:divide-[#3d2e23]">
                                            {blogs.map((blog) => (
                                                <tr key={blog.id} className="hover:bg-[#f8f7f6] dark:hover:bg-[#221810]">
                                                    <td className="px-6 py-4">
                                                        <div className="font-bold">{blog.title}</div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-[#897261]">{blog.category}</td>
                                                    <td className="px-6 py-4">
                                                        <span className={`px-2 py-1 rounded text-xs font-bold ${blog.published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                                            {blog.published ? 'Published' : 'Draft'}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-[#897261]">
                                                        {new Date(blog.createdAt).toLocaleDateString()}
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button
                                                            onClick={() => handleEdit(blog)}
                                                            className="text-[#ee7c2b] hover:text-[#ee7c2b]/80 mr-4"
                                                        >
                                                            <span className="material-symbols-outlined">edit</span>
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(blog.id)}
                                                            className="text-red-500 hover:text-red-700"
                                                        >
                                                            <span className="material-symbols-outlined">delete</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
