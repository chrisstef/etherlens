"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import dayjs from "dayjs";
import { getEtherscanData } from "@/services/etherscanApi";
import { EtherscanApiResponse } from "@/types";
import { formatGhoUserData } from "@aave/math-utils";
import { GhoServiceContract } from "@/services/aaveQuery";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableRow,
} from "@/components/ui/table";

const UserDataTable = () => {
    const [loading, setLoading] = useState(true);
    const [etherscanData, setEtherscanData] =
        useState<EtherscanApiResponse | null>(null);
    const [formattedGhoUserData, setFormattedGhoUserData] = useState<
        any | null
    >(null);
    const { address } = useAccount();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const contractAddress =
                    "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f";

                if (address) {
                    const data = await getEtherscanData(
                        address,
                        contractAddress
                    );
                    setEtherscanData(data);
                } else {
                    console.error("Address is undefined");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!address) {
                    console.error("No address found.");
                    return;
                }

                const currentTimestamp = dayjs().unix();

                const ghoReserveData =
                    await GhoServiceContract.getGhoReserveData();
                const ghoUserData = await GhoServiceContract.getGhoUserData(
                    address
                );

                const formattedGhoUserData = formatGhoUserData({
                    ghoReserveData,
                    ghoUserData,
                    currentTimestamp,
                });
                setFormattedGhoUserData(formattedGhoUserData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [address]);

    return (
        <div className="rounded-md border">
            <Table className="min-w-full">
                <TableCaption className="pb-4">
                    {loading
                        ? "Querying smart contracts..."
                        : "Your GHO summary."}
                </TableCaption>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium p-7">
                            Discount Token Balance
                        </TableCell>
                        <TableCell className="text-right">
                            {formattedGhoUserData?.userDiscountTokenBalance}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium p-7">
                            Discounted GHO Interest
                        </TableCell>
                        <TableCell className="text-right">
                            {formattedGhoUserData?.userDiscountedGhoInterest}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium p-7">
                            GHO Available to borrow at Discount
                        </TableCell>
                        <TableCell className="text-right">
                            {
                                formattedGhoUserData?.userGhoAvailableToBorrowAtDiscount
                            }
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium p-7">
                            GHO Borrow balance
                        </TableCell>
                        <TableCell className="text-right">
                            {formattedGhoUserData?.userGhoBorrowBalance}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium p-7">
                            GHO Discount Percent
                        </TableCell>
                        <TableCell className="text-right">
                            {formattedGhoUserData?.userGhoDiscountPercent}
                        </TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell className="p-7">Available GHO</TableCell>
                        <TableCell className="text-right">
                            {etherscanData?.result}
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
};

export default UserDataTable;
