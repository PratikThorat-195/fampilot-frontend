
import { UserPlus, LayoutDashboard, Sparkles, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Create Your Account',
    description:
      'Set up your FamPilot account and create a secure space for managing your family’s important information.',
  },
  {
    number: '02',
    icon: LayoutDashboard,
    title: 'Organize Your Family',
    description:
      'Bring your finances, expenses, insurance, household details and investments together in one place.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Make Smarter Decisions',
    description:
      'Use intelligent insights and your family dashboard to understand your finances and plan ahead.',
  },
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-[#7025C7]">
            HOW IT WORKS
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#21132F] sm:text-4xl">
            Your Family's Future,
            <span className="block text-[#7025C7]">Simplified in Three Steps.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#716879] sm:text-base">
            Getting started with FamPilot is simple. Bring your family's
            important information together and manage it with confidence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-[#EEE8F5] bg-[#FCFAFF] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0E7FC] text-[#7025C7]">
                    <Icon size={23} />
                  </div>

                  <span className="text-3xl font-extrabold text-[#E8DDF5]">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-bold text-[#292033]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#716879]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
