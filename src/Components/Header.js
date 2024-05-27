import plan from "./Images/Plan To Do_transparent.png"
import { useNavigate } from "react-router-dom";
function Header()
{
    const navigate=useNavigate();
    return(
        <div className="font-sans bg-slate-600 flex justify-between items-center">
            <img src={plan} className="h-20 w-20 m-0 p-0" alt="layout"/>
            <div>
            <button className='cursor-pointer bg-purple-800 p-3 mt-2 mr-2 text-white rounded-md'
                onClick={()=>
                    {
                       localStorage.removeItem("email");
                        navigate("/");
                    }
                }
                >Sign Out</button>
            </div>
        </div>
    );
}
export default Header;