/** E-Khanij 2.0 Exploration & Resource Module constants - SRS V1.2 aligned */

export const APP_NAME = 'E-Khanij 2.0';
export const MODULE_NAME = 'Exploration & Resource';

export const APPLICATION_TYPES = [
  { value: 'RP', label: 'Reconnaissance Permit (RP)' },
  { value: 'PL', label: 'Prospecting License (PL)' },
  { value: 'ML', label: 'Mining Lease (ML)' },
  { value: 'QL', label: 'Quarry Lease / Permit (QL)' },
  { value: 'EL', label: 'Exploration Licence (EL)' },
] as const;

/** SRS FR-04: Source of Funding (replaces Mode of Exploration) */
export const SOURCE_OF_FUNDING_OPTIONS = [
  { value: 'NMEDT', label: 'NMEDT' },
  { value: 'MOU', label: 'MOU' },
  { value: 'SELF_FUNDED', label: 'Self-Funded' },
] as const;

/** SRS FR-05: Level of Exploration - G1 to G4, NA for PEL/PML */
export const LEVEL_OF_EXPLORATION_OPTIONS = [
  { value: 'NA', label: 'NA' },
  { value: 'G1', label: 'G1' },
  { value: 'G2', label: 'G2' },
  { value: 'G3', label: 'G3' },
  { value: 'G4', label: 'G4' },
] as const;

/** SRS: Mineral Commodity Type */
export const MINERAL_COMMODITY_TYPES = [
  { value: 'PEL', label: 'PEL' },
  { value: 'MAJOR_MINERAL', label: 'Major Mineral' },
  { value: 'MINOR_MINERAL', label: 'Minor Mineral' },
  { value: 'OTHERS', label: 'Others' },
] as const;

/** SRS FR-09: Project status */
export const PROJECT_STATUS_OPTIONS = [
  { value: 'WIP', label: 'WIP' },
  { value: 'ONGOING', label: 'Ongoing' },
  { value: 'COMPLETED', label: 'Completed' },
] as const;

/** SRS FR-10: Further Action by Agency (mandatory for completed) */
export const FURTHER_ACTION_OPTIONS = [
  { value: 'NO_ACTION', label: 'No Action' },
  { value: 'UPGRADATION', label: 'Upgradation' },
] as const;

export const STATUS_LABELS: Record<string, string> = {
  DRAFT: 'Draft',
  SUBMITTED: 'Submitted',
  UNDER_SCRUTINY: 'Under Scrutiny',
  PENDING_REVIEW: 'Pending Review',
  PENDING_DOCUMENTS: 'Pending Documents',
  APPROVED: 'Approved',
  RAISED_QUERY: 'Raised Query',
  REJECTED: 'Rejected',
  CANCELLED: 'Cancelled',
  CLOSED: 'Closed',
};

/** SRS UC-03: Admin actions (no Reject) */
export const ADMIN_ACTIONS = [
  { value: 'APPROVE', label: 'Approve' },
  { value: 'SEND_FOR_REVISION', label: 'Send for Revision' },
] as const;

export const REFERENCE_LINKS = {
  legacy: 'https://ekhanij.mp.gov.in/AppPrevious/HomePage.aspx',
  portal: 'https://mines.mp.gov.in',
};
