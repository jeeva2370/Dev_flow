import NextAuth from "next-auth"
import Github from 'next-auth/providers/github'
import Google from "next-auth/providers/google";
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Github, Google],
    callbacks: {
        async signIn({ user, account, profile }) {
            console.log("User authenticated:", user.email);
            return true;
        }
    }
})