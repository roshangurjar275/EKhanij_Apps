import Link from 'next/link';

/** SRS: Exploration & Resource Module dashboard - Projects Onboarded, Agency Form, State Admin */
export default function ExplorationDashboardPage() {
  const stats = [
    { label: 'Projects Onboarded', value: '—', href: '/exploration/projects' },
    { label: 'Pending Review', value: '—', href: '/exploration/admin' },
    { label: 'Exploration blocks', value: '—', href: '/exploration/blocks' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-stone-900">Exploration & Resource Dashboard</h1>
        <p className="mt-1 text-stone-600">
          Agency onboarding, project submission, and State Admin review (SRS V1.2).
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map(({ label, value, href }) => (
          <Link key={href} href={href} className="card p-5 hover:border-primary-300">
            <p className="text-sm font-medium text-stone-500">{label}</p>
            <p className="mt-1 text-2xl font-semibold text-stone-900">{value}</p>
          </Link>
        ))}
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-stone-900">Quick actions</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/exploration/onboard" className="btn-primary">
            Fill Agency Onboarding Form
          </Link>
          <Link href="/exploration/projects" className="btn-secondary">
            Projects Onboarded
          </Link>
          <Link href="/exploration/admin" className="btn-secondary">
            State Admin (Review & Approve)
          </Link>
          <Link href="/exploration/status" className="btn-secondary">
            Check status
          </Link>
          <Link href="/exploration/blocks" className="btn-secondary">
            Exploration blocks
          </Link>
        </div>
      </div>
    </div>
  );
}
