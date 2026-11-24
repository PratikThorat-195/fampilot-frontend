
import {
  Sparkles,
  MessageCircle,
  Wallet,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    icon: Wallet,
    title: 'Understand Your Expenses',
    description: 'Get clear explanations of spending patterns and monthly budgets.',
  },
  {
    icon: TrendingUp,
    title: 'Plan Financial Goals',
    description: 'Explore savings goals and understand possible ways to improve your financial planning.',
  },
  {
    icon: ShieldCheck,
    title: 'Stay Organized',
    description: 'Find relevant insurance, household and family information more easily.',
  },
];

function AIAdvisorSection() {
  return (
    <section className="bg-[#F8F5FC] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#EFE5FB] px-4 py-2 text-xs font-bold tracking-wide text-[#7025C7]">
            <Sparkles size={15} />
            INTRODUCING AI FAMILY ADVISOR
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#21132F] sm:text-4xl">
            Meet Your Intelligent
            <span className="block text-[#7025C7]">Family Assistant.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#716879] sm:text-base">
            Your family's information deserves more than storage.
            FamPilot's AI Family Advisor is designed to help you understand
            your information, explore insights and make more informed plans.
          </p>

          <div className="mt-8 space-y-6">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#7025C7] shadow-sm">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#292033]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#716879]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            to="/register"
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-[#7025C7] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5D1DA8]"
          >
            Get Started <ArrowRight size={17} />
          </Link>
        </div>

        <div className="overflow-hidden rounded-3xl bg-[#1B1227] p-6 text-white shadow-2xl sm:p-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7025C7]">
                <Sparkles size={22} />
              </div>
              <div>
                <h3 className="font-semibold">FamPilot AI</h3>
                <p className="text-xs text-purple-200">Your Family Advisor</p>
              </div>
            </div>

            <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs text-green-300">
              Concept Preview
            </span>
          </div>

          <div className="mt-8 space-y-5">
            <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#7025C7] p-4 text-sm leading-6">
              How can I better understand my monthly family expenses?
            </div>

            <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-white/10 p-4 text-sm leading-6 text-purple-50">
              <div className="mb-2 flex items-center gap-2 font-semibold text-white">
                <Sparkles size={15} />
                FamPilot AI
              </div>
              I can help you review your expense categories, compare monthly
              spending and identify areas you may want to examine.
              Connect your expense information to get started.
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold text-purple-200">
                POSSIBLE INSIGHTS
              </p>
              <div className="mt-3 space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Wallet size={16} className="text-purple-300" />
                  Monthly expense breakdown
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp size={16} className="text-purple-300" />
                  Savings progress overview
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={16} className="text-purple-300" />
                  Ask questions about your records
                </div>
              </div>
            </div>
          </div>

          <p className="mt-5 text-center text-xs text-purple-300/70">
            Illustrative interface · AI capabilities planned for implementation
          </p>
        </div>
      </div>
    </section>
  );
}

export default AIAdvisorSection;
