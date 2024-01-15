"use client";

import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = ({ coinHistory }: any) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinTimestamp.push(
            new Date(
                coinHistory?.data?.history[i].timestamp * 1000
            ).toLocaleDateString()
        );
    }

    const data = {
        labels: coinTimestamp.reverse(),
        datasets: [
            {
                label: "Aave Price in USD",
                data: coinPrice.reverse(),
                backgroundColor: "#241F4C",
                borderColor: "#6366F1",
                borderWidth: 1,
                pointRadius: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false, // Remove X-axis gridlines
                },
            },
        },
    };

    return (
        <>
            <Line data={data} options={options} />
        </>
    );
};

export default LineChart;
