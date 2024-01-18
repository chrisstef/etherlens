"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { poolDataProviderContract } from "@/services/aaveQuery";
import { formatReserves } from "@aave/math-utils";
import dayjs from "dayjs";

import * as markets from "@bgd-labs/aave-address-book";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface ReserveData {
    id: string;
    name: string;
    symbol: string;
    formattedAvailableLiquidity: string;
    supplyAPY: string;
    underlyingAsset: string;
}

const MarketsDataTable = <TData, TValue>() => {
    const [formattedReserves, setFormattedReserves] = useState<ReserveData[]>(
        []
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const reserves =
                    await poolDataProviderContract.getReservesHumanized({
                        lendingPoolAddressProvider:
                            markets.AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
                    });

                const reservesArray = reserves.reservesData;
                const baseCurrencyData = reserves.baseCurrencyData;

                const currentTimestamp = dayjs().unix();

                const formattedReserves = formatReserves({
                    reserves: reservesArray,
                    currentTimestamp,
                    marketReferenceCurrencyDecimals:
                        baseCurrencyData.marketReferenceCurrencyDecimals,
                    marketReferencePriceInUsd:
                        baseCurrencyData.marketReferenceCurrencyPriceInUsd,
                });

                setFormattedReserves(formattedReserves);

                console.log("1: formattedReserves:", formattedReserves);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full overflow-x-auto">
            <div className="mb-4 flex items-center px-2 pt-1">
                {/* Your dropdown menu content */}
            </div>
            <div className="rounded-md border">
                <Table className="min-w-full">
                    <TableHeader>
                        {formattedReserves.length > 0 ? (
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Symbol</TableHead>
                                <TableHead>Liquidity</TableHead>
                                <TableHead>APY</TableHead>
                                <TableHead>Details</TableHead>
                            </TableRow>
                        ) : null}
                    </TableHeader>
                    <TableBody>
                        {formattedReserves.map((reserve) => (
                            <TableRow key={reserve.id} data-state="selected">
                                <TableCell>{reserve.name}</TableCell>
                                <TableCell>{reserve.symbol}</TableCell>
                                <TableCell>
                                    {reserve.formattedAvailableLiquidity}
                                </TableCell>
                                <TableCell>{reserve.supplyAPY}</TableCell>
                                <TableCell>
                                    <Link
                                        href={`/dashboard/markets/underlyingAsset=${reserve.underlyingAsset}`}
                                    >
                                        <span>Details</span>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default MarketsDataTable;
