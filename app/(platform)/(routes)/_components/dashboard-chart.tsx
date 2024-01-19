"use client";

import React, { useState } from "react";
import useSWR from "swr";
import { fetchCoins } from "@/services/cryptoService";
import LineChart from "./LineChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Spinner from "@/components/Spinner";

const DashboardChart = () => {
    const [timeperiod, setTimeperiod] = useState<string>("7d");

    const cryptoHistoryUrl = `https://${process.env.NEXT_PUBLIC_CRYPTO_BASE_URL}/coin/ixgUfzmLR/history?timePeriod=${timeperiod}`;

    const { data: coinHistory, error } = useSWR(cryptoHistoryUrl, fetchCoins);

    const periods = ["24h", "7d", "30d", "1y", "5y"];

    const handleTimeperiodChange = (newTimeperiod: string) => {
        setTimeperiod(newTimeperiod);
    };

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl md:text-2xl">
                    Native to the Aave Protocol.
                </CardTitle>
                <div className="flex items-center mb-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="ml-auto w-20">
                                <Icons.history className="mr-2 h-4 w-4" />
                                {timeperiod}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Time Period</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {periods.map((period) => (
                                <DropdownMenuItem
                                    key={period}
                                    onClick={() =>
                                        handleTimeperiodChange(period)
                                    }
                                >
                                    {period}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>
            <CardContent className="h-96">
                {coinHistory ? (
                    <LineChart coinHistory={coinHistory} />
                ) : (
                    <div className="flex items-center justify-center">
                        <Spinner />
                    </div>
                )}{" "}
            </CardContent>
        </Card>
    );
};

export default DashboardChart;
