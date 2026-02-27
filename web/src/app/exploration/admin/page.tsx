'use client';

import { useState } from 'react';
import {
  STATUS_LABELS,
  PROJECT_STATUS_OPTIONS,
  MINERAL_COMMODITY_TYPES,
  ADMIN_ACTIONS,
} from '@ekhanij/shared';
import type { ExplorationProject } from '@ekhanij/shared';

// Mock projects for State Admin - SRS: Approve / Send for Revision (no Reject)
const mockProjects: ExplorationProject[] = [
  {
    id: '1',
    projectName: 'Block A Exploration',
    agencyId: 'ag1',
    agencyName: 'GSI',
    districts: ['Sample District'],
    area: 'Block A',
    sourceOfFunding: 'NMEDT',
    mineralCommodityType: 'PEL',
    mineralCommodity: 'Critical minerals',
    levelOfExploration: 'G2',
    budgetSanctioned: 50_00_000,
    budgetAccrued: 12_00_000,
    projectStatus: 'ONGOING',
    approximateProgressPercent: 35,
    furtherActionByAgency: undefined,
    status: 'PENDING_REVIEW',
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
    status: 'APPROVED',
    lastUpdated: '2025-01-20',
    kmlUploaded: true,
    previousWorkStudyUploaded: false,
    geologicalReportUploaded: true,
  },
];

export default function StateAdminPage() {
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  const [filterAgency, setFilterAgency] = useState<string>('ALL');
  const [search, setSearch] = useState('');
  const [actionModal, setActionModal] = useState<{ project: ExplorationProject } | null>(null);
  const [adminRemarks, setAdminRemarks] = useState('');
  const [selectedAction, setSelectedAction] = useState<'APPROVE' | 'SEND_FOR_REVISION' | null>(null);

  const filtered = mockProjects.filter((p) => {
    if (filterStatus !== 'ALL' && p.status !== filterStatus) return false;
    if (filterAgency !== 'ALL' && p.agencyName !== filterAgency) return false;
    if (
      search &&
      !p.projectName.toLowerCase().includes(search.toLowerCase()) &&
      !p.agencyName.toLowerCase().includes(search.toLowerCase())
    )
      return false;
    return true;
  });

  const handleAction = (action: 'APPROVE' | 'SEND_FOR_REVISION') => {
    setSelectedAction(action);
    if (actionModal) {
      alert(
        `Action: ${action === 'APPROVE' ? 'Approve' : 'Send for Revision'}\nRemarks: ${adminRemarks || '—'}`
      );
      setActionModal(null);
      setAdminRemarks('');
      setSelectedAction(null);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-stone-900">State Admin</h1>
        <p className="mt-1 text-stone-600">
          Review submissions. Approve or Send for Revision with remarks (SRS UC-03 – no Reject).
        </p>
      </div>

      <div className="card p-4">
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="search"
            placeholder="Search project or agency..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-lg border border-stone-300 px-3 py-2 text-sm sm:w-64"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm"
          >
            <option value="ALL">All status</option>
            <option value="PENDING_REVIEW">Pending Review</option>
            <option value="APPROVED">Approved (Completed)</option>
            <option value="RAISED_QUERY">Raised Query</option>
            <option value="CLOSED">Closed</option>
          </select>
          <select
            value={filterAgency}
            onChange={(e) => setFilterAgency(e.target.value)}
            className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm"
          >
            <option value="ALL">All agencies</option>
            <option value="GSI">GSI</option>
            <option value="MECL">MECL</option>
          </select>
          <button type="button" className="btn-secondary text-sm">
            Export Excel
          </button>
          <button type="button" className="btn-secondary text-sm">
            Export PDF
          </button>
        </div>
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
                  Further Action
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
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-stone-600">
                    {p.furtherActionByAgency ?? '—'}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                      {STATUS_LABELS[p.status] ?? p.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-right">
                    <button
                      type="button"
                      className="mr-2 text-primary-600 hover:underline"
                      title="Show GR"
                    >
                      GR
                    </button>
                    <button
                      type="button"
                      className="text-primary-600 hover:underline"
                      onClick={() => setActionModal({ project: p })}
                    >
                      Action
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="px-4 py-8 text-center text-stone-500">No records found.</div>
        )}
      </div>

      {actionModal && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="card max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-stone-900">Review — {actionModal.project.projectName}</h3>
            <p className="mt-1 text-sm text-stone-600">Approve or Send for Revision (no Reject).</p>
            <div className="mt-4">
              <label className="block text-sm font-medium text-stone-700">Remarks / Feedback</label>
              <textarea
                value={adminRemarks}
                onChange={(e) => setAdminRemarks(e.target.value)}
                rows={3}
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
                placeholder="Optional remarks"
              />
            </div>
            <div className="mt-6 flex gap-3">
              {ADMIN_ACTIONS.map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleAction(value as 'APPROVE' | 'SEND_FOR_REVISION')}
                  className={
                    value === 'APPROVE' ? 'btn-primary' : 'btn-secondary'
                  }
                >
                  {label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setActionModal(null);
                  setAdminRemarks('');
                }}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
