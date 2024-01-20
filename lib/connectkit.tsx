"use client";

import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const config = createConfig(
    getDefaultConfig({
        // Required API Key
        walletConnectProjectId:
            process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",

        // Required
        appName: "GHO Lens",

        // Optional
        appDescription: "A tool to help navigate in the GHO ecosystem",
        appUrl: "https://gho-lens.vercel.app", // your app's url
        appIcon: "https://gho-lens.vercel.app/logo.svg", // your app's icon, no bigger than 1024x1024px (max. 1MB)
    })
);

export const ConnectkitProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <WagmiConfig config={config}>
            <ConnectKitProvider theme="midnight">
                {children}{" "}
            </ConnectKitProvider>
        </WagmiConfig>
    );
};
