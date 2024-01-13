import { Navigation } from "@/types";

export const navLinks: Navigation = {
    data: [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Features",
            href: "/#features",
        },
        {
            title: "Overview",
            href: "/#overview",
        },
        {
            title: "Dashboard",
            href: "/dashboard",
        },
    ],
};

export const dashboardLinks: Navigation = {
    data: [
        {
            title: "Dashboard",
            href: "/dashboard",
            icon: "dashboard",
        },
        {
            title: "Transactions",
            href: "/dashboard/transactions",
            icon: "activity",
        },
        {
            title: "Token Distribution",
            href: "/dashboard/token-distribution",
            icon: "activity",
        },
        {
            title: "Historical Price",
            href: "/dashboard/historical-price",
            icon: "activity",
        },
        {
            title: "Network Activity",
            href: "/dashboard/network-activity",
            icon: "activity",
        },
        {
            title: "Settings",
            href: "/dashboard/settings",
            icon: "settings",
        },
    ],
};
