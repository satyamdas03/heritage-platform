import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET - Fetch all published blogs (public) or all blogs (admin)
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const admin = searchParams.get('admin') === 'true';

        const blogs = await prisma.blog.findMany({
            where: admin ? {} : { published: true },
            orderBy: { createdAt: 'desc' },
        });

        return NextResponse.json(blogs);
    } catch (error: any) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json({ error: `Failed to fetch blogs: ${error.message}` }, { status: 500 });
    }
}

// POST - Create new blog (admin only)
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { title, content, excerpt, category, tags, imageUrl, published } = body;

        const blog = await prisma.blog.create({
            data: {
                title,
                content,
                excerpt,
                category: category || 'Heritage News',
                tags: tags ? JSON.stringify(tags) : null,
                imageUrl,
                published: published || false,
            },
        });

        return NextResponse.json(blog, { status: 201 });
    } catch (error: any) {
        console.error('Error creating blog:', error);
        return NextResponse.json({ error: `Failed to create blog: ${error.message}` }, { status: 500 });
    }
}

// PUT - Update blog (admin only)
export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();
        const { id, title, content, excerpt, category, tags, imageUrl, published } = body;

        const blog = await prisma.blog.update({
            where: { id },
            data: {
                title,
                content,
                excerpt,
                category,
                tags: tags ? JSON.stringify(tags) : null,
                imageUrl,
                published,
            },
        });

        return NextResponse.json(blog);
    } catch (error) {
        console.error('Error updating blog:', error);
        return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
    }
}

// DELETE - Delete blog (admin only)
export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'Blog ID required' }, { status: 400 });
        }

        await prisma.blog.delete({ where: { id } });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting blog:', error);
        return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
    }
}
