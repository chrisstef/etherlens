"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useModal } from "connectkit";
import { useAccount } from "wagmi";
import { Sparkles, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
                    buttonVariants({ variant: "link", size: "sm" }),
                    "absolute left-4 top-4 md:left-6 md:top-6"
                )}
            >
                <>
                    <Icons.back className="mr-2 h-4 w-4" />
                    GHO Back
                </>
            </Link>
            <main className="h-screen flex flex-col md:flex-row justify-center md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
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
                    <div className="text-center space-y-3">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Login
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your email to receive your Magic Link.
                        </p>
                        <Input type="email" placeholder="Email" disabled />
                    </div>
                    <div className="text-center">
                        <Button
                            className="mt-2 w-full cursor-pointer hover:bg-black hover:text-primary-foreground"
                            type="submit"
                            size="lg"
                            disabled
                        >
                            <Sparkles className="mr-2 h-4 w-4" />
                            Send Magic Link
                        </Button>
                    </div>

                    <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or
                        </span>
                    </div>
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
            </main>
        </>
    );
};
