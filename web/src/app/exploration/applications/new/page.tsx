'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { APPLICATION_TYPES } from '@ekhanij/shared';

export default function NewApplicationPage() {
  const router = useRouter();
  const [type, setType] = useState('EL');
  const [mineral, setMineral] = useState('');
  const [district, setDistrict] = useState('');
  const [area, setArea] = useState('');
  const [areaHectares, setAreaHectares] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app: API call to create application
    router.push('/exploration/applications');
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <Link
          href="/exploration/applications"
          className="text-sm text-primary-600 hover:underline"
        >
          ← Back to applications
        </Link>
        <h1 className="mt-2 text-2xl font-bold text-stone-900">New application</h1>
        <p className="mt-1 text-stone-600">
          Submit an application for Reconnaissance Permit, Prospecting License, Mining Lease,
          Quarry Lease or Exploration Licence.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="card space-y-6 p-6">
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-stone-700">
            Application type
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-3 py-2"
            required
          >
            {APPLICATION_TYPES.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="mineral" className="block text-sm font-medium text-stone-700">
            Mineral
          </label>
          <input
            id="mineral"
            type="text"
            value={mineral}
            onChange={(e) => setMineral(e.target.value)}
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
            placeholder="e.g. Critical minerals, Iron ore"
            required
          />
        </div>
        <div>
          <label htmlFor="district" className="block text-sm font-medium text-stone-700">
            District
          </label>
          <input
            id="district"
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="area" className="block text-sm font-medium text-stone-700">
            Area / Block name
          </label>
          <input
            id="area"
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="areaHectares" className="block text-sm font-medium text-stone-700">
            Area (hectares)
          </label>
          <input
            id="areaHectares"
            type="number"
            min="0"
            step="0.01"
            value={areaHectares}
            onChange={(e) => setAreaHectares(e.target.value)}
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
            required
          />
        </div>
        <div className="flex gap-3 pt-2">
          <button type="submit" className="btn-primary">
            Save as draft
          </button>
          <button
            type="button"
            onClick={() => handleSubmit({ preventDefault: () => {} } as React.FormEvent)}
            className="btn-secondary"
          >
            Submit application
          </button>
        </div>
      </form>
    </div>
  );
}
