import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { useRef } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


function CoinChart({historicData,setDays,setInterval}){
    console.log("in coinChart",historicData);
    const chartRef = useRef(null);
    
    
    
    return(
        <>
            <Line 
                data={
                    {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                        datasets: [
                            {
                                label: `first data`,
                                // data: historicData.prices.map(coinPrices => coinPrices[1]),
                            }
                        ]
                    }
                }
                ref={chartRef}
                
            />

        </>
    );
}

export default CoinChart;