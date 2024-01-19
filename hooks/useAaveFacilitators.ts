import { useEffect, useState } from "react";
import { GhoServiceContract } from "@/services/aaveQuery";
import { formatGhoReserveData } from "@aave/math-utils";

const useFacilitatorsData = () => {
    const [formattedGhoReserveData, setFormattedGhoReserveData] =
        useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from GhoServiceContract or your relevant service
                const ghoReserveData =
                    await GhoServiceContract.getGhoReserveData();

                // Format the data using your formatGhoReserveData function
                const formattedData = formatGhoReserveData({
                    ghoReserveData,
                });

                setFormattedGhoReserveData(formattedData);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching Facilitators data:", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { formattedGhoReserveData, isLoading };
};

export default useFacilitatorsData;
