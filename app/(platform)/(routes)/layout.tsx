"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccount } from "wagmi";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isConnected, isConnecting } = useAccount();
    const router = useRouter();

    useEffect(() => {
        if (!isConnected && !isConnecting) {
            router.replace("/");
        }
    }, [isConnected, isConnecting, router]);

    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900"></div>
            <main className="md:pl-72 pb-10">{children}</main>
        </div>
    );
}
