"use client";

import * as React from "react";
import { useAccount, useDisconnect } from "wagmi";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const UserAddressForm = ({ className, ...props }: any) => {
    const { address } = useAccount();
    const { disconnect } = useDisconnect();

    const handleCopyAddress = (address: any) => {
        const currentAddress = address;
        navigator.clipboard.writeText(currentAddress);
        toast({
            description: "Address copied to clipboard.",
        });
    };

    const handleDisconnect = () => {
        disconnect();
        toast({
            description: "You have been disconnected.",
        });
    };

    return (
        <form className={cn(className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Address</CardTitle>
                    <CardDescription>Your registered address.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="name">
                            Name
                        </Label>
                        <div className="flex w-full max-w-md items-center space-x-2">
                            <Input
                                id="address"
                                className="w-full lg:w-[400px]"
                                size={32}
                                value={address || ""}
                                disabled
                            />
                            <Button
                                variant="ghost"
                                type="button"
                                onClick={() => handleCopyAddress(address)}
                            >
                                <Icons.copy className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="button" size="sm" onClick={handleDisconnect}>
                        Disconnect
                    </Button>
                </CardFooter>
            </Card>
        </form>
    );
};

export default UserAddressForm;
