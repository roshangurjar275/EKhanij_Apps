import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          E-Khanij 2.0 — Exploration & Resource Module
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
          Agency onboarding, exploration project submission, and State Admin review (SRS V1.2). RP, PL, ML, QL, EL applications; exploration blocks; status check.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: 'Exploration Dashboard',
            desc: 'Projects Onboarded, onboarding form, State Admin (SRS).',
            href: '/exploration',
            cta: 'Open Dashboard',
          },
          {
            title: 'Projects Onboarded',
            desc: 'Agency view of exploration projects (SRS UC-02).',
            href: '/exploration/projects',
            cta: 'View Projects',
          },
          {
            title: 'Fill Onboarding Form',
            desc: 'Exploration Area Details, Source of Funding, KML (SRS).',
            href: '/exploration/onboard',
            cta: 'New Project',
          },
          {
            title: 'State Admin',
            desc: 'Review, Approve or Send for Revision (no Reject).',
            href: '/exploration/admin',
            cta: 'Admin',
          },
          {
            title: 'Exploration Blocks',
            desc: 'Browse EL blocks by tranche, state and mineral.',
            href: '/exploration/blocks',
            cta: 'Browse Blocks',
          },
          {
            title: 'Check Status',
            desc: 'Track status with application ID and acknowledgement date.',
            href: '/exploration/status',
            cta: 'Check Status',
          },
        ].map((card) => (
          <div key={card.href} className="card p-6">
            <h2 className="text-lg font-semibold text-stone-900">{card.title}</h2>
            <p className="mt-2 text-sm text-stone-600">{card.desc}</p>
            <Link href={card.href} className="btn-primary mt-4 w-full justify-center">
              {card.cta}
            </Link>
          </div>
        ))}
      </section>

      <section className="card p-6">
        <h2 className="text-lg font-semibold text-stone-900">Reference Portals</h2>
        <ul className="mt-3 space-y-2 text-sm text-stone-600">
          <li>
            <a
              href="https://ekhanij.mp.gov.in/AppPrevious/HomePage.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline"
            >
              E-Khanij (Legacy) — ekhanij.mp.gov.in
            </a>
          </li>
          <li>
            <a
              href="https://mines.mp.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline"
            >
              E-Khanij 2.0 / Mines Portal — mines.mp.gov.in
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
