import { Metadata } from "next";
import DashboardHeader from "../../_components/dashboard-header";
import Shell from "../../_components/layout/Shell";
import UserDataTable from "../../_components/UserDataTable";
import HoldingsForm from "../../_components/holdings-form";

export const metadata: Metadata = {
    title: "User Data | GHO Lens",
    description: "Get a summary of your Aave portfolio.",
};

const UserDataPage = () => {
    const userAddress = "0x719bD84af4F2a08F3aa83037a3728cadE5A43c3F";

    return (
        <Shell>
            <DashboardHeader
                heading="User Data"
                text="Get as summary of your Aave portfolio."
            />
            <div className="grid grid-cols-1 gap-6">
                <UserDataTable />
                <HoldingsForm userAddress={userAddress} />
            </div>
        </Shell>
    );
};

export default UserDataPage;
