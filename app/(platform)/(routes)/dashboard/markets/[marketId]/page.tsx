import { Metadata } from "next";
import Shell from "../../../_components/layout/Shell";
import PageHeader from "../../../_components/PageHeader";
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
            <PageHeader
                heading={`${symbol} market details`}
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
