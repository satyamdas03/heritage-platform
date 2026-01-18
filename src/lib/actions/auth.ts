'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { z } from 'zod'; // We'll assume zod is installed
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

const RegisterSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum(['USER', 'ARTISAN']).default('USER')
});

export async function register(prevState: string | undefined, formData: FormData) {
    const rawData = Object.fromEntries(formData.entries());
    const result = RegisterSchema.safeParse(rawData);

    if (!result.success) {
        return 'Invalid input data';
    }

    const { name, email, password, role } = result.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role
            }
        });
    } catch (e) {
        return 'User already exists or database error';
    }

    redirect('/login');
}
