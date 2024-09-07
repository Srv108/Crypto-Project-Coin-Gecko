import { useQuery } from "react-query";
import { fecthCoinHistory } from "../../services/fetchCoinHistory";
import CurrencyStore from "../../zustand/state"
import { useState } from "react";
import CoinChart from "./CoinChart";

function CoinChartContainer(coinId){

    const {currency} = CurrencyStore();
    const [days,setDays] = useState(7);
    const [interval,setInterval] = useState("daily");

    const {data ,isLoading,isError} = useQuery(['coins',coinId,currency,days,interval] ,() => fecthCoinHistory(coinId,currency,days,interval),{
        // retry: 2,
        cacheTime: 1000*60*2,
        staleTime: 1000*60*2,
    })

    // console.log(historicData);
    return(
        <>
            <CoinChart 
                historicData={data}
                setDays={setDays}
                setInterval={setInterval}
            />
        </>
    );
}

export default CoinChartContainer;