import { useContext, useEffect } from "react";
import { fecthCoinData } from "../../services/fetchCoinData";
import { useQuery } from "react-query";
import { useState } from "react";
import CurrencyContext from "../../Context/CurrencyContext";

function CoinTable(){   
    const [page,setPage] = useState(1);


    // useEffect(() => {
    //     console.log("Coin Table Displayed : ");
    //     fecthCoinData();
    // },[]);
    
    const { currency } = useContext(CurrencyContext);

    const {data , isLoading, isError, error, isFetching} = useQuery(['coins',page,currency],() => fecthCoinData(page,currency),{
        // retry : 2,
        // retryDelay : 1000,
        cacheTime : 1000*60*2,
        staleTime : 1000*60*2,
    });

    if(isLoading){
        return(
            <div>
                Loading .....
            </div>
        )
    }
    if(isError){
        return(
            <div>Error : {error.message}</div>
        )
    }
    if(isFetching){
        console.log("Refecting the data....")
        return(
            <div>
                Refecting the data....
            </div>
        )
    }
    return(
            <div className="flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
                <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center">
                    {/* Header of the table */}
                    <div className="basis-[35%]">
                        Coin 
                    </div>
                    <div  className="basis-[25%]">
                        Price 
                    </div>
                    <div  className="basis-[20%]">
                        24h change 
                    </div>
                    <div  className="basis-[20%]">
                        Market Cap
                    </div>
                </div>

                {data.map((coin) => {
                    return (
                        <div key={coin.id} className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between">
                            <div className="flex items-center justify-start gap-3 basis-[35%]">    
                                <div className="w-[5rem] h-[5rem]">
                                    <img src={coin.image} className="w-full h-full" />
                                </div>

                                <div className="flex flex-col">
                                    <div className="text-3xl"> {coin.name} </div>
                                    <div className="text-xl">  {coin.symbol} </div>
                                </div>
                            </div>
                            
                            <div className="basis-[25%]">
                                {coin.current_price}
                            </div>

                            <div className="basis-[20%]">
                                {coin.price_change_24h}
                            </div>

                            <div className="basis-[20%]">
                                {coin.market_cap}
                            </div>
                                
                        </div>
                    );
                })}
            <div className="flex justify-center items-center">
                <button 
                    disabled = {page === 1}
                    onClick={() => setPage(page - 1)}
                    className="btn btn-primary btn-wide text-white text-2xl"
                > 
                    Pre
                </button>
                <button 
                    onClick={()=> setPage(page + 1)}
                    className="btn btn-secondary btn-wide text-white text-2xl"
                >
                    Next
                </button>
            </div>
            </div>
    );
}

export default CoinTable;