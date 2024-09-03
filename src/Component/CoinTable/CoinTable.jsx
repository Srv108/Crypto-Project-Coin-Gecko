import { useEffect } from "react";
import { fecthCoinData } from "../../services/fetchCoinData";
import {useQuery} from "react-query";
import currencyStore from "../../zustand/state"


function CoinTable(){   

    // implementing infinite scrolling


    const {items, isLoading, setItems, page, setPage, currency, setisLoading, setErrors } = currencyStore();

    useQuery(['coins',page,currency],() => fecthCoinData(page,currency),{
        // retry : 2,
        // retryDelay : 1000,
        cacheTime : 1000*60*2,
        staleTime : 1000*60*2,
        onSuccess: (newData) => {
            console.log("Fetched data:", newData);
            setItems(newData);
        },
        
        onError: (err) => {
            setErrors(err.message);
        },
        onSettled: () => {
            setisLoading(false);
        }
    });


    // console.log(items);

    useEffect(() => {
        if(isLoading) return;
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            console.log("Triggered Scroll for more data");
            setPage(page + 1);
            setisLoading(true);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);
    

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

                {items.map((coin) => {
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
                {isLoading && <div> Loading... </div>}
            </div>
    );
}

export default CoinTable;