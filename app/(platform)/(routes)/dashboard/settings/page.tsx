import { Metadata } from "next";
import PageHeader from "../../_components/PageHeader";
import UserAddressForm from "../../_components/UserAddressForm";
import Shell from "../../_components/layout/Shell";
import AppearanceForm from "../../_components/AppearanceForm";

export const metadata: Metadata = {
    title: "Settings | GHO Lens",
    description: "Manage account and preferences.",
};

const SettingsPage = () => {
    return (
        <Shell>
            <PageHeader
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
