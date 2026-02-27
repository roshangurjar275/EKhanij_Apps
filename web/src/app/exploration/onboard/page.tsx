'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  SOURCE_OF_FUNDING_OPTIONS,
  LEVEL_OF_EXPLORATION_OPTIONS,
  MINERAL_COMMODITY_TYPES,
  PROJECT_STATUS_OPTIONS,
  FURTHER_ACTION_OPTIONS,
} from '@ekhanij/shared';

/** SRS UC-02: Fill Agency Onboarding for Exploration - Exploration Area Details */
export default function OnboardFormPage() {
  const router = useRouter();
  const [projectName, setProjectName] = useState('');
  const [districts, setDistricts] = useState<string[]>([]);
  const [area, setArea] = useState('');
  const [areaHectares, setAreaHectares] = useState('');
  const [sourceOfFunding, setSourceOfFunding] = useState('NMEDT');
  const [mineralCommodityType, setMineralCommodityType] = useState('PEL');
  const [mineralCommodity, setMineralCommodity] = useState('');
  const [gradeSubGrade, setGradeSubGrade] = useState('');
  const [levelOfExploration, setLevelOfExploration] = useState('G1');
  const [budgetSanctioned, setBudgetSanctioned] = useState('');
  const [budgetAccrued, setBudgetAccrued] = useState('');
  const [projectStatus, setProjectStatus] = useState<'WIP' | 'ONGOING' | 'COMPLETED'>('WIP');
  const [approximateProgressPercent, setApproximateProgressPercent] = useState('');
  const [furtherActionByAgency, setFurtherActionByAgency] = useState('NO_ACTION');
  const [toposheetNumber, setToposheetNumber] = useState('');
  const [resourceName, setResourceName] = useState('');
  const [tonnage, setTonnage] = useState('');
  const [conclusionRecommendation, setConclusionRecommendation] = useState('');
  const [kmlUploaded, setKmlUploaded] = useState(false);
  const [previousWorkStudyUploaded, setPreviousWorkStudyUploaded] = useState(false);

  const toggleDistrict = (d: string) => {
    setDistricts((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    );
  };

  const handleSubmit = (e: React.FormEvent, asDraft: boolean) => {
    e.preventDefault();
    if (!asDraft && !projectName.trim()) return;
    router.push('/exploration/projects');
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <Link href="/exploration" className="text-sm text-primary-600 hover:underline">
          ← Dashboard
        </Link>
        <h1 className="mt-2 text-2xl font-bold text-stone-900">
          Fill Agency Onboarding for Exploration
        </h1>
        <p className="mt-1 text-stone-600">
          Exploration Area Details (SRS UC-02). Project Name, multiple districts, Source of Funding,
          Budget Sanctioned/Accrued, KML mandatory.
        </p>
      </div>

      <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-6">
        <div className="card p-6 space-y-4">
          <h2 className="text-lg font-semibold text-stone-900">Exploration Area Details</h2>
          <div>
            <label className="block text-sm font-medium text-stone-700">Project name *</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700">District(s) *</label>
            <p className="text-xs text-stone-500">Select multiple districts</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {['Sample District', 'Other District', 'Third District'].map((d) => (
                <label key={d} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={districts.includes(d)}
                    onChange={() => toggleDistrict(d)}
                  />
                  <span className="text-sm">{d}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-stone-700">Area</label>
              <input
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700">Area (hectares)</label>
              <input
                type="number"
                min="0"
                value={areaHectares}
                onChange={(e) => setAreaHectares(e.target.value)}
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700">Source of Funding *</label>
            <select
              value={sourceOfFunding}
              onChange={(e) => setSourceOfFunding(e.target.value)}
              className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-3 py-2"
            >
              {SOURCE_OF_FUNDING_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700">
              Mineral Commodity Type *</label>
            <select
              value={mineralCommodityType}
              onChange={(e) => setMineralCommodityType(e.target.value)}
              className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-3 py-2"
            >
              {MINERAL_COMMODITY_TYPES.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700">Mineral commodity *</label>
            <input
              type="text"
              value={mineralCommodity}
              onChange={(e) => setMineralCommodity(e.target.value)}
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
              placeholder="Open text"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700">Grade/Sub-grade</label>
            <input
              type="text"
              value={gradeSubGrade}
              onChange={(e) => setGradeSubGrade(e.target.value)}
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
              placeholder="Optional open text"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700">
              Level of Exploration (G1–G4 / NA for PEL/PML) *</label>
            <select
              value={levelOfExploration}
              onChange={(e) => setLevelOfExploration(e.target.value)}
              className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-3 py-2"
            >
              {LEVEL_OF_EXPLORATION_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-stone-700">Budget Sanctioned *</label>
              <input
                type="number"
                min="0"
                value={budgetSanctioned}
                onChange={(e) => setBudgetSanctioned(e.target.value)}
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700">Budget Accrued *</label>
              <input
                type="number"
                min="0"
                value={budgetAccrued}
                onChange={(e) => setBudgetAccrued(e.target.value)}
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700">Project status *</label>
            <select
              value={projectStatus}
              onChange={(e) =>
                setProjectStatus(e.target.value as 'WIP' | 'ONGOING' | 'COMPLETED')
              }
              className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-3 py-2"
            >
              {PROJECT_STATUS_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          {(projectStatus === 'ONGOING' || projectStatus === 'WIP') && (
            <div>
              <label className="block text-sm font-medium text-stone-700">
                Approximate Progress %
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={approximateProgressPercent}
                onChange={(e) => setApproximateProgressPercent(e.target.value)}
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
              />
            </div>
          )}
          {projectStatus === 'COMPLETED' && (
            <>
              <div>
                <label className="block text-sm font-medium text-stone-700">
                  Further Action by Agency * (No Action / Upgradation)
                </label>
                <select
                  value={furtherActionByAgency}
                  onChange={(e) => setFurtherActionByAgency(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-3 py-2"
                >
                  {FURTHER_ACTION_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="block text-sm font-medium text-stone-700">Toposheet Number</label>
                  <input
                    type="text"
                    value={toposheetNumber}
                    onChange={(e) => setToposheetNumber(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700">Resource Name</label>
                  <input
                    type="text"
                    value={resourceName}
                    onChange={(e) => setResourceName(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700">Tonnage</label>
                  <input
                    type="text"
                    value={tonnage}
                    onChange={(e) => setTonnage(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700">
                  Conclusion & Recommendation for Auction
                </label>
                <textarea
                  value={conclusionRecommendation}
                  onChange={(e) => setConclusionRecommendation(e.target.value)}
                  rows={3}
                  className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
                />
              </div>
            </>
          )}
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={kmlUploaded}
                onChange={(e) => setKmlUploaded(e.target.checked)}
              />
              <span className="text-sm font-medium text-stone-700">KML uploaded (mandatory)</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={previousWorkStudyUploaded}
                onChange={(e) => setPreviousWorkStudyUploaded(e.target.checked)}
              />
              <span className="text-sm text-stone-600">Previous work study (optional)</span>
            </label>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={(e) => handleSubmit(e, true)}
            className="btn-secondary"
          >
            Save as Draft
          </button>
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
