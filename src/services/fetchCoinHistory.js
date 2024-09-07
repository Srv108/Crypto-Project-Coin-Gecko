import axiosInstance from "../helpers/axiosInstance";

export async function fecthCoinHistory(id,currency,days,interval){
    console.log("calling",id.coinId);
    try{
        const response = await axiosInstance.get(`/coins/${id.coinId}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`);
        console.log(response.data);
        return response.data;
    }catch(error){
        console.log(error);
        return null;
    }
}

