
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

function FinalCTASection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#21132F] px-6 py-14 text-center text-white sm:px-12 sm:py-16">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#7025C7]/40 blur-3xl" />
        <div className="absolute -bottom-28 -right-16 h-72 w-72 rounded-full bg-[#9348D5]/30 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-purple-200">
            <Sparkles size={25} />
          </div>

          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
            Take the First Step Towards
            <span className="block text-purple-300">
              a More Organized Family Life.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-purple-100/80 sm:text-base">
            Bring your family's important information together and start
            building a smarter way to manage tomorrow.
          </p>

          <Link
            to="/register"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-[#7025C7] transition hover:bg-purple-50"
          >
            Create Your Free Account
            <ArrowRight size={17} />
          </Link>

          <p className="mt-5 text-xs text-purple-200/70">
            Together for a Brighter Tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FinalCTASection;
