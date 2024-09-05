import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoinDetails } from "../../../services/fetchCoinDetails";
import { useEffect } from "react";
import parse from 'html-react-parser';
import currencyStore from "../../../zustand/state"

function CoinsDetailPage(){

    const {coinId} = useParams();
    const {currency} = currencyStore();

    const {data: coin,isLoading,isError} = useQuery(["coins",coinId] , () => fetchCoinDetails(coinId),{
        cacheTime : 1000*60*2,
        staleTime : 1000*60*2,
    });

    useEffect(() => {
        console.log(coin);
    },[coin]);

    if(isLoading){
        return(
            <div>Loading......</div>
        );
    }
    if(isError){
        return(
            <div>Something went wrong....</div>
        );
    }

    return(
        <div className="flex flex-col md:flex-row"> 
            <div className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-500">
                <img 
                    className="h-52 mb-5"
                    src={coin?.image?.large} 
                    alt={coin?.name}
                />
                <h1
                    className="text-4xl font-bold mb-5"
                >   #
                    <span className="ml-3 text-4xl ">
                        {coin?.market_cap_rank}
                    </span> 
                </h1>
                <h2
                    className="text-4xl font-bold mb-5"
                > 
                    {coin?.name} 
                </h2>
                <div className="flex items-center mb-4 md:mb-0">
                    <h2 className="text-xl text-yellow-400 font-bold ">
                        Current Price
                    </h2>
                    <span className="ml-3 text-xl ">
                        {coin?.market_data.current_price[currency]}
                    </span>
                </div>

                <p
                    className="w-full px-6 py-4 text-justify" 
                >
                    {parse(coin?.description?.en)}
                </p>
            </div> 
            <div className="md:w-2/3 w-full">
                <h1>Coins Data</h1>
            </div>
        </div>
    );
}

export default CoinsDetailPage;