import { Link } from 'react-router-dom';
import {
  Mail,
  ArrowUp,
  Globe,
  MessageCircle,
} from 'lucide-react';

const footerLinks = {
  Platform: [
    { label: 'Home', href: '#home' },
    { label: 'Our Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
  ],
  Services: [
    { label: 'Finance Management', href: '#services' },
    { label: 'Insurance Management', href: '#services' },
    { label: 'AI Family Advisor', href: '#ai-advisor' },
  ],
};

function Footer() {
  return (
    <footer className="bg-[#1B1227] px-5 pb-6 pt-14 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="text-2xl font-extrabold tracking-tight">
              Fam<span className="text-purple-400">Pilot</span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-purple-200/70">
              One intelligent platform to organize your family's finances,
              responsibilities and future plans.
            </p>

            <p className="mt-4 text-xs font-medium text-purple-300">
              Together for a Brighter Tomorrow.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-bold">{heading}</h3>

              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-purple-200/70 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

            
                <div className="mt-6 flex items-center gap-3">
                <a
                    href="mailto:support@fampilot.com"
                    aria-label="Email"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-[#7025C7]"
                >
                    <Mail size={19} />
                </a>

                <a
                    href="#services"
                    aria-label="Explore services"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-[#7025C7]"
                >
                    <Globe size={19} />
                </a>

                <a
                    href="#how-it-works"
                    aria-label="How it works"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-[#7025C7]"
                >
                    <MessageCircle size={19} />
                </a>
                </div>

        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-purple-200/60">
            © {new Date().getFullYear()} FamPilot. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-purple-200/70">
            <a href="#privacy" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#terms" className="transition hover:text-white">
              Terms of Use
            </a>
            <a href="#home" aria-label="Back to top" className="rounded-lg bg-white/10 p-2 transition hover:bg-white/20">
              <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
