import { useState,useEffect } from "react";
import eye from "./Images/eye.png";
import hidden from "./Images/hidden.png";
import { useNavigate } from 'react-router-dom';
import { login } from "./api";
function Login ()
{
    
    let [obj,setObj]=useState(
        {
            email:"",
            password:""
        }
    );
    const checkLocal=()=>
        {
            let val=localStorage.getItem("email");
            if(val!==null)
                {
                    navigate("/home");
                }
        }
    useEffect(()=>{

            checkLocal();
        }
        ,[])
    const navigate=useNavigate();
    let [showPassword,setshowPassword]=useState(false);
    return(
        <div className="bg-pink-200 w-4/5 rounded-2xl p-5" style={{marginTop:"5%",margin:"10%"}}>
            <div className="flex justify-between">
            <div className='font-sans font-bold text-purple-900 items-center flex'>
            Plan To Do
            </div>
            <div className='cursor-pointer bg-purple-800 p-2 text-white rounded-xl' onClick={
                (e)=>
                    {
                        // console.log(e);
                        navigate('/register');
                    }
            }>
                Sign Up
            </div>
            </div>
            <div className='font-bold text-center text-3xl font-sans'>
                Login
            </div>
            <form>
                <div>
                <label className='font-bold'>
                    Email
                </label><br></br>
                <input type="text" required
                className='mt-2 bg-pink-400 p-2 text-white placeholder:text-white'
                placeholder="Email ID" 
                value={obj.email} onChange={(e)=>
                    {
                        setObj({...obj,email:e.target.value});
                    }
                }
                ></input>
                </div>
                <div className='mt-1'>
                <label className='font-bold'>
                    Password
                </label><br></br>
                <div className="flex items-center">
                <input type={showPassword?"text":"password"} required
                className='mt-2 bg-pink-400 p-2 text-white placeholder:text-white'
                placeholder="Password" onChange={(e)=>{
                        setObj({...obj,password:e.target.value})
                    }
                }></input>
              {
                    !showPassword?
                    <img src={hidden} className='h-6 w-6 cursor-pointer' onClick={
                        ()=>
                            {
                                setshowPassword(
                                showPassword=>!showPassword
                            )
                            }
                    } alt="visible"></img>
                    :
                    <img src={eye} className='h-6 w-6 cursor-pointer' onClick={
                        ()=>{
                         setshowPassword(
                                showPassword=>!showPassword
                                
                            )
                        }
                    } alt="hidden"></img>
                
              }
                </div>
                </div>
                    <div className="mt-3 flex flex-row justify-between
                    w-3/5
                    ">
                    <span className='font-bold'
                    ><input type="checkbox"></input>Remember me</span>
                    <span className='text-purple-600 cursor-pointer
                    font-bold
                    '>
                        Forgot Password?</span>
                    </div>
                <div className='mt-3 bg-purple-700 w-2/5 text-white text-center p-2 cursor-pointer' onClick={
                    async ()=>
                        {
                            try
                            {
                                let response=await login(obj);
                                if(response==="User exist")
                                    {
                                        alert("Login Success");
                                        localStorage.setItem("email",obj.email);
                                        console.log(obj);
                                        navigate("/home");
                                    }
                                else
                                {
                                    alert("User doesn't exist register please");
                                }
                            }
                            catch(error)
                            {
                                console.log(error);
                            }
                        }
                }>
                        Login
                </div>
                
            </form>
        </div>
    );
}
export default Login;