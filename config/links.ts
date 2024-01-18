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
            title: "Markets",
            href: "/dashboard/markets",
            icon: "mixer",
        },
        {
            title: "User Data",
            href: "/dashboard/user-data",
            icon: "activity",
        },
        {
            title: "Facilitators",
            href: "/dashboard/facilitators",
            icon: "holdings",
        },
        {
            title: "Settings",
            href: "/dashboard/settings",
            icon: "settings",
        },
    ],
};
