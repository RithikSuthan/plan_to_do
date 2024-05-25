import plan from "./Images/Plan To Do_transparent.png"
function Header()
{
    return(
        <div className="font-sans bg-slate-600">
            <img src={plan} className="h-20 w-20 m-0 p-0" alt="layout"/>
        </div>
    );
}
export default Header;