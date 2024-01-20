"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useModal } from "connectkit";
import { useAccount } from "wagmi";
import { Sparkles, Wallet, Wand2 } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

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
        <>
            <Link
                href="/"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "absolute left-2 top-2 md:left-4 md:top-4 font-medium"
                )}
            >
                <>
                    <Icons.back className="mr-2 h-4 w-4" />
                    GHO Back
                </>
            </Link>
            <main className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
                <div className="md:w-1/3 max-w-sm">
                    <Image
                        src="/GHO.svg"
                        className="md:w-80 h-auto w-30 pb-20 md:pb-0"
                        alt="GHO Token"
                        width={150}
                        height={150}
                        priority
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
                        <p className="mx-4 mb-0 text-center font-semibold">
                            OR
                        </p>
                    </div>
                    <Input type="email" placeholder="Email" disabled />
                    <div className="text-center">
                        <Button
                            className="mt-6 w-full cursor-pointer hover:bg-black hover:text-primary-foreground"
                            type="submit"
                            size="lg"
                            disabled
                        >
                            <Sparkles className="mr-2 h-4 w-4" />
                            Send Magic Link
                        </Button>
                    </div>
                    <div className="mt-4 font-medium text-sm p-4 border text-center rounded-md flex items-center justify-center">
                        <Wand2 className="mr-2" />
                        <span>
                            Get a magic link to your email for password-free
                            authentication.
                        </span>
                    </div>
                </div>
            </main>
        </>
    );
};
