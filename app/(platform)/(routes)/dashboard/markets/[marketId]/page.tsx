import { Metadata } from "next";
import Shell from "../../../_components/layout/Shell";
import DashboardHeader from "../../../_components/dashboard-header";
import MarketDetails from "../../../_components/MarketDetails";

export const metadata: Metadata = {
    title: "Market Details | GHO Lens",
    description: "Dive deeper into market-specific details.",
};

const MarketDetailsPage = ({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) => {
    const symbol =
        typeof searchParams.symbol === "string"
            ? searchParams.symbol.split("?")[0]
            : undefined;

    return (
        <Shell>
            <DashboardHeader
                heading={`${symbol} reserve data`}
                text={`Dive deeper into market-specific details for ${symbol}.`}
            />
            <div className="grid grid-cols-1 gap-6">
                {" "}
                <MarketDetails />
            </div>
        </Shell>
    );
};

export default MarketDetailsPage;
