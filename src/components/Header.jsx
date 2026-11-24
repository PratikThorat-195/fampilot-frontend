
import fampilotLogo from "../assets/fampilot-logo.png"
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header className="
            sticky top-0 z-50 w-full
            border-b border-gray-100
            bg-white/95 backdrop-blur-md
        ">
            <div className="
                mx-auto flex h-[76px] max-w-[1440px]
                items-center justify-between
                px-5 sm:px-8 lg:px-12
            ">

                {/* Logo */}
                <a href="#home" className="flex shrink-0 items-center">
                    <img
                        src={fampilotLogo}
                        alt="FamPilot"
                        className="h-14 w-auto object-contain"
                    />
                </a>

                {/* Navigation */}
                <nav className="hidden items-center gap-9 md:flex">

                    <a href="#home"
                       className="text-sm font-semibold text-[#7025C7] hover:text-purple-800">
                        Home
                    </a>

                    <a href="#services"
                       className="text-sm font-medium text-gray-700 transition hover:text-[#7025C7]">
                        Services
                    </a>

                    <a href="#why-fampilot"
                       className="text-sm font-medium text-gray-700 transition hover:text-[#7025C7]">
                        About
                    </a>

                    <a href="#contact"
                       className="text-sm font-medium text-gray-700 transition hover:text-[#7025C7]">
                        Contact
                    </a>

                </nav>

                {/* Authentication Actions */}
                <div className="flex items-center gap-3">

                    <Link
                        to="/login"
                        className="rounded-lg border border-purple-200 px-5 py-2.5 text-sm font-semibold text-[#7025C7] transition hover:bg-purple-50"
                        >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="rounded-lg bg-[#7025C7] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5D1DA8]"
                        >
                        Sign Up
                    </Link>

                </div>

            </div>
        </header>
    )
}

export default Header
