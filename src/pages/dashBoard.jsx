import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HomeOverview from "../components/HomeOverview";
function Dashboard()
{
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const logout=()=>{
        localStorage.removeItem("user");
        navigate('/');
    }
    const stored = localStorage.getItem("user");
    let user;
    try {
        user = stored ? JSON.parse(stored) : null;
    } catch {
        user = null;
    }
    return(
        <div className="h-screen flex flex-col overflow-hidden">
        <Navbar onToggleSidebar={() => setSidebarOpen((o) => !o)} />
        <div className="flex flex-1 overflow-hidden">
        <Sidebar open={sidebarOpen} />
        <div className="flex-1 overflow-y-auto p-6 bg-white dark:bg-gray-950">
            <div className="flex justify-end mb-2">
                <button onClick={logout} className="px-3 py-1.5 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                    Logout
                </button>
            </div>
            <HomeOverview username={user?.username || "User"} />
        </div>
        </div>
        </div>
    )
}
export default Dashboard;