'use client';

import { useState } from 'react';
import Link from 'next/link';
import { APPLICATION_TYPES, STATUS_LABELS } from '@ekhanij/shared';
import type { ExplorationApplication, ApplicationStatus } from '@ekhanij/shared';

// Mock data for demo
const mockApplications: ExplorationApplication[] = [
  {
    id: '1',
    applicationNumber: 'EK/EL/2025/001234',
    type: 'EL',
    status: 'UNDER_SCRUTINY',
    mineral: 'Critical minerals',
    district: 'Sample District',
    area: 'Block A',
    areaHectares: 500,
    applicantName: 'Demo Applicant',
    submittedAt: '2025-01-15',
    lastUpdated: '2025-02-01',
  },
  {
    id: '2',
    applicationNumber: 'EK/PL/2024/005678',
    type: 'PL',
    status: 'SUBMITTED',
    mineral: 'Iron ore',
    district: 'Sample District',
    area: 'Block B',
    areaHectares: 200,
    applicantName: 'Demo Applicant',
    submittedAt: '2024-11-20',
    lastUpdated: '2024-11-20',
  },
];

export default function ApplicationsPage() {
  const [filter, setFilter] = useState<ApplicationStatus | 'ALL'>('ALL');
  const [typeFilter, setTypeFilter] = useState<string>('ALL');
  const applications = mockApplications;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-stone-900">My Applications</h1>
        <Link href="/exploration/applications/new" className="btn-primary">
          New application
        </Link>
      </div>

      <div className="flex flex-wrap gap-3">
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm"
        >
          <option value="ALL">All types</option>
          {APPLICATION_TYPES.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as ApplicationStatus | 'ALL')}
          className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm"
        >
          <option value="ALL">All statuses</option>
          {Object.entries(STATUS_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-stone-200">
            <thead className="bg-stone-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase text-stone-500">
                  Application No.
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase text-stone-500">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase text-stone-500">
                  Mineral
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase text-stone-500">
                  District / Area
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase text-stone-500">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase text-stone-500">
                  Submitted
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase text-stone-500">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 bg-white">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-stone-50">
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-stone-900">
                    {app.applicationNumber}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-stone-600">{app.type}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-stone-600">
                    {app.mineral}
                  </td>
                  <td className="px-4 py-3 text-sm text-stone-600">
                    {app.district} / {app.area}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                      {STATUS_LABELS[app.status] ?? app.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-stone-600">
                    {app.submittedAt}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-right">
                    <Link
                      href={`/exploration/applications/${app.id}`}
                      className="text-primary-600 hover:underline"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {applications.length === 0 && (
          <div className="px-4 py-8 text-center text-stone-500">No applications found.</div>
        )}
      </div>
    </div>
  );
}
