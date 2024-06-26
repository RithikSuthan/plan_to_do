import { useState } from "react";
import eye from "./Images/eye.png";
import hidden from "./Images/hidden.png";
import { useNavigate } from "react-router-dom";
import { register } from "./api";
function Register()
{
    const navigate=useNavigate();
    let [showPassword,setshowPassword]=useState(false);
    let[confirmPassword,setConfirm]=useState(false);
    let [obj,setObj]=useState(
        {
            email:"",
            password:""
        }
    )
    return(
        <div className="bg-pink-200 w-4/5 rounded-2xl p-5" style={{marginTop:"5%",margin:"10%"}}>
            <div className="flex justify-between">
            <div className='font-sans font-bold text-purple-900 items-center flex'>
            Plan To Do
            </div>
            <div className='bg-purple-800 p-2 text-white rounded-xl
            cursor-pointer
            ' onClick={()=>
                {
                    navigate('/');
                }
            }>
                Sign In
            </div>
            </div>
            <div className='font-bold text-center text-3xl font-sans'>
                Register
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
                } value={obj.password}></input>
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
                <div className='mt-1'>
                <label className='font-bold'>
                    Confirm Password
                </label><br></br>
                <div className="flex items-center">
                <input type={confirmPassword?"text":"password"} required
                className='mt-2 bg-pink-400 p-2 text-white placeholder:text-white'
                placeholder="Confirm Password" onBlur={(e)=>{
                        const inputVal=e.target.value;
                        if(inputVal!==obj.password)
                            {
                                alert("password Dont match");   
                            }
                    }
                }></input>
              {
                    !confirmPassword?
                    <img src={hidden} className='h-6 w-6 cursor-pointer' onClick={
                        ()=>
                            {
                                setConfirm(
                                    confirmPassword=>!confirmPassword
                                )
                            }
                    } alt="visible"></img>
                    :
                    <img src={eye} className='h-6 w-6 cursor-pointer' onClick={
                        ()=>{
                            setConfirm
                            (
                                confirmPassword=>!confirmPassword
                            )
                        }
                    } alt="hidden"></img>
                
              }
                </div>
                </div>
                <div className='mt-4 bg-purple-700 w-2/5 text-white text-center p-2 cursor-pointer' onClick={
                    async ()=>
                        {
                           try
                           {
                            const response=await register(obj);
                            if(response==="Email or password is empty")
                                {
                                    alert("Email or password is empty");
                                }
                            else
                            {
                                alert("Registration Successful");
                                navigate("/");
                            }
                           }
                           catch(error)
                           {
                            console.error("error");
                           }
                                                
                        }
                }>
                        Register
                </div>
                
            </form>
        </div>
    );
}
export default Register;