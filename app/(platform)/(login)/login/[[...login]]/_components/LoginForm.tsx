"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useModal } from "connectkit";
import { useAccount } from "wagmi";
import { Sparkles, Wallet, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const LoginForm = () => {
    const { isConnected } = useAccount();
    const { setOpen } = useModal();
    const router = useRouter();

    const handleConnectWallet = () => {
        if (!isConnected) {
            setOpen(true);
        }
    };

    useEffect(() => {
        if (isConnected) {
            router.replace("/dashboard");
        }
    }, [isConnected, router]);

    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
                <img
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    alt="Sample image"
                />
            </div>
            <div className="md:w-1/3 max-w-sm">
                <div className="text-center">
                    <div className="text-center">
                        <Button
                            className="w-full cursor-pointer"
                            type="submit"
                            variant="default"
                            size="lg"
                            onClick={handleConnectWallet}
                        >
                            <Wallet className="mr-2 h-4 w-4" />
                            Connect Wallet
                        </Button>
                    </div>
                </div>
                <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
                        Or
                    </p>
                </div>
                <Input type="email" placeholder="Email" disabled />
                <div className="text-center">
                    <Button
                        className="mt-6 w-full cursor-pointer hover:bg-black hover:text-primary-foreground"
                        type="submit"
                        variant="outline"
                        size="lg"
                        disabled
                    >
                        <Sparkles className="mr-2 h-4 w-4" />
                        Send Magic Link
                    </Button>
                </div>
                <div className="mt-4 font-semibold text-sm bg-slate-100 p-4 text-slate-500 text-center rounded-md flex items-center justify-center">
                    <Wand2 className="mr-2" />
                    <span>
                        Get a magic link to your email for password-free
                        authentication.
                    </span>
                </div>
            </div>
        </section>
    );
};
