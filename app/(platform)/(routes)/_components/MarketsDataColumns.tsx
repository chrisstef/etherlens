"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export type YourDataType = {
    id: string;
    name: string;
    symbol: string;
    formattedAvailableLiquidity: string;
    supplyAPY: string;
    underlyingAsset: string;
};

const MarketsDataColumns: ColumnDef<YourDataType>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === "asc")
                }
            >
                ID
                <Icons.sort className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => <div className="px-4">{row.original.id}</div>,
    },
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => <div className="px-4">{row.original.name}</div>,
    },
    {
        accessorKey: "symbol",
        header: "Symbol",
        cell: ({ row }) => <div className="px-4">{row.original.symbol}</div>,
    },
    {
        accessorKey: "formattedAvailableLiquidity",
        header: "Available Liquidity",
        cell: ({ row }) => (
            <div className="px-4">
                {row.original.formattedAvailableLiquidity}
            </div>
        ),
    },
    {
        accessorKey: "supplyAPY",
        header: "Supply APY",
        cell: ({ row }) => <div className="px-4">{row.original.supplyAPY}</div>,
    },
    {
        accessorKey: "underlyingAsset",
        header: "Underlying Asset",
        cell: ({ row }) => (
            <div className="px-4">{row.original.underlyingAsset}</div>
        ),
    },
];

export default MarketsDataColumns;
