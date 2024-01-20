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

export type EtherscanApiResponse = {
    status: string;
    result: string;
};

export type ReserveData = {
    id: string;
    name: string;
    symbol: string;
    priceInUSD: string;
    borrowUsageRatio: string;
    totalLiquidityUSD: string;
    availableLiquidityUSD: string;
    variableBorrowAPY: string;
    underlyingAsset: string;
    eModeLabel: string;
    formattedReserveLiquidationThreshold: string;
    usageAsCollateralEnabled: boolean;
};

export type MarketData = {
    name: string;
    symbol: string;
    priceInUSD?: string;
    borrowUsageRatio?: string;
    totalLiquidityUSD?: string;
    availableLiquidityUSD: string;
    totalDebtUSD?: string;
    variableBorrowAPR?: string;
    stableBorrowAPR?: string;
    eModeLabel?: string;
    formattedReserveLiquidationThreshold?: string;
    usageAsCollateralEnabled?: boolean;
};
