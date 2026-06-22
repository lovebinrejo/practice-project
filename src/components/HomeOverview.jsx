import { Store, Landmark, TrendingUp, TrendingDown } from "lucide-react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    ComposedChart,
    Bar,
    Area,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
} from "recharts";
import { useState } from "react";

const TODAY_STATS = [
    { label: "Today's Invoices", value: "5" },
    { label: "Today's sales Amount", value: "78,620.00 ZMW" },
    { label: "Today's Refund", value: "0.00 ZMW" },
    { label: "Today's Purchase", value: "2" },
    { label: "Today's Purchase Amount", value: "720.00 ZMW" },
];

const ZRA_STATS = [
    { label: "ZRA Signed Invoices", value: "29", lastYear: "0", change: 29, up: true },
    { label: "ZRA Total Sale", value: "6,837,962.00 ZMW", lastYear: "0.00 ZMW", change: 6837961.8, up: true },
    { label: "ZRA Sale Tax", value: "228,844.00 ZMW", lastYear: "0.00 ZMW", change: 228843, up: true },
    { label: "Sales Orders", value: "37", lastYear: "0", change: 37, up: true },
    { label: "Contract", value: "21", lastYear: "0", change: 21, up: true },
    { label: "Shipment", value: "4", lastYear: "0", change: 4, up: true },
];

const BANKS = [
    { name: "90988", change: -0, amount: "-63,590.00 ZMW", up: false },
    { name: "007", change: 11, amount: "2,616,610.00 ZMW", up: true },
    { name: "AA_Bank", change: -0, amount: "-9,824.00 ZMW", up: false },
    { name: "BANK-001", change: -1, amount: "-204,488.00 ZMW", up: false },
    { name: "ad", change: 0, amount: "0.00 ZMW", up: true },
];

const SALES_DONUT = [
    { name: "Sales Orders", value: 37 },
    { name: "Quotations", value: 49 },
    { name: "Contract", value: 21 },
    { name: "Remaining", value: 191 - 37 - 49 - 21 },
];
const DONUT_COLORS = ["#3b82f6", "#60a5fa", "#93c5fd", "#1f2937"];

const ANALYTICS_DATA = [
    { month: "Jan", income: 0, sales: 0, salesOrder: 0, customers: 0 },
    { month: "Feb", income: 0, sales: 0, salesOrder: 0, customers: 0 },
    { month: "Mar", income: 0, sales: 0, salesOrder: 26, customers: 10 },
    { month: "Apr", income: 0, sales: 0, salesOrder: 47, customers: 22 },
    { month: "May", income: 0, sales: 0, salesOrder: 38, customers: 30 },
    { month: "Jun", income: 0, sales: 0, salesOrder: 51, customers: 18 },
    { month: "Jul", income: 0, sales: 0, salesOrder: 0, customers: 2 },
    { month: "Aug", income: 0, sales: 0, salesOrder: 0, customers: 0 },
    { month: "Sep", income: 0, sales: 0, salesOrder: 0, customers: 0 },
    { month: "Oct", income: 0, sales: 0, salesOrder: 0, customers: 0 },
    { month: "Nov", income: 0, sales: 0, salesOrder: 0, customers: 0 },
    { month: "Dec", income: 0, sales: 0, salesOrder: 0, customers: 0 },
];

function Card({ children, className = "" }) {
    return (
        <div className={`bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 ${className}`}>
            {children}
        </div>
    );
}

function ChangeTag({ change, up }) {
    const Icon = up ? TrendingUp : TrendingDown;
    return (
        <span className={`inline-flex items-center gap-0.5 text-xs ${up ? "text-green-500" : "text-red-500"}`}>
            <Icon size={12} />
            {Math.abs(change)}%
        </span>
    );
}

function HomeOverview({ username }) {
    const [tab, setTab] = useState("Sales");

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 bg-gradient-to-br from-[#1e3a8a] to-[#1e293b] text-white rounded-xl p-6 flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold">Good Morning, {username}!</h2>
                            <p className="text-blue-200 text-sm mt-1">Here&apos;s what&apos;s happening with your store today</p>
                            <div className="flex flex-wrap gap-8 mt-6">
                                {TODAY_STATS.map((s) => (
                                    <div key={s.label}>
                                        <p className="text-blue-300 text-xs">{s.label}</p>
                                        <p className="text-lg font-semibold mt-1">{s.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Store size={72} className="text-blue-300 hidden md:block shrink-0" />
                    </div>

                    <Card>
                        <div className="grid grid-cols-3 divide-x divide-y divide-gray-200 dark:divide-gray-800 [&>*:nth-child(-n+3)]:pb-3 [&>*:nth-child(n+4)]:pt-3">
                            {ZRA_STATS.map((s, i) => (
                                <div key={s.label} className={i % 3 === 0 ? "pr-3" : "px-3"}>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{s.label}</p>
                                    <p className="font-semibold dark:text-white!">{s.value}</p>
                                    <p className="text-[11px] text-gray-400">
                                        Last Year {s.lastYear} <ChangeTag change={s.change} up={s.up} />
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <Card className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            {["Sales", "Purchase"].map((t) => (
                                <button
                                    key={t}
                                    type="button"
                                    onClick={() => setTab(t)}
                                    className={`px-3 py-1.5 rounded-md text-sm ${
                                        tab === t
                                            ? "bg-[#397db9]! text-white!"
                                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                                    }`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-col gap-6 items-center">
                            <div className="w-40 h-40 relative shrink-0">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie data={SALES_DONUT} dataKey="value" innerRadius={50} outerRadius={68} paddingAngle={2}>
                                            {SALES_DONUT.map((entry, i) => (
                                                <Cell key={entry.name} fill={DONUT_COLORS[i % DONUT_COLORS.length]} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Total {tab}</p>
                                    <p className="text-2xl font-bold dark:text-white!">191</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 w-full text-center">
                                <div>
                                    <p className="text-xl font-bold dark:text-white!">37</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Total {tab} Orders</p>
                                </div>
                                <div>
                                    <p className="text-xl font-bold dark:text-white!">49</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Total Quotations</p>
                                </div>
                                <div>
                                    <p className="text-xl font-bold dark:text-white!">21</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Total Contract</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 space-y-2 text-sm">
                            {[
                                ["Total Sale Amount", "7,241,376.53 ZMW"],
                                ["Paid Amount", "2,980,024.28 ZMW"],
                                ["Balance Amount", "4,261,352.25 ZMW"],
                                ["Total Refund", "-14,820.00 ZMW"],
                            ].map(([label, value]) => (
                                <div key={label} className="flex justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">{label}</span>
                                    <span className="dark:text-white!">{value}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="md:col-span-3">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                            <div>
                                <h3 className="font-semibold dark:text-white!">Sales Analytics</h3>
                                <p className="text-xs text-gray-400">Jan 01, 2026 - Jan 01, 2027</p>
                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <p className="text-base font-bold dark:text-white!">7,226,556.00 ZMW</p>
                                    <p className="text-xs text-gray-400">Income</p>
                                </div>
                                <div>
                                    <p className="text-base font-bold dark:text-white!">157</p>
                                    <p className="text-xs text-gray-400">Sales</p>
                                </div>
                                <div>
                                    <p className="text-base font-bold dark:text-white!">35</p>
                                    <p className="text-xs text-gray-400">Customers</p>
                                </div>
                            </div>
                        </div>

                        <ResponsiveContainer width="100%" height={260}>
                            <ComposedChart data={ANALYTICS_DATA}>
                                <defs>
                                    <linearGradient id="customersFill" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#22c55e" stopOpacity={0.5} />
                                        <stop offset="100%" stopColor="#22c55e" stopOpacity={0.05} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#33415555" vertical={false} />
                                <XAxis dataKey="month" stroke="#888" fontSize={11} />
                                <YAxis yAxisId="left" stroke="#888" fontSize={11} />
                                <YAxis yAxisId="right" orientation="right" stroke="#888" fontSize={11} />
                                <Tooltip />
                                <Legend wrapperStyle={{ fontSize: 12 }} />
                                <Bar yAxisId="right" dataKey="salesOrder" name="Sales Order" fill="#93c5fd" radius={[4, 4, 0, 0]} barSize={20} />
                                <Area yAxisId="right" type="monotone" dataKey="customers" name="Customers" stroke="#22c55e" fill="url(#customersFill)" strokeWidth={2} />
                                <Line yAxisId="left" type="monotone" dataKey="income" name="Income" stroke="#e5e7eb" strokeWidth={1.5} dot={false} />
                                <Line yAxisId="right" type="monotone" dataKey="sales" name="Sales" stroke="#3b82f6" strokeWidth={1.5} dot={false} />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </Card>
                </div>
            </div>

            <Card className="self-start">
                <h3 className="font-semibold mb-3 dark:text-white!">Bank Details</h3>
                <div className="space-y-3">
                    {BANKS.map((b) => (
                        <div key={b.name}>
                            <div className="flex items-center justify-between text-sm mb-1">
                                <span className="flex items-center gap-2 dark:text-white!">
                                    <Landmark size={14} className="text-gray-400" />
                                    {b.name}
                                </span>
                                <ChangeTag change={b.change} up={b.up} />
                            </div>
                            <p className="text-xs text-gray-400 mb-1">{b.amount}</p>
                            <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                <div
                                    className={`h-full ${b.up ? "bg-green-500" : "bg-red-500"}`}
                                    style={{ width: `${Math.min(Math.abs(b.change) * 4 + 10, 100)}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}

export default HomeOverview;
