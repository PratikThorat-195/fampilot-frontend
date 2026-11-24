
const services = [
    {
        icon: "₹",
        title: "Finance Management",
        description:
            "Manage your family's financial information, income and financial goals in one organized place."
    },
    {
        icon: "↗",
        title: "Expense Management",
        description:
            "Track daily expenses, manage budgets and understand your family's spending habits."
    },
    {
        icon: "✚",
        title: "Insurance Management",
        description:
            "Keep health, life, vehicle and property insurance policies and important details organized."
    },
    {
        icon: "⌂",
        title: "Home Management",
        description:
            "Simplify household responsibilities by managing groceries, appliances and home essentials."
    },
    {
        icon: "▤",
        title: "Banking Management",
        description:
            "Maintain an organized overview of family bank accounts and important banking information."
    },
    {
        icon: "◈",
        title: "Investment Management",
        description:
            "Monitor investments, financial assets and long-term family wealth-building goals."
    },
    {
        icon: "⌂",
        title: "Property Management",
        description:
            "Organize property records, ownership details and important property-related documents."
    },
    {
        icon: "✧",
        title: "AI Family Advisor",
        description:
            "Explore intelligent assistance and personalized insights to support informed family decisions."
    }
]

function ServicesSection() {
    return (
        <section
            id="services"
            className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <div className="mb-14 flex w-full flex-col items-center text-center">

                    <span className="
                        inline-block rounded-full
                        bg-[#E9EAFE] px-4 py-2
                        text-xs font-semibold
                        tracking-[0.15em] text-[#7025C7]
                    ">
                        OUR SERVICES
                    </span>

                    <h2 className="
                        mt-5 text-3xl font-bold
                        tracking-tight text-center text-[#292631]
                        sm:text-4xl lg:text-5xl
                    ">
                        Everything Your Family Needs
                        <span className="block text-[#7025C7]">
                            Under One Roof.
                        </span>
                    </h2>

                    <p className="
                        mx-auto mt-5 max-w-2xl
                        text-sm text-center leading-7 text-[#85818D]
                        sm:text-base
                    ">
                        From everyday household responsibilities to
                        long-term financial planning, FamPilot helps
                        you manage the important things in your
                        family's life.
                    </p>

                    {/* Heading Divider */}
                    <div className="
                        mx-auto mt-7 h-1 w-16
                        rounded-full bg-[#6654A5]
                    "/>

                </div>

                {/* Service Cards */}
                <div className="
                    grid grid-cols-1 gap-6
                    sm:grid-cols-2
                    lg:grid-cols-3
                ">

                    {services.map((service, index) => (
                        <article
                            key={service.title}
                            className="
                                group relative
                                min-h-[230px]
                                rounded-2xl
                                border border-[#E9E7EF]
                                bg-white p-7

                                shadow-[0_4px_15px_-12px_rgba(48,35,68,0.12)]

                                transition-all duration-300 ease-out

                                hover:-translate-y-2
                                hover:border-[#D5CBE6]
                                hover:shadow-[0_18px_35px_-15px_rgba(48,35,68,0.22)]
                            "
                        >

                            {/* Icon */}
                            <div className="
                                flex h-12 w-12
                                items-center justify-center
                                rounded-full
                                bg-gradient-to-br
                                from-[#7025C7] to-[#4F0D91]
                                text-2xl font-semibold text-white

                                shadow-[0_8px_18px_-5px_rgba(102,84,165,0.55)]

                                transition-all duration-300
                                group-hover:scale-110
                                group-hover:shadow-[0_10px_25px_-4px_rgba(102,84,165,0.65)]
                            ">
                                {service.icon}
                            </div>

                            {/* Card Content */}
                            <h3 className="
                                mt-6 text-lg font-semibold
                                tracking-tight text-[#292631]
                                transition-colors duration-300
                                group-hover:text-[#7025C7]
                            ">
                                {service.title}
                            </h3>

                            <p className="
                                mt-3 text-sm leading-6
                                text-[#85818D]
                            ">
                                {service.description}
                            </p>

                            {/* Card Number */}
                            <span className="
                                absolute right-6 top-7
                                text-xs font-semibold
                                tracking-widest text-[#D0CCD8]
                            ">
                                0{index + 1}
                            </span>

                        </article>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default ServicesSection
