import { Metadata } from "next";
import DashboardHeader from "../../_components/dashboard-header";
import { AppearanceForm } from "../../_components/appearance-form";
import UserAddressForm from "../../_components/user-address-form";
import Shell from "../../_components/layout/Shell";

export const metadata: Metadata = {
    title: "Settings | GHOLens",
    description: "Manage account and preferences.",
};

const SettingsPage = () => {
    return (
        <Shell>
            <DashboardHeader
                heading="Settings"
                text="Manage account and preferences."
            />
            <div className="grid grid-cols-1 gap-6">
                <AppearanceForm />
                <UserAddressForm />
            </div>
        </Shell>
    );
};

export default SettingsPage;
