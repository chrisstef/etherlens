import { Metadata } from "next";
import DashboardHeader from "../../_components/dashboard-header";
import Shell from "../../_components/layout/Shell";
import HoldingsForm from "../../_components/holdings-form";

export const metadata: Metadata = {
    title: "Holdings | GHO Lens",
    description: "Explore GHO holdings in either your own or other addresses.",
};

const HoldingsPage = () => {
    const userAddress = "0x719bD84af4F2a08F3aa83037a3728cadE5A43c3F";

    return (
        <Shell>
            <DashboardHeader
                heading="Holdings"
                text="Explore GHO holdings in either your own or other addresses."
            />
            <div className="grid grid-cols-1 gap-6">
                <HoldingsForm userAddress={userAddress} />
            </div>
        </Shell>
    );
};

export default HoldingsPage;
