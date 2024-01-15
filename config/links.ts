import { Navigation } from "@/types";

export const dashboardLinks: Navigation = {
    data: [
        {
            title: "Dashboard",
            href: "/dashboard",
            icon: "dashboard",
        },
        {
            title: "Token Distribution",
            href: "/dashboard/token-distribution",
            icon: "mixer",
        },
        {
            title: "Transactions",
            href: "/dashboard/transactions",
            icon: "activity",
        },
        {
            title: "Holdings",
            href: "/dashboard/holdings",
            icon: "holdings",
        },
        {
            title: "Settings",
            href: "/dashboard/settings",
            icon: "settings",
        },
    ],
};
