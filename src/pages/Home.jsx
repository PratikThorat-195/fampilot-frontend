
import Register from './Register'
import ServicesSection from '../components/ServicesSection'

function Home() {
    return (
        <main className="min-h-screen bg-[#F3F4FC]">

            <section
                id="home"
                className="min-h-[calc(100svh-76px)] pt-[76px]"
            >
                <div className="
                    mx-auto grid max-w-[1440px]
                    grid-cols-1 lg:grid-cols-2
                    items-center
                    gap-8 lg:gap-12
                    px-5 sm:px-8 lg:px-12
                    py-6 lg:py-5
                    lg:min-h-[calc(100svh-76px)]
                ">

                    {/* LEFT PANEL */}
                    <div className="
                        flex h-full flex-col justify-center
                        rounded-2xl bg-[#E9EAFE]
                        px-7 py-10 sm:px-12 lg:px-14
                    ">

                        <div className="mb-5">
                            <span className="text-xl font-bold tracking-tight text-[#302344]">
                                FamPilot
                            </span>

                            <p className="mt-1 text-xs text-[#77718A]">
                                Together for a Brighter Tomorrow
                            </p>
                        </div>

                        <span className="
                            mb-5 w-fit rounded-full
                            bg-white/80 px-4 py-2
                            text-xs font-semibold
                            text-[#6654A5]
                        ">
                            YOUR FAMILY, OUR PRIORITY
                        </span>

                        <h1 className="
                            text-4xl font-bold leading-tight
                            tracking-tight text-[#292631]
                            sm:text-5xl xl:text-6xl
                        ">
                            Everything your family needs.

                            <span className="block text-[#6654A5]">
                                All in one place.
                            </span>
                        </h1>

                        <p className="
                            mt-6 max-w-lg
                            text-sm leading-7
                            text-[#716D7C] sm:text-base
                        ">
                            Manage your family's finances, insurance,
                            investments and everyday responsibilities
                            through one secure and intelligent platform.
                        </p>

                        <div className="mt-8 space-y-4">

                            {[
                                'Organize your family finances',
                                'Manage insurance and investments',
                                'Simplify everyday household responsibilities',
                                'Get intelligent insights with AI assistance'
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <span className="
                                        flex h-6 w-6 shrink-0
                                        items-center justify-center
                                        rounded-full bg-white
                                        text-xs font-bold text-[#6654A5]
                                    ">
                                        ✓
                                    </span>

                                    <span className="text-sm text-[#514D5B]">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                        <p className="
                            mt-10 border-t border-[#DAD8EB]
                            pt-5 text-xs font-medium
                            tracking-wide text-[#6654A5]
                        ">
                            Together for a Brighter Tomorrow.
                        </p>

                    </div>

                    {/* RIGHT PANEL: REGISTRATION */}
                    <div className="
                        flex w-full items-center justify-center
                        lg:px-4
                    ">
                        <div className="w-full max-w-[470px]">
                            <Register />
                        </div>
                    </div>

                </div>
            </section>

            {/* Section 2: Our Services */}
            <ServicesSection />

        </main>
    )
}

export default Home
