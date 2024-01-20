"use client";

import React, { useState } from "react";
import Link from "next/link";
import millify from "millify";

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
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/icons";
import useAaveData from "@/hooks/useAaveData";

interface ReserveData {
    id: string;
    name: string;
    symbol: string;
    totalLiquidityUSD: string;
    formattedAvailableLiquidity: string;
    variableBorrowAPY: string;
    underlyingAsset: string;
}

interface Column {
    id: string;
    label: string;
    isVisible: boolean;
}

const initialColumns: Column[] = [
    { id: "name", label: "Name", isVisible: true },
    { id: "symbol", label: "Symbol", isVisible: true },
    {
        id: "totalLiquidityUSD",
        label: "Reserve Size",
        isVisible: true,
    },
    {
        id: "formattedAvailableLiquidity",
        label: "Available Liquidity",
        isVisible: true,
    },
    { id: "variableBorrowAPY", label: "APY", isVisible: true },
];

const MarketsDataTable = () => {
    const { formattedReserves, isLoading } = useAaveData();
    const [columns, setColumns] = useState<Column[]>(initialColumns);
    const [currentPage, setCurrentPage] = useState(1);
    const reservesPerPage = 10;

    const paginate = (array: ReserveData[], page: number, perPage: number) => {
        const start = (page - 1) * perPage;
        const end = start + perPage;
        return array.slice(start, end);
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

    const handleColumnToggle = (columnId: string) => {
        setColumns((prevColumns) =>
            prevColumns.map((column) =>
                column.id === columnId
                    ? { ...column, isVisible: !column.isVisible }
                    : column
            )
        );
    };

    const getVisibleColumns = () =>
        columns.filter((column) => column.isVisible);

    return (
        <div className="w-full overflow-x-auto">
            <div className="mb-4 flex items-center px-1 pt-1">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            <Icons.mixer className="mr-2 h-4 w-4" />
                            View
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="-mx-1" align="end">
                        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                        {columns.map((column) => (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                checked={column.isVisible}
                                onCheckedChange={() => {
                                    handleColumnToggle(column.id);
                                }}
                            >
                                {column.label}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <Table className="min-w-full">
                    <TableCaption className="pb-4">
                        {isLoading
                            ? "Querying smart contracts..."
                            : "Aave Markets."}
                    </TableCaption>

                    <TableHeader>
                        <TableRow>
                            {getVisibleColumns().map((column) => (
                                <TableHead
                                    key={column.id}
                                    className="w-1/5 p-5"
                                >
                                    {column.label}
                                </TableHead>
                            ))}
                            <TableHead className="w-1/5 p-5">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedReserves?.map((reserve) => (
                            <TableRow key={reserve.id}>
                                {getVisibleColumns().map((column) => (
                                    <TableCell
                                        key={column.id}
                                        className="w-1/5 p-5"
                                    >
                                        {column.id ===
                                            "formattedAvailableLiquidity" ||
                                        column.id === "totalLiquidityUSD" ? (
                                            millify(Number(reserve[column.id]))
                                        ) : column.id ===
                                          "variableBorrowAPY" ? (
                                            `${(
                                                Number(
                                                    reserve.variableBorrowAPY
                                                ) * 100
                                            ).toFixed(2)}%`
                                        ) : column.id === "name" ? (
                                            <Link
                                                href={`/dashboard/markets/index=${formattedReserves.indexOf(
                                                    reserve
                                                )}underlyingAsset=${
                                                    reserve.underlyingAsset
                                                }?symbol=${reserve.symbol}`}
                                            >
                                                <span className="font-semibold">
                                                    {reserve.name}
                                                </span>
                                            </Link>
                                        ) : (
                                            (reserve as any)[column.id]
                                        )}
                                    </TableCell>
                                ))}
                                <TableCell className="w-1/5 p-5">
                                    <Button variant="outline" asChild>
                                        <Link
                                            href={`/dashboard/markets/index=${formattedReserves.indexOf(
                                                reserve
                                            )}underlyingAsset=${
                                                reserve.underlyingAsset
                                            }?symbol=${reserve.symbol}`}
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
