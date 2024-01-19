"use client";

import useFacilitatorsData from "@/hooks/useAaveFacilitators";
import React, { useEffect } from "react";

const FacilitatorsDataTable = () => {
    const { formattedGhoReserveData, isLoading } = useFacilitatorsData();

    useEffect(() => {
        if (!isLoading && formattedGhoReserveData) {
            console.log("Formatted Gho Reserve Data:", formattedGhoReserveData);
        }
    }, [isLoading, formattedGhoReserveData]);
    return <div>FacilitatorsDataTable</div>;
};

export default FacilitatorsDataTable;
