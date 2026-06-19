import { Navigate } from "react-router-dom";

function ProtectRoute({
    children
})
{
    const user =localStorage.getItem("user");
    if(!user)
    {
    return user?children: <Navigate to="/" />
    }
    return children;
    
}
export default ProtectRoute;