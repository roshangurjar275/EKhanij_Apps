import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  STATUS_LABELS,
  SOURCE_OF_FUNDING_OPTIONS,
  LEVEL_OF_EXPLORATION_OPTIONS,
  MINERAL_COMMODITY_TYPES,
  FURTHER_ACTION_OPTIONS,
} from '@ekhanij/shared';

function getProject(id: string) {
  if (id === '1') {
    return {
      id: '1',
      projectName: 'Block A Exploration',
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
      projectStatus: 'ONGOING' as const,
      approximateProgressPercent: 35,
      status: 'APPROVED',
      lastUpdated: '2025-02-01',
      kmlUploaded: true,
      previousWorkStudyUploaded: true,
      geologicalReportUploaded: false,
      adminRemarks: undefined,
    };
  }
  if (id === '2') {
    return {
      id: '2',
      projectName: 'Block B Resource Assessment',
      agencyName: 'MECL',
      districts: ['Other District'],
      area: 'Block B',
      sourceOfFunding: 'SELF_FUNDED',
      mineralCommodityType: 'MAJOR_MINERAL',
      mineralCommodity: 'Iron ore',
      levelOfExploration: 'G3',
      budgetSanctioned: 30_00_000,
      budgetAccrued: 30_00_000,
      projectStatus: 'COMPLETED' as const,
      furtherActionByAgency: 'UPGRADATION' as const,
      status: 'PENDING_REVIEW',
      lastUpdated: '2025-01-20',
      kmlUploaded: true,
      previousWorkStudyUploaded: false,
      geologicalReportUploaded: true,
      adminRemarks: undefined,
    };
  }
  return null;
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const p = getProject(params.id);
  if (!p) notFound();

  const sourceLabel =
    SOURCE_OF_FUNDING_OPTIONS.find((o) => o.value === p.sourceOfFunding)?.label ?? p.sourceOfFunding;
  const levelLabel =
    LEVEL_OF_EXPLORATION_OPTIONS.find((o) => o.value === p.levelOfExploration)?.label ?? p.levelOfExploration;
  const mineralTypeLabel =
    MINERAL_COMMODITY_TYPES.find((o) => o.value === p.mineralCommodityType)?.label ?? p.mineralCommodityType;

  return (
    <div className="space-y-6">
      <Link href="/exploration/projects" className="text-sm text-primary-600 hover:underline">
        ← Back to Projects Onboarded
      </Link>
      <div className="card p-6">
        <h1 className="text-xl font-bold text-stone-900">{p.projectName}</h1>
        <p className="mt-1 text-stone-600">
          Agency: {p.agencyName} · Status:{' '}
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-800">
            {STATUS_LABELS[p.status] ?? p.status}
          </span>
        </p>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-stone-500">Districts</dt>
            <dd className="mt-1 text-stone-900">{p.districts.join(', ')}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-stone-500">Area</dt>
            <dd className="mt-1 text-stone-900">{p.area} {p.areaHectares != null && `(${p.areaHectares} ha)`}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-stone-500">Source of Funding</dt>
            <dd className="mt-1 text-stone-900">{sourceLabel}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-stone-500">Mineral Commodity Type</dt>
            <dd className="mt-1 text-stone-900">{mineralTypeLabel}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-stone-500">Mineral commodity</dt>
            <dd className="mt-1 text-stone-900">{p.mineralCommodity}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-stone-500">Level of Exploration</dt>
            <dd className="mt-1 text-stone-900">{levelLabel}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-stone-500">Budget Sanctioned / Accrued</dt>
            <dd className="mt-1 text-stone-900">
              ₹{p.budgetSanctioned?.toLocaleString('en-IN')} / ₹{p.budgetAccrued?.toLocaleString('en-IN')}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-stone-500">Project status</dt>
            <dd className="mt-1 text-stone-900">
              {p.projectStatus}
              {p.approximateProgressPercent != null && ` (${p.approximateProgressPercent}%)`}
            </dd>
          </div>
          {p.furtherActionByAgency != null && (
            <div>
              <dt className="text-sm font-medium text-stone-500">Further Action by Agency</dt>
              <dd className="mt-1 text-stone-900">
                {FURTHER_ACTION_OPTIONS.find((o) => o.value === p.furtherActionByAgency)?.label ??
                  p.furtherActionByAgency}
              </dd>
            </div>
          )}
          <div>
            <dt className="text-sm font-medium text-stone-500">Last updated</dt>
            <dd className="mt-1 text-stone-900">{p.lastUpdated}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-stone-500">Documents</dt>
            <dd className="mt-1 text-stone-900">
              KML: {p.kmlUploaded ? 'Yes' : 'No'}, Previous work study: {p.previousWorkStudyUploaded ? 'Yes' : 'No'},
              GR: {p.geologicalReportUploaded ? 'Yes' : 'No'}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
