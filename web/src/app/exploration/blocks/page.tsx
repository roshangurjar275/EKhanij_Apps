'use client';

import { useState } from 'react';
import type { ExplorationBlock } from '@ekhanij/shared';

const mockBlocks: ExplorationBlock[] = [
  {
    id: '1',
    blockCode: 'EL-MP-2025-001',
    state: 'Madhya Pradesh',
    district: 'Sample District',
    mineral: 'Critical minerals',
    areaHectares: 500,
    tranche: 2,
    status: 'AUCTION_LIVE',
    auctionEndDate: '2025-03-15',
  },
  {
    id: '2',
    blockCode: 'EL-MP-2025-002',
    state: 'Madhya Pradesh',
    district: 'Other District',
    mineral: 'Deep-seated minerals',
    areaHectares: 320,
    tranche: 2,
    status: 'OPEN',
  },
  {
    id: '3',
    blockCode: 'EL-MP-2024-010',
    state: 'Madhya Pradesh',
    district: 'Sample District',
    mineral: 'Critical minerals',
    areaHectares: 400,
    tranche: 1,
    status: 'ALLOTTED',
  },
];

const statusColors: Record<string, string> = {
  OPEN: 'bg-stone-100 text-stone-800',
  AUCTION_LIVE: 'bg-green-100 text-green-800',
  ALLOTTED: 'bg-blue-100 text-blue-800',
  CLOSED: 'bg-stone-200 text-stone-600',
};

export default function BlocksPage() {
  const [trancheFilter, setTrancheFilter] = useState<string>('ALL');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');

  const filtered = mockBlocks.filter((b) => {
    if (trancheFilter !== 'ALL' && b.tranche !== Number(trancheFilter)) return false;
    if (statusFilter !== 'ALL' && b.status !== statusFilter) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-stone-900">Exploration blocks</h1>
        <p className="mt-1 text-stone-600">
          Exploration Licence (EL) blocks by tranche. Aligned with MMDR Amendment Act, 2023 and
          Mineral (Auction) Amendment Rules, 2023.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <select
          value={trancheFilter}
          onChange={(e) => setTrancheFilter(e.target.value)}
          className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm"
        >
          <option value="ALL">All tranches</option>
          <option value="1">Tranche I</option>
          <option value="2">Tranche II</option>
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm"
        >
          <option value="ALL">All statuses</option>
          <option value="OPEN">Open</option>
          <option value="AUCTION_LIVE">Auction live</option>
          <option value="ALLOTTED">Allotted</option>
          <option value="CLOSED">Closed</option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((block) => (
          <div key={block.id} className="card p-5">
            <div className="flex items-start justify-between">
              <span className="font-mono text-sm font-medium text-primary-700">
                {block.blockCode}
              </span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  statusColors[block.status] ?? 'bg-stone-100 text-stone-800'
                }`}
              >
                {block.status.replace('_', ' ')}
              </span>
            </div>
            <p className="mt-2 font-medium text-stone-900">{block.mineral}</p>
            <p className="text-sm text-stone-600">
              {block.district}, {block.state}
            </p>
            <p className="mt-1 text-sm text-stone-500">
              Area: {block.areaHectares} ha · Tranche {block.tranche}
            </p>
            {block.auctionEndDate && (
              <p className="mt-1 text-xs text-stone-500">
                Auction ends: {block.auctionEndDate}
              </p>
            )}
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="card p-8 text-center text-stone-500">No blocks match the filters.</div>
      )}
    </div>
  );
}
