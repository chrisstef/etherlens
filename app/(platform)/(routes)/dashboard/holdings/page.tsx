import { Metadata } from "next";
import DashboardHeader from "../../_components/dashboard-header";
import Shell from "../../_components/layout/Shell";

export const metadata: Metadata = {
    title: "Holdings | GHO Lens",
    description: "Explore GHO holdings in either your own or other addresses.",
};

const HoldingsPage = () => {
    return (
        <Shell>
            <DashboardHeader
                heading="Holdings"
                text="Explore GHO holdings in either your own or other addresses."
            />
            <div className="grid grid-cols-1 gap-6">Holdings</div>
        </Shell>
    );
};

export default HoldingsPage;
