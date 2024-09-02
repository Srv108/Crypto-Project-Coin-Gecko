import { Children } from "react";
import axiosInstance from "../helpers/axiosInstance";

export async function fecthCoinData(page,currency = 'usd'){
    const perpage = 10;
    try{
        const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perpage}&page=${page}`);
        console.log(response.data);
        return response.data;
    }catch(error){
        console.log(error);
        return null;
    }
}

