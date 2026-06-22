import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Home,
    PawPrint,
    ShoppingCart,
    ShoppingBag,
    Tag,
    Warehouse,
    Briefcase,
    Landmark,
    CircleDollarSign,
    Users,
    CreditCard,
    Receipt,
    Archive,
    Truck,
    BedDouble,
    ChefHat,
    BriefcaseBusiness,
    BookText,
    Ticket,
    Database,
    Box,
    BarChart2,
    ChevronRight,
    ChevronDown,
} from "lucide-react";

const MENU_ITEMS = [
    { label: "Home", icon: Home, path: "/home" },
    { label: "Zra", icon: PawPrint, sub: [] },
    { label: "Sales", icon: ShoppingCart, sub: [] },
    { label: "Purchases", icon: ShoppingBag, sub: [] },
    { label: "Products", icon: Tag, sub: [] },
    { label: "Warehouses", icon: Warehouse, sub: [] },
    { label: "Projects", icon: Briefcase, sub: [] },
    { label: "Banking", icon: Landmark, sub: [] },
    {
        label: "Loans",
        icon: CircleDollarSign,
        sub: ["Loans", "Repayment", "Loan Type", "Loan Customer", "Create Invoice"],
    },
    { label: "Users", icon: Users, sub: [] },
    { label: "Payroll", icon: CreditCard, sub: [] },
    { label: "Expenses", icon: Receipt },
    { label: "Budget", icon: Archive },
    { label: "Procurement", icon: Truck, sub: [] },
    { label: "Hotel", icon: BedDouble, sub: [] },
    { label: "kitchen", icon: ChefHat, sub: [] },
    { label: "Fixed Asset", icon: BriefcaseBusiness, sub: [] },
    { label: "General Ledger", icon: BookText, sub: [] },
    { label: "Ticket", icon: Ticket, sub: [] },
    { label: "Administrator", icon: Database, sub: [] },
    { label: "production", icon: Box, sub: [] },
    { label: "Reports", icon: BarChart2 },
];

function Sidebar({ open = true }) {
    const [openItem, setOpenItem] = useState("Home");
    const navigate = useNavigate();

    const toggleItem = (label) => {
        setOpenItem((current) => (current === label ? null : label));
    };

    const handleItemClick = (item) => {
        if (item.path) {
            setOpenItem(item.label);
            navigate(item.path);
            return;
        }
        toggleItem(item.label);
    };

    return (
        <aside
            className={`${open ? "w-56" : "w-14"} bg-[#eef1f6] dark:bg-gray-900 h-full overflow-hidden transition-[width] duration-200 ease-in-out shrink-0`}
        >
            <nav className="py-2 w-56">
                {MENU_ITEMS.map((item) => {
                    const { label, icon: Icon, sub } = item;
                    const isOpen = openItem === label;
                    const hasSub = sub && sub.length > 0;
                    return (
                        <div key={label}>
                            <button
                                type="button"
                                onClick={() => handleItemClick(item)}
                                title={open ? undefined : label}
                                className={`mx-2 h-9 flex items-center gap-3 px-3 rounded-lg overflow-hidden transition-colors duration-200 ${
                                    isOpen
                                        ? "bg-[#397db9]! text-white!"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                                }`}
                                style={{ width: "calc(100% - 1rem)" }}
                            >
                                <Icon size={18} className="shrink-0" />
                                <span
                                    className={`whitespace-nowrap transition-all duration-200 ease-in-out overflow-hidden ${
                                        open ? "max-w-[140px] opacity-100" : "max-w-0 opacity-0"
                                    }`}
                                >
                                    {label}
                                </span>
                                <span
                                    className={`ml-auto shrink-0 transition-opacity duration-150 ${
                                        open && hasSub ? "opacity-100" : "opacity-0"
                                    }`}
                                >
                                    {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                </span>
                            </button>

                            {open && isOpen && hasSub && (
                                <div className="pb-2">
                                    {sub.map((subItem) => (
                                        <button
                                            key={subItem}
                                            type="button"
                                            className="w-full h-9 flex items-center text-left pl-12 pr-4 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
                                        >
                                            {subItem}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>
        </aside>
    );
}

export default Sidebar;
