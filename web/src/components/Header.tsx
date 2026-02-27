'use client';

import Link from 'next/link';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/exploration', label: 'Exploration' },
  { href: '/exploration/projects', label: 'Projects Onboarded' },
  { href: '/exploration/onboard', label: 'Fill Onboarding Form' },
  { href: '/exploration/admin', label: 'State Admin' },
  { href: '/exploration/blocks', label: 'Exploration Blocks' },
  { href: '/exploration/status', label: 'Check Status' },
];

export function Header() {
  return (
    <header className="border-b border-stone-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary-700">E-Khanij 2.0</span>
          <span className="rounded bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-800">
            Exploration & Resource
          </span>
        </Link>
        <nav className="hidden gap-6 sm:flex">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-stone-600 hover:text-primary-600"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login" className="btn-secondary text-sm">
            Login
          </Link>
          <Link href="/register" className="btn-primary text-sm">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
