import Link from 'next/link';
import { notFound } from 'next/navigation';
import { STATUS_LABELS } from '@ekhanij/shared';

// Mock fetch by id
function getApplication(id: string) {
  if (id === '1') {
    return {
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
      remarks: 'Documents under verification.',
    };
  }
  if (id === '2') {
    return {
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
      remarks: undefined,
    };
  }
  return null;
}

export default function ApplicationDetailPage({ params }: { params: { id: string } }) {
  const app = getApplication(params.id);
  if (!app) notFound();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Link href="/exploration/applications" className="text-sm text-primary-600 hover:underline">
          ← Back to applications
        </Link>
      </div>
      <div className="card p-6">
        <h1 className="text-xl font-bold text-stone-900">{app.applicationNumber}</h1>
        <p className="mt-1 text-stone-600">
          <span className="font-medium">Type:</span> {app.type} ·{' '}
          <span className="font-medium">Status:</span>{' '}
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-800">
            {STATUS_LABELS[app.status] ?? app.status}
          </span>
        </p>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-stone-500">Mineral</dt>
            <dd className="mt-1 text-stone-900">{app.mineral}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-stone-500">District</dt>
            <dd className="mt-1 text-stone-900">{app.district}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-stone-500">Area / Block</dt>
            <dd className="mt-1 text-stone-900">{app.area}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-stone-500">Area (hectares)</dt>
            <dd className="mt-1 text-stone-900">{app.areaHectares}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-stone-500">Applicant</dt>
            <dd className="mt-1 text-stone-900">{app.applicantName}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-stone-500">Submitted on</dt>
            <dd className="mt-1 text-stone-900">{app.submittedAt}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-stone-500">Last updated</dt>
            <dd className="mt-1 text-stone-900">{app.lastUpdated}</dd>
          </div>
          {app.remarks && (
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-stone-500">Remarks</dt>
              <dd className="mt-1 text-stone-900">{app.remarks}</dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
}
