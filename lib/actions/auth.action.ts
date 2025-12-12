'use server'

import { signIn } from "@/auth";
import ROUTES from "@/contants/routes";

export async function signInWithGithub() {
    console.log("Initiating GitHub sign-in...");
    await signIn("github", { redirectTo: ROUTES.HOME });
}

export async function signInWithGoogle() {
    console.log("Initiating Google sign-in...");
    await signIn("google", {redirectTo: ROUTES.HOME});
}