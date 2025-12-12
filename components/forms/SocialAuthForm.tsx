'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { signInWithGithub,signInWithGoogle } from "@/lib/actions/auth.action";
import ROUTES from "@/contants/routes";

const SocialAuthForm = () => {
    const buttonClass = "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3"
    const handleSignIn = async (provider: "github" | "google") => {
        try {
            if (provider === 'github') {
                await signInWithGithub();
            } else {
                await signInWithGoogle();
            }
        } catch (err) {
            console.log(err);
            toast.error("Sign-In Failed", {
                description: err instanceof Error ? err.message : "An Error occurred during sign-in",
            })
        }
    }
    return (
        <div className='mt-10 flex flex-wrap gap-2.5'>
            <Button className={buttonClass} onClick={() => handleSignIn("github")}>
                <Image src='/icons/github.svg' alt='GitHub' width={20} height={20}
                    className='invert-colors mr-2.5 object-contain' />
                <span>Login in with Github</span>
            </Button>


            <Button className={buttonClass} onClick={() => handleSignIn("google")}>
                <Image src='/icons/google.svg' alt='Google' width={20} height={20}
                    className='mr-2.5 object-contain' />
                <span>Login in with Google</span>
            </Button>

        </div>
    )
}
export default SocialAuthForm;