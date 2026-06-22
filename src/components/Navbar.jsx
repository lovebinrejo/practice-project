import {
    Menu,
    BarChart3,
    Briefcase,
    Atom,
    Settings,
    CalendarDays,
    Grid3x3,
    Moon,
    Sun,
    Bell,
    History,
} from "lucide-react";
import logo from "../assets/Ecuenta_logo_png.png";
import { useTheme } from "../context/ThemeContext";

function IconButton({ children, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="relative w-9 h-9 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-white"
        >
            {children}
        </button>
    );
}

function Badge({ count, color }) {
    return (
        <span
            className={`absolute -top-1 -right-1 min-w-[16px] h-4 px-1 rounded-full text-[10px] leading-4 text-white text-center ${color}`}
        >
            {count}
        </span>
    );
}

function Navbar({ onToggleSidebar }) {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="flex items-center justify-between h-14 px-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
                <img src={logo} alt="Ecuenta" className="h-8 w-auto" />
                <button
                    type="button"
                    onClick={onToggleSidebar}
                    className="relative w-9 h-9 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-white"
                >
                    <Menu size={20} />
                </button>
            </div>

            <div className="flex items-center gap-1">
                <IconButton>
                    <BarChart3 size={19} />
                </IconButton>
                <IconButton>
                    <Briefcase size={19} />
                </IconButton>
                <IconButton>
                    <Atom size={19} />
                </IconButton>
                <IconButton>
                    <Settings size={19} />
                </IconButton>
                <IconButton>
                    <CalendarDays size={19} />
                    <Badge count={22} color="bg-blue-500" />
                </IconButton>
                <IconButton>
                    <Grid3x3 size={19} />
                </IconButton>
                <IconButton onClick={toggleTheme}>
                    {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
                </IconButton>
                <IconButton>
                    <Bell size={19} />
                    <Badge count={6} color="bg-red-500" />
                </IconButton>
                <IconButton>
                    <History size={19} />
                </IconButton>
                <button
                    type="button"
                    className="ml-2 w-9 h-9 rounded-full bg-teal-500 text-white text-sm font-semibold flex items-center justify-center"
                >
                    VA
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
