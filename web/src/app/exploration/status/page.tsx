'use client';

import { useState } from 'react';
import { STATUS_LABELS } from '@ekhanij/shared';

export default function CheckStatusPage() {
  const [appId, setAppId] = useState('');
  const [ackDate, setAckDate] = useState('');
  const [result, setResult] = useState<{
    applicationNumber: string;
    type: string;
    status: string;
    submittedAt: string;
  } | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setNotFound(false);
    setResult(null);
    // Demo: show mock result if user enters something
    if (appId.trim() && ackDate.trim()) {
      setResult({
        applicationNumber: appId.trim() || 'EK/EL/2025/001234',
        type: 'EL',
        status: 'UNDER_SCRUTINY',
        submittedAt: ackDate.trim() || '2025-01-15',
      });
    } else if (appId.trim() || ackDate.trim()) {
      setNotFound(true);
    }
  };

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-stone-900">Check application status</h1>
        <p className="mt-1 text-stone-600">
          Enter your application ID and acknowledgement date to track status. (Reference: E-Khanij
          status check — application register.)
        </p>
      </div>

      <form onSubmit={handleSearch} className="card space-y-4 p-6">
        <div>
          <label htmlFor="appId" className="block text-sm font-medium text-stone-700">
            Application ID / Number
          </label>
          <input
            id="appId"
            type="text"
            value={appId}
            onChange={(e) => setAppId(e.target.value)}
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
            placeholder="e.g. EK/EL/2025/001234"
          />
        </div>
        <div>
          <label htmlFor="ackDate" className="block text-sm font-medium text-stone-700">
            Acknowledgement date
          </label>
          <input
            id="ackDate"
            type="date"
            value={ackDate}
            onChange={(e) => setAckDate(e.target.value)}
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
          />
        </div>
        <button type="submit" className="btn-primary w-full">
          Check status
        </button>
      </form>

      {result && (
        <div className="card border-primary-200 bg-primary-50/50 p-6">
          <h2 className="font-semibold text-stone-900">Status result</h2>
          <dl className="mt-4 space-y-2">
            <div>
              <dt className="text-sm text-stone-500">Application number</dt>
              <dd className="font-medium text-stone-900">{result.applicationNumber}</dd>
            </div>
            <div>
              <dt className="text-sm text-stone-500">Type</dt>
              <dd className="font-medium text-stone-900">{result.type}</dd>
            </div>
            <div>
              <dt className="text-sm text-stone-500">Status</dt>
              <dd className="font-medium text-stone-900">
                {STATUS_LABELS[result.status] ?? result.status}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-stone-500">Submitted on</dt>
              <dd className="font-medium text-stone-900">{result.submittedAt}</dd>
            </div>
          </dl>
        </div>
      )}

      {notFound && (
        <div className="card border-amber-200 bg-amber-50 p-6 text-amber-800">
          No application found for the given ID and date. Please check and try again.
        </div>
      )}
    </div>
  );
}
