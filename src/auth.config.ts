import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    providers: [
        // Added later in auth.ts
    ],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/profile');
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                // If logged in and on login/signup page, redirect to profile
                if (nextUrl.pathname.startsWith('/login') || nextUrl.pathname.startsWith('/signup')) {
                    return Response.redirect(new URL('/profile', nextUrl));
                }
            }
            return true;
        },
    },
} satisfies NextAuthConfig;
