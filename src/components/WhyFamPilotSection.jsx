
import {
  LayoutDashboard,
  Clock3,
  BrainCircuit,
  Users,
  CheckCircle2,
} from 'lucide-react';

const benefits = [
  {
    icon: LayoutDashboard,
    title: 'Everything in One Place',
    description: 'Keep important family information organized through one central dashboard.',
  },
  {
    icon: Clock3,
    title: 'Save Time',
    description: 'Spend less time searching through scattered records and documents.',
  },
  {
    icon: BrainCircuit,
    title: 'Intelligent Insights',
    description: 'Explore your information with assistance from AI-powered capabilities.',
  },
  {
    icon: Users,
    title: 'Family-focused Planning',
    description: 'Bring everyday responsibilities and long-term family goals into one view.',
  },
];

function WhyFamPilotSection() {
  return (
    <section className="bg-[#F8F5FC] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-[#7025C7]">
            WHY FAMPILOT
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#21132F] sm:text-4xl">
            One Platform.
            <span className="block text-[#7025C7]">A More Organized Family Life.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#716879] sm:text-base">
            Simplify the way you organize, understand and plan the important
            things in your family's life.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-2xl border border-[#EEE8F5] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0E7FC] text-[#7025C7]">
                  <Icon size={23} />
                </div>

                <h3 className="mt-6 text-base font-bold text-[#292033]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#716879]">
                  {benefit.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#7025C7]">
                  <CheckCircle2 size={15} />
                  Designed for families
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyFamPilotSection;
