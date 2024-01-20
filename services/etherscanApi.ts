import { EtherscanApiResponse } from "@/types";

export const getEtherscanData = async (
    address: string,
    contractAddress: string
): Promise<EtherscanApiResponse> => {
    const url = `${process.env.NEXT_PUBLIC_ETHERSCAN_BASE_URL}?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${address}&tag=latest&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data from Etherscan:", error);
        throw error;
    }
};
