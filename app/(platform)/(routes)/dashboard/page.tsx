"use client";
import { Button } from "@/components/ui/button";
import { useAccount, useDisconnect } from "wagmi";

const Page = () => {
    const { disconnect } = useDisconnect();
    const { isConnected, address } = useAccount();

    return (
        <div>
            <div className="mb-8 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-center">
                    Explore the GHO Ecosystem
                </h2>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                    Dive deeper in advanced analytics & metrics.
                </p>
            </div>
            <div>
                {isConnected && (
                    <>
                        <p>Connected wallet: {address}</p>
                        <Button
                            className="cursor-pointer"
                            type="submit"
                            variant="default"
                            size="lg"
                            onClick={() => disconnect()}
                        >
                            Disconnect
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Page;
