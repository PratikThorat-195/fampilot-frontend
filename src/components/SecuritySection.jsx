
import {
  LockKeyhole,
  ShieldCheck,
  UserCheck,
  Database,
} from 'lucide-react';

const securityFeatures = [
  {
    icon: LockKeyhole,
    title: 'Secure Authentication',
    description: 'Protect account access with secure authentication and password hashing.',
  },
  {
    icon: ShieldCheck,
    title: 'Data Protection',
    description: 'Build safeguards around sensitive family and financial information.',
  },
  {
    icon: UserCheck,
    title: 'Access Control',
    description: 'Design access permissions so users can access only the information they are authorized to view.',
  },
  {
    icon: Database,
    title: 'Responsible Data Handling',
    description: 'Keep data handling, storage and access practices transparent and controlled.',
  },
];

function SecuritySection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold tracking-widest text-[#7025C7]">
              YOUR TRUST MATTERS
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#21132F] sm:text-4xl">
              Your Family's Data.
              <span className="block text-[#7025C7]">Your Control.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#716879] sm:text-base">
              Family information deserves careful protection. FamPilot is
              being designed with security, controlled access and responsible
              data handling at its foundation.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {securityFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F0E7FC] text-[#7025C7]">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-[#292033]">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-xs leading-6 text-[#716879]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[#21132F] p-8 text-white sm:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#7025C7]/30 blur-3xl" />

            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#7025C7]">
                <ShieldCheck size={34} />
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                Built Around Trust
              </h3>

              <p className="mt-4 text-sm leading-7 text-purple-100/80">
                Our goal is to make managing family information convenient
                without compromising on privacy and security.
              </p>

              <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <LockKeyhole className="text-purple-300" size={21} />
                  <span className="text-sm font-semibold">
                    Security-first design approach
                  </span>
                </div>
                <p className="mt-2 pl-9 text-xs leading-6 text-purple-100/70">
                  Authentication, authorization, encryption and secure
                  communication are key engineering priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecuritySection;
