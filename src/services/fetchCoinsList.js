import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinsList(){
    try{
        const response = await axiosInstance.get(`/coins/list`);
        console.log(response.data);
        return response.data;
    }catch(error){
        console.log(error);
        return null;
    }
}
