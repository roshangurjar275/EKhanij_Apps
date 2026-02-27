/** Application types for E-Khanij 2.0 Exploration Module - aligned with SRS V1.2 */

export type ApplicationType = 'RP' | 'PL' | 'ML' | 'QL' | 'EL';

export type ApplicationStatus =
  | 'DRAFT'
  | 'SUBMITTED'
  | 'UNDER_SCRUTINY'
  | 'PENDING_DOCUMENTS'
  | 'APPROVED'
  | 'REJECTED'
  | 'CANCELLED';

/** SRS: Source of Funding (FR-04, UC-02) - replaces "Mode of Exploration" */
export type SourceOfFunding = 'NMEDT' | 'MOU' | 'SELF_FUNDED';

/** SRS: Level of Exploration (FR-05) - G1/G2/G3/G4; NA for PEL/PML */
export type LevelOfExploration = 'G1' | 'G2' | 'G3' | 'G4' | 'NA';

/** SRS: Mineral Commodity Type (FR-03, UC-02) */
export type MineralCommodityType = 'PEL' | 'MAJOR_MINERAL' | 'MINOR_MINERAL' | 'OTHERS';

/** SRS: Project status (FR-09) - WIP / Ongoing / Completed */
export type ProjectStatus = 'WIP' | 'ONGOING' | 'COMPLETED';

/** SRS: Further Action by Agency (FR-10) - mandatory for completed */
export type FurtherActionByAgency = 'NO_ACTION' | 'UPGRADATION';

/** SRS: Admin action (UC-03) - Approve or Send for Revision (no Reject) */
export type AdminReviewAction = 'APPROVE' | 'SEND_FOR_REVISION';

export interface ExplorationApplication {
  id: string;
  applicationNumber: string;
  type: ApplicationType;
  status: ApplicationStatus;
  mineral: string;
  district: string;
  area: string;
  areaHectares: number;
  applicantName: string;
  submittedAt: string;
  lastUpdated: string;
  remarks?: string;
}

/** SRS: Exploration Project - core entity for Exploration & Resource Module */
export interface ExplorationProject {
  id: string;
  projectName: string;
  agencyId: string;
  agencyName: string;
  districts: string[];
  area: string;
  areaHectares?: number;
  sourceOfFunding: SourceOfFunding;
  mineralCommodityType: MineralCommodityType;
  mineralCommodity: string;
  gradeSubGrade?: string;
  levelOfExploration: LevelOfExploration;
  budgetSanctioned: number;
  budgetAccrued: number;
  projectStatus: ProjectStatus;
  approximateProgressPercent?: number;
  furtherActionByAgency?: FurtherActionByAgency;
  implementationStartDate?: string;
  completionDate?: string;
  reportSubmissionDate?: string;
  toposheetNumber?: string;
  resourceName?: string;
  tonnage?: string;
  conclusionRecommendation?: string;
  status: 'DRAFT' | 'SUBMITTED' | 'PENDING_REVIEW' | 'APPROVED' | 'RAISED_QUERY' | 'CLOSED';
  submittedAt?: string;
  lastUpdated: string;
  adminRemarks?: string;
  kmlUploaded: boolean;
  previousWorkStudyUploaded: boolean;
  geologicalReportUploaded: boolean;
  monthlyReportUploaded?: boolean;
}

/** SRS: Exploration Agency (UC-01) - multiple entries per agency allowed */
export interface ExplorationAgency {
  id: string;
  name: string;
  code?: string;
  description?: string;
  isOnboarded: boolean;
  onboardedAt?: string;
  contactEmail?: string;
  contactPhone?: string;
}

export interface ExplorationBlock {
  id: string;
  blockCode: string;
  state: string;
  district: string;
  mineral: string;
  areaHectares: number;
  tranche: number;
  status: 'OPEN' | 'AUCTION_LIVE' | 'ALLOTTED' | 'CLOSED';
  auctionEndDate?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'STATE_ADMIN' | 'AGENCY' | 'DGM' | 'ADMIN' | 'FIELD_OFFICER';
  organisation?: string;
  agencyId?: string;
  mobile?: string;
}

export interface FieldVerificationRecord {
  id: string;
  applicationId: string;
  officerId: string;
  visitDate: string;
  location: { lat: number; lng: number };
  photos: string[];
  remarks: string;
  status: 'PENDING' | 'COMPLETED' | 'DISCREPANCY';
}
