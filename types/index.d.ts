import { IconKeys } from "@/components/icons";

export type SiteConfig = {
    name: string;
    author: string;
    description: string;
    keywords: Array<string>;
    url: {
        base: string;
        author: string;
    };
    links: {
        github: string;
    };
    ogImage: string;
};

export type NavItem = {
    title: string;
    disabled?: boolean;
    external?: boolean;
    icon?: IconKeys;
} & (
    | {
          href: string;
          items?: never;
      }
    | {
          href?: string;
          items: NavLink[];
      }
);

export type Navigation = {
    data: NavItem[];
};
