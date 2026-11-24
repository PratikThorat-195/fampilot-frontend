
import {
    LayoutDashboard,
    Wallet,
    ChartNoAxesCombined,
    ShieldCheck,
    House,
    Landmark,
    TrendingUp,
    Building2,
    Sparkles,
    Bell,
    Search,
    Settings,
    PiggyBank,
    ShoppingCart,
    CreditCard,
    ArrowUpRight,
    ArrowDownRight,
    Menu
} from 'lucide-react'

const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Finance', icon: Wallet },
    { name: 'Expenses', icon: ChartNoAxesCombined },
    { name: 'Insurance', icon: ShieldCheck },
    { name: 'Home', icon: House },
    { name: 'Banking', icon: Landmark },
    { name: 'Investments', icon: TrendingUp },
    { name: 'Property', icon: Building2 },
    { name: 'AI Advisor', icon: Sparkles }
]

const transactions = [
    { name: 'Groceries', date: 'Today, 10:24 AM', amount: '-₹4,320', icon: ShoppingCart },
    { name: 'Health Insurance', date: 'Yesterday', amount: '-₹18,000', icon: ShieldCheck },
    { name: 'Mutual Fund SIP', date: '12 Nov, 09:00 AM', amount: '-₹5,000', icon: TrendingUp }
]

const summaryCards = [
    { title: 'Family Balance', value: '₹12,80,500', icon: Wallet },
    { title: 'Monthly Expenses', value: '₹68,420', icon: CreditCard },
    { title: 'Monthly Savings', value: '₹25,000', icon: PiggyBank }
]

function FamPilotDashboard() {

    return (
        <div className="
            w-full overflow-hidden rounded-2xl
            border border-[#49305F]
            bg-[#171020] text-white
            shadow-[0_25px_70px_-20px_rgba(65,25,100,0.45)]
        ">

            <div className="flex h-[540px] overflow-hidden">

                {/* Sidebar */}
                <aside className="
                    hidden w-[165px] shrink-0
                    border-r border-white/10
                    bg-[#1E142B] p-4 md:block
                ">

                    <div className="mb-9 flex items-center gap-2">
                        <div className="rounded-lg bg-purple-600 p-2">
                            <House size={19} />
                        </div>

                        <span className="text-base font-bold">
                            FamPilot
                        </span>
                    </div>

                    <p className="mb-3 text-[9px] font-semibold uppercase tracking-widest text-gray-500">
                        Workspace
                    </p>

                    <nav className="space-y-2">
                        {navigation.map((item, index) => {
                            const Icon = item.icon

                            return (
                                <div
                                    key={item.name}
                                    className={`
                                        flex items-center gap-2
                                        rounded-lg px-2 py-2.5
                                        text-[11px] transition
                                        ${index === 0
                                            ? 'bg-purple-700 text-white shadow-lg shadow-purple-900/30'
                                            : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                        }
                                    `}
                                >
                                    <Icon size={15} />
                                    {item.name}
                                </div>
                            )
                        })}
                    </nav>

                    <div className="mt-16 border-t border-white/10 pt-5">
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                            <Settings size={15} />
                            Settings
                        </div>
                    </div>

                </aside>

                {/* Main Dashboard */}
                <div className="min-w-0 flex-1 overflow-hidden p-3">

                    {/* Top Navigation */}
                    <div className="mb-6 flex items-center justify-between gap-2">

                        <div className="flex min-w-0 items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs text-gray-400">
                            <Search size={14} />
                            <span>Search...</span>
                        </div>

                        <div className="flex shrink-0 items-center gap-3 text-gray-400">
                            <Bell size={16} />

                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">
                                P
                            </div>

                            <span className="hidden text-xs sm:block">
                                Family Admin
                            </span>
                        </div>

                    </div>

                    {/* Dashboard Heading */}
                    <div className="mb-5">
                        <h2 className="text-lg font-bold sm:text-xl">
                            Family Overview
                        </h2>

                        <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">
                            Welcome to your family dashboard
                        </p>
                    </div>

                    {/* Summary Cards */}
                    <div className="grid grid-cols-2 gap-2 xl:grid-cols-3">

                        {summaryCards.map((item) => {
                            const Icon = item.icon

                            return (
                                <div
                                    key={item.title}
                                    className="
                                        rounded-xl border
                                        border-white/10
                                        bg-[#251A34] p-3
                                    "
                                >
                                    <Icon
                                        size={18}
                                        className="mb-3 text-purple-400"
                                    />

                                    <p className="text-[9px] text-gray-400 sm:text-[10px]">
                                        {item.title}
                                    </p>

                                    <p className="mt-1 text-sm font-bold sm:text-base">
                                        {item.value}
                                    </p>
                                </div>
                            )
                        })}

                    </div>

                    {/* Financial Growth Chart */}
                    <div className="
                        mt-4 rounded-xl border
                        border-white/10 bg-[#251A34] p-3 sm:p-4
                    ">

                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-sm font-semibold">
                                    Financial Growth
                                </h3>

                                <p className="mt-1 text-[9px] text-gray-400">
                                    Family financial overview
                                </p>
                            </div>

                            <span className="rounded-full bg-purple-600/20 px-3 py-1 text-[9px] text-purple-300">
                                1 Year
                            </span>
                        </div>

                        <div className="mt-3 h-24 w-full">

                            <svg
                                viewBox="0 0 600 150"
                                className="h-full w-full"
                                preserveAspectRatio="none"
                            >
                                <defs>
                                    <linearGradient
                                        id="growthFill"
                                        x1="0"
                                        x2="0"
                                        y1="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="#A855F7"
                                            stopOpacity=".4"
                                        />

                                        <stop
                                            offset="100%"
                                            stopColor="#A855F7"
                                            stopOpacity="0"
                                        />
                                    </linearGradient>
                                </defs>

                                {[30, 65, 100, 135].map(y => (
                                    <line
                                        key={y}
                                        x1="0"
                                        y1={y}
                                        x2="600"
                                        y2={y}
                                        stroke="white"
                                        strokeOpacity=".08"
                                        strokeDasharray="4 5"
                                    />
                                ))}

                                <path
                                    d="M0 120 C65 100 70 115 130 85 S210 105 275 65 S360 80 420 45 S510 55 600 10 L600 150 L0 150 Z"
                                    fill="url(#growthFill)"
                                />

                                <path
                                    d="M0 120 C65 100 70 115 130 85 S210 105 275 65 S360 80 420 45 S510 55 600 10"
                                    fill="none"
                                    stroke="#B56BFF"
                                    strokeWidth="3"
                                />

                                <circle
                                    cx="420"
                                    cy="45"
                                    r="5"
                                    fill="#FFFFFF"
                                    stroke="#B56BFF"
                                    strokeWidth="3"
                                />
                            </svg>

                        </div>

                        <div className="mt-2 flex justify-between text-[9px] text-gray-500">
                            {['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'].map(month => (
                                <span key={month}>{month}</span>
                            ))}
                        </div>

                    </div>

                    {/* Bottom Dashboard Cards */}
                    
                   

                </div>
            </div>
        </div>
    )
}

export default FamPilotDashboard
