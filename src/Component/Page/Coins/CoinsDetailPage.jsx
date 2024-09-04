import {useParams} from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoinDetails } from "../../../services/fetchCoinDetails";

function CoinsDetailPage(){

    const {coinId} = useParams();

    const {data} = useQuery(["coins",coinId] , () => fetchCoinDetails(coinId),{
        retry : 2,
        cacheTime : 1000*60*2,
        staleTime : 1000*60*2,
    });

    console.log(data);
    return(
        <div> 
            <h1> Coins Details by their {coinId} </h1> 
            
        </div>
    );
}

export default CoinsDetailPage;