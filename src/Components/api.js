import axios from 'axios';

const apiClient=axios.create(
    {
        baseURL:process.env.REACT_APP_PLAN_TO_DO_SERVICE
    }
)

export const register=async (obj)=>
    {
        try{
            console.log(obj);
            let response=await apiClient.post(`/register`,obj);
            return response.data;
        }
        catch(error)
        {
            console.error(error);
        }
    }
