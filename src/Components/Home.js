import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { addTask } from "./api";
import { loadData } from "./api";
export function Home()
{
    const [addModel,setAddModel]=useState(false);
    const [obj,setObj]=useState(
        {
            taskNo:"",
            plan:"",
            status:"",
            addedBy:""
        }
    )
    const[data,setData]=useState(null);
    const loadDashboard=async()=>
        {
            try
            {
                let response=await loadData(localStorage.getItem("email"));
                setData(response);
                // alert("Valled");
                console.log(response);
            }
            catch(error)
            {
                // alert("Error");
                console.error(error);
            }
        }
useEffect(()=>{

    loadDashboard();
}
,[])
useEffect(()=>
{
    console.log(obj);
},[obj]);


return(
    <div>
        {
            data?
            <div>
<div className="flex justify-end">
    <button className='cursor-pointer bg-purple-800 p-3 mt-2 mr-2 text-white rounded-md'
    onClick={()=>
        {
            setAddModel(addModel=>!addModel);
        }
    }
    >Add Task</button>
</div>
{ addModel?
<div className='bg-pink-300 w-full md:w-2/5
'>
    <div className="flex justify-between">
        <div>Add Task</div>
        <div className='bg-red-600 p-2 text-xl
        cursor-pointer
        '
        onClick={
            ()=>
                {
                    setAddModel(addModel=>!addModel);
                    setObj(prevObj=>
                        ({...prevObj,plan:""})
                    );
                }
        }
        >X</div>
    </div>
<div className ="flex justify-center">
    <form className="mt-2">
        <div className="mt-2 mb-2">
        <label className="mr-2">Task:</label>
        <input type="text" required
        value={obj.plan}
        onChange={
            (e)=>
                {
                    setObj({...obj,plan:e.target.value});
                    // console.log(obj);
                } 
            }  
            
        ></input>
        </div>
        <div className="flex justify-center">
            <button
            className="bg-purple-700 text-white p-3
            pl-6 pr-6 rounded-md"
            onClick={
                async (e)=>
                    {
                        e.preventDefault();

                        const updatedObj={...obj,taskNo:uuidv4(),addedBy:localStorage.getItem("email")};
                        setObj(updatedObj);
                        
                        // setObj({...obj,addedBy:uuidv4()})
                        try
                        {
                            let response=await addTask(updatedObj);
                            if(response==="Plan saved successfully")
                                {
                                    alert("Plan saved successfully");
                                    setObj(prevObj=>
                                        ({...prevObj,plan:""})
                                    );
                                    
                                }
                            else
                            {
                                alert("Any of the given field is empty");
                            }
                        }
                        catch(error)
                        {
                            console.error(error);
                        }
                    }
            }       
            > Add </button>
        </div>
    </form>
</div>
</div>:
<></>
}
<div>

</div>
</div>:
<div>Loading please wait</div>
        }
    </div>

    );
}