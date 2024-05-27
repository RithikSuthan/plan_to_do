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
export const loadData=async(email)=>
    {
        try
        {
            let response=await apiClient.get(`/fetch?email=${email}`)
            return response.data;
        }
        catch(error)
        {
            console.error(error);
        }
    }
export const deletePlan=async(taskNo)=>
    {
        try
        {
            let response=await apiClient.delete(`/delete?taskNo=${taskNo}`)
            return response.data;
        }
        catch(error)
        {
            console.error(error);
        }
    }
export const editPlan=async(taskNo,plan)=>
    {
        console.log(taskNo," ",plan);
        try
        {
            let response=await apiClient.patch(`/edit?taskNo=${taskNo}&plan=${plan}`)
            return response.data;
        }
        catch(error)
        {
            console.error(error);
        }
    }
export const editStatus=async(taskNo)=>
    {
        console.log("gfgf");
        try
        {
            let response=await apiClient.patch(`/status?taskNo=${taskNo}`);
            return response.data;
        }
        catch(error)
        {
            console.error(error);
        }
    }
