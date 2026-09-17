import fampilotLogo from "../assets/fampilot-logo.png"

function Header() {
    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/20 bg-white/10 backdrop-blur-md">
            <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-8">

                {/* Logo */}
                <div className="flex flex-col">
                     {/* Logo */}
                <div className="flex flex-col">
                    <img
                        src={fampilotLogo}
                        alt="FamPilot logo"
                        className="h-15 w-auto object-contain mb-[-12px]"
                    />
                </div>

                    <p className="mt-0 text-[10px] font-medium tracking-wide text-gray-500">
                        Together for a Brighter Tomorrow
                    </p>
                </div>

                {/* Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    <a
                        href="#"
                        className="text-sm font-medium text-gray-700 transition hover:text-purple-700"
                    >
                        Home
                    </a>

                    <a
                        href="#"
                        className="text-sm font-medium text-gray-700 transition hover:text-purple-700"
                    >
                        Features
                    </a>

                    <a
                        href="#"
                        className="text-sm font-medium text-gray-700 transition hover:text-purple-700"
                    >
                        About
                    </a>

                    <a
                        href="#"
                        className="text-sm font-medium text-gray-700 transition hover:text-purple-700"
                    >
                        Contact
                    </a>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        className="rounded-lg border border-purple-700 px-4 py-2 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
                    >
                        Sign In
                    </button>

                    <button
                        type="button"
                        className="rounded-lg bg-purple-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-800"
                    >
                        Get Started
                    </button>
                </div>

            </div>
        </header>
    )
}

export default Header