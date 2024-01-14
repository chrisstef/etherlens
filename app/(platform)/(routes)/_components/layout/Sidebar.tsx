"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

interface DashboardNavProps {
    items: NavItem[];
}

export const Sidebar = ({ items }: DashboardNavProps) => {
    const path = usePathname();

    if (!items?.length) {
        return null;
    }

    return (
        <nav className="grid items-start p-3 gap-5">
            {items.map((item, index) => {
                const Icon = Icons[item.icon || "next"];
                return (
                    item.href && (
                        <Link
                            key={index}
                            href={item.disabled ? "/" : item.href}
                        >
                            <span
                                className={cn(
                                    "group flex items-center rounded-xl px-3 py-2 text-md font-normal hover:bg-accent hover:text-accent-foreground",
                                    path === item.href
                                        ? "bg-accent"
                                        : "transparent",
                                    item.disabled &&
                                        "cursor-not-allowed opacity-80"
                                )}
                            >
                                <Icon className="mr-2 h-4 w-4" />
                                <span>{item.title}</span>
                            </span>
                        </Link>
                    )
                );
            })}
        </nav>
    );
};
