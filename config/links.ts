import { Navigation } from "@/types";

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
