import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinDetails(id){
    try{
        const response = await axiosInstance.get(`/coins/${id}`);
        console.log("Coins Data is ",response.data);
        return response.data;
    }catch(error){
        console.log(error);
        return null;
    }
}


