import axios from 'axios';

const apiClient=axios.create(
    {
        baseURL:process.env.REACT_APP_PLAN_TO_DO_SERVICE
    }
)

export const register=async (obj)=>
    {
        try{
            let response=await apiClient.post(`/register`,obj);
            return response.data;
        }
        catch(error)
        {
            console.error(error);
        }
    }

export const login=async (obj)=>
    {
        try
        {
            let response =await apiClient.post("/login",obj);
            return response.data;
        }
        catch(error)
        {
            console.error(error);
        }
    }

export const addTask=async (obj)=>
    {
        try
        {
            let response=await apiClient.post("/add",obj);
            return response.data;
        }
        catch(error)
        {
            console.error(error);
        }
    }
