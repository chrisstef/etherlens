"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import millify from "millify";
import { formatReserves } from "@aave/math-utils";
import dayjs from "dayjs";
import { poolDataProviderContract } from "@/services/aaveQuery";

import * as markets from "@bgd-labs/aave-address-book";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface ReserveData {
    id: string;
    name: string;
    symbol: string;
    formattedAvailableLiquidity: string;
    variableBorrowAPY: string;
    underlyingAsset: string;
}

const MarketsDataTable = () => {
    const [formattedReserves, setFormattedReserves] = useState<ReserveData[]>(
        []
    );
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const reservesPerPage = 10; // Adjust the number of reserves per page as needed

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
                setIsLoading(false);

                console.log("1: formattedReserves:", formattedReserves);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const paginate = (array: ReserveData[], page: number, perPage: number) => {
        const start = (page - 1) * perPage;
        const end = start + perPage;
        return array.slice(start, end);
    };

    const handleLoadMore = () => {
        setCurrentPage(currentPage + 1);
    };

    const paginatedReserves = paginate(
        formattedReserves,
        currentPage,
        reservesPerPage
    );

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <div className="w-full overflow-x-auto">
            <div className="mb-4 flex items-center px-2 pt-1">
                {/* Your dropdown menu content */}
            </div>
            <div className="rounded-md border">
                <Table className="min-w-full">
                    <TableCaption className="pb-4">
                        {isLoading
                            ? "Querying smart contracts..."
                            : "Aave Markets."}
                    </TableCaption>

                    <TableHeader>
                        {formattedReserves.length > 0 ? (
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Symbol</TableHead>
                                <TableHead>Available Liquidity</TableHead>
                                <TableHead>APY</TableHead>
                                <TableHead>Details</TableHead>
                            </TableRow>
                        ) : null}
                    </TableHeader>
                    <TableBody>
                        {paginatedReserves?.map((reserve) => (
                            <TableRow key={reserve.id}>
                                <TableCell>
                                    <Link
                                        href={`/dashboard/markets/underlyingAsset=${reserve.underlyingAsset}`}
                                    >
                                        <span className="font-semibold">
                                            {reserve.name}
                                        </span>
                                    </Link>
                                </TableCell>
                                <TableCell className="w-64">
                                    {reserve.symbol}
                                </TableCell>
                                <TableCell className="w-64">
                                    $
                                    {millify(
                                        Number(
                                            reserve.formattedAvailableLiquidity
                                        ),
                                        { precision: 2 }
                                    )}
                                </TableCell>
                                <TableCell className="w-64">
                                    {(
                                        Number(reserve.variableBorrowAPY) * 100
                                    ).toFixed(2) + "%"}
                                </TableCell>
                                <TableCell className="w-64">
                                    <Button variant="outline" asChild>
                                        <Link
                                            href={`/dashboard/markets/underlyingAsset=${reserve.underlyingAsset}`}
                                        >
                                            <span>Details</span>
                                        </Link>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="flex gap-2 justify-end mt-4">
                <Button
                    variant="outline"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    onClick={handleNextPage}
                    disabled={
                        formattedReserves.length <=
                        currentPage * reservesPerPage
                    }
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default MarketsDataTable;
