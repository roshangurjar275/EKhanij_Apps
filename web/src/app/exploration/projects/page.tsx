'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  STATUS_LABELS,
  PROJECT_STATUS_OPTIONS,
  MINERAL_COMMODITY_TYPES,
} from '@ekhanij/shared';
import type { ExplorationProject } from '@ekhanij/shared';

// Mock data per SRS - Projects Onboarded
const mockProjects: ExplorationProject[] = [
  {
    id: '1',
    projectName: 'Block A Exploration',
    agencyId: 'ag1',
    agencyName: 'GSI',
    districts: ['Sample District'],
    area: 'Block A',
    areaHectares: 500,
    sourceOfFunding: 'NMEDT',
    mineralCommodityType: 'PEL',
    mineralCommodity: 'Critical minerals',
    levelOfExploration: 'G2',
    budgetSanctioned: 50_00_000,
    budgetAccrued: 12_00_000,
    projectStatus: 'ONGOING',
    approximateProgressPercent: 35,
    status: 'APPROVED',
    lastUpdated: '2025-02-01',
    kmlUploaded: true,
    previousWorkStudyUploaded: true,
    geologicalReportUploaded: false,
  },
  {
    id: '2',
    projectName: 'Block B Resource Assessment',
    agencyId: 'ag2',
    agencyName: 'MECL',
    districts: ['Other District'],
    area: 'Block B',
    sourceOfFunding: 'SELF_FUNDED',
    mineralCommodityType: 'MAJOR_MINERAL',
    mineralCommodity: 'Iron ore',
    levelOfExploration: 'G3',
    budgetSanctioned: 30_00_000,
    budgetAccrued: 30_00_000,
    projectStatus: 'COMPLETED',
    furtherActionByAgency: 'UPGRADATION',
    status: 'PENDING_REVIEW',
    lastUpdated: '2025-01-20',
    kmlUploaded: true,
    previousWorkStudyUploaded: false,
    geologicalReportUploaded: true,
  },
];

export default function ProjectsPage() {
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [projectStatusFilter, setProjectStatusFilter] = useState<string>('ALL');

  const filtered = mockProjects.filter((p) => {
    if (statusFilter !== 'ALL' && p.status !== statusFilter) return false;
    if (projectStatusFilter !== 'ALL' && p.projectStatus !== projectStatusFilter) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Projects Onboarded</h1>
          <p className="mt-1 text-stone-600">SRS: Agency view of exploration projects.</p>
        </div>
        <Link href="/exploration/onboard" className="btn-primary">
          New project (Fill Onboarding Form)
        </Link>
      </div>

      <div className="flex flex-wrap gap-3">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm"
        >
          <option value="ALL">All status</option>
          <option value="DRAFT">Draft</option>
          <option value="SUBMITTED">Submitted</option>
          <option value="PENDING_REVIEW">Pending Review</option>
          <option value="APPROVED">Approved</option>
          <option value="RAISED_QUERY">Raised Query</option>
          <option value="CLOSED">Closed</option>
        </select>
        <select
          value={projectStatusFilter}
          onChange={(e) => setProjectStatusFilter(e.target.value)}
          className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm"
        >
          <option value="ALL">All project status</option>
          {PROJECT_STATUS_OPTIONS.map(({ value, label }) => (
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
                  Project name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase text-stone-500">
                  Agency
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase text-stone-500">
                  Mineral / Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase text-stone-500">
                  Project status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase text-stone-500">
                  Status
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase text-stone-500">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 bg-white">
              {filtered.map((p) => (
                <tr key={p.id} className="hover:bg-stone-50">
                  <td className="px-4 py-3 text-sm font-medium text-stone-900">{p.projectName}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-stone-600">
                    {p.agencyName}
                  </td>
                  <td className="px-4 py-3 text-sm text-stone-600">
                    {p.mineralCommodity} ·{' '}
                    {MINERAL_COMMODITY_TYPES.find((t) => t.value === p.mineralCommodityType)?.label ??
                      p.mineralCommodityType}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-stone-600">
                    {p.projectStatus}
                    {p.approximateProgressPercent != null && ` (${p.approximateProgressPercent}%)`}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                      {STATUS_LABELS[p.status] ?? p.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-right">
                    <Link
                      href={`/exploration/projects/${p.id}`}
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
        {filtered.length === 0 && (
          <div className="px-4 py-8 text-center text-stone-500">No projects found.</div>
        )}
      </div>
    </div>
  );
}
