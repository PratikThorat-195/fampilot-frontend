
// import Register from './Register'
import ServicesSection from '../components/ServicesSection'
import FamPilotDashboard from '../components/FampilotDashboard'
import HowItWorksSection from '../components/HowItWorksSection';
import AIAdvisorSection from '../components/AIAdvisorSection';
import SecuritySection from '../components/SecuritySection';
import WhyFamPilotSection from '../components/WhyFamPilotSection';
import FinalCTASection from '../components/FinalCTASection';
import Footer from '../components/Footer';
function Home() {
    return (
        <main className="min-h-screen bg-[#F3F4FC]">

            

            <section
                        id="home"
                        className="bg-white px-6 py-6 lg:px-10"
            >
                        <div className="
                            mx-auto grid max-w-[1536px]
                            grid-cols-1 items-center gap-8
                            lg:min-h-[590px]
                            lg:grid-cols-[0.72fr_1.55fr]
                            lg:gap-7
                        ">

                    {/* LEFT CONTENT */}
                    <div className="max-w-[440px]">

                        <span className="
                            inline-flex items-center gap-2
                            rounded-full bg-purple-50
                            px-4 py-2
                            text-xs font-bold tracking-wide
                            text-[#7025C7]
                        ">
                            ✦ AI-POWERED FAMILY MANAGEMENT
                        </span>

                        <h1 className="
                            mt-7 text-4xl font-extrabold
                            leading-[1.12] tracking-tight
                            text-[#21132F]
                            sm:text-5xl xl:text-[58px]
                        ">
                            Your Family.
                            <span className="block">Your Future.</span>
                            <span className="block text-[#7025C7]">
                                One Place.
                            </span>
                        </h1>

                        <p className="
                            mt-5 max-w-[420px]
                            text-[15px] leading-7
                            text-[#625B6D]
                        ">
                            Manage your family's finances, expenses,
                            insurance, investments and household needs
                            through one secure and intelligent platform.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">

                            <a
                                href="/register"
                                className="
                                    rounded-xl bg-[#7025C7]
                                    px-6 py-3
                                    text-sm font-semibold text-white
                                    shadow-md shadow-purple-200
                                    transition hover:bg-[#5B19A8]
                                "
                            >
                                Get Started Free →
                            </a>

                            <a
                                href="#how-it-works"
                                className="
                                    rounded-xl border border-[#7025C7]
                                    px-5 py-3
                                    text-sm font-semibold text-[#7025C7]
                                    transition hover:bg-purple-50
                                "
                            >
                                ▶ See How It Works
                            </a>

                        </div>
                    </div>

                    {/* RIGHT DASHBOARD */}
                    <div className="w-full min-w-0">
                        <FamPilotDashboard />
                    </div>

                </div>
            </section>

            {/* Services Section */}
            
            <ServicesSection></ServicesSection>
            
            {/* 3. How It Works */}
            <HowItWorksSection />

            {/* 4. AI Family Advisor */}
            <AIAdvisorSection />

            {/* 5. Security and Privacy */}
            <SecuritySection />

            {/* 6. Why FamPilot */}
            <WhyFamPilotSection />

            {/* 7. Final Call to Action */}
            <FinalCTASection />

            {/* 8. Footer */}
            <Footer />

        </main>
    )
}

export default Home
