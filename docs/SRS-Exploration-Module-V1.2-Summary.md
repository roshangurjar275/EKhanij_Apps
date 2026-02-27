# E-Khanij 2.0 SRS – Exploration & Resource Module (Summary)

**Source:** Exploration Module-SRS_V_1.2.docx  
**Govt. of Madhya Pradesh | MPS@DC | Document Version 1.2 (29-12-2025)**

---

## 1. Introduction & Purpose

The **Exploration and Resource Module** of e-Khanij 2.0 provides a digital framework for **onboarding and managing exploration agencies** under the Mineral Department (State Admin) in Madhya Pradesh. It covers:

- **Agency Onboarding:** Digital registration, verification, approval by State Admin
- **Monitoring:** Real-time tracking of exploration activities and progress
- **Reporting:** Submission of exploration reports, progress summaries, compliance reports
- **Workflow:** Approvals, submissions, reviews, notifications (no “Reject” – only Approve / Send for review)
- **GIS Integration:** KML-based mapping of project blocks, coordinates, boundaries
- **Document Management:** Upload/storage of KML, geological reports, previous work study
- **Compliance & Audit:** Traceability from onboarding to resource assessment

---

## 2. Stakeholders

| Stakeholder | Role |
|-------------|------|
| **State Admin (Mineral Department)** | Onboard agencies, review/approve/send for revision, configure workflow, monitor lifecycle |
| **Exploration Agencies** (GSI, MECL, MOIL, HCL, NMDC, ONGC, CMPDI, AMD, etc.) | Submit project details, upload KML/reports, update progress, address query feedback |
| **Directorate of Geology & Mining (DGM)** | Oversight, dashboards, compliance |

---

## 3. Functional Requirements (FR) – Summary

| ID | Requirement |
|----|--------------|
| FR-01 | Agency Onboarding (State Admin selects from list / add new, assign access) |
| FR-02 | Agency Login & Role-based Access Control |
| FR-03 | Capture Exploration Details: Project name, **multiple districts**, area, mineral type, mineral commodity |
| FR-04 | **Source of Funding** (not “Mode of Exploration”): NMEDT / MOU / Self-Funded |
| FR-05 | Level of Exploration: **G1, G2, G3, G4, NA** (NA and G1–G4 for PEL/PML) |
| FR-06 | Project Timeline: start date, completion date; **report submission date auto-recorded when GR is uploaded** |
| FR-07 | Document Uploads: previous work study (optional), **KML (mandatory)**, geological report |
| FR-08 | KML/GIS Integration and validation |
| FR-09 | **Budget Sanctioned**, **Budget Accrued**; project status: **WIP / Ongoing / Completed** |
| FR-10 | **Further Action by Agency** (mandatory): No Action / Upgradation |
| FR-11 | Conclusion/Recommendation (configurable word limit) |
| FR-12 | Save as Draft |
| FR-13 | Form validation (mandatory fields) |
| FR-14 | Admin: **Approve** or **Send for Revision** (no Reject); remarks logged |
| FR-15 | Submission tracking: onboarding → implementation → reporting → closure |
| FR-16 | Compliance tracking (documents, timelines, validation) |
| FR-17 | Dashboards for Admin and Agency (project count, status, pending actions) |
| FR-18 | Filters: mineral, district, status, agency, exploration level; **search; export Excel/PDF** |
| FR-19 | GIS map visualization from KML |
| FR-20 | Report generation: monthly, quarterly, annual, compliance |
| FR-21 | Notifications (pending actions, deadlines; **monthly reminder to agencies with ongoing work** for progress % and monthly report) |
| FR-22 | Audit trail (submissions, approvals, edits, uploads) |
| FR-23 | Data export: Excel, PDF, CSV |
| FR-24 | Project closure: final report upload → Admin approves closure |
| FR-25 | Historical data management |

---

## 4. Use Cases

- **UC-01 Onboard Exploration Agency:** Admin selects agency (or adds new); multiple entries per agency allowed; system shows agency details before onboarding.
- **UC-02 Submit Exploration Details:** Project name, multiple districts, area, **Source of Funding**, mineral type (PEL, Major, Minor, Others), mineral commodity (open text), Grade/Sub-grade (optional). For PEL/PML: G1–G4 or NA. **Budget Sanctioned**, **Budget Accrued**. Status: WIP/Ongoing/Completed. **Ongoing:** Approximate Progress %; **Completed:** KML upload, final monthly status report, previous work study; **GR submission date = auto when GR uploaded**. Toposheet Number, Resource Name, Tonnage; Conclusion & Recommendation for Auction. **Further Action by Agency:** No Action / Upgradation (mandatory in completed section).
- **UC-03 Admin Review & Approval:** Approve or **Sent for Revision** (no Reject); add remarks in pop-up.
- **UC-04 Update/Resubmit:** Agency edits in Draft or “Raised Query” state and resubmits.
- **UC-05 Generate Reports:** Monthly/Quarterly/Annual/Compliance; filters; export Excel/PDF.
- **UC-06 Project Closure:** Agency uploads final GR, marks complete; Admin approves closure; project archived.

---

## 5. Tentative Screens (SRS)

- Homepage  
- Login  
- **Agency Dashboard** (projects onboarded, status, pending actions)  
- **Onboarding Form** (Fill Agency Onboarding for Exploration – Exploration Area Details)  
- **State Admin** (pending review, Approve / Send for revision, filters, search, export, show GR per project, Further Action column)  

---

## 6. Key Field Names (from SRS rev 1.2)

- **Exploration Area Details** (not “Mine Details”)  
- **Project Name** (not “Block Name”)  
- **Source of Funding** (not “Mode of Exploration”): NMEDT / MOU / Self-Funded  
- **Mineral Commodity:** open text  
- **Mineral Commodity Type:** PEL, Major Mineral, Minor Mineral, Others  
- **Grade/Sub-grade:** optional, open text  
- **Budget Sanctioned** & **Budget Accrued** (no single “Budget”)  
- **Further Action by Agency:** No Action | Upgradation (mandatory in completed work status)  
- **Approximate Progress %** for ongoing projects  
- **Report submission date:** auto when GR uploaded (no manual date for completed)  
- Dashboard: **“Projects Onboarded”** (not “Application Submitted”); **Completed** (not “Approved”) for approved projects  
- State Admin: **Approve**, **Send for review**, **Feedback/Remarks** in pop-up; **no Reject**; filters/search; export Excel & PDF; **button to show GR** per project; **Further Action** column  

---

## 7. Non-Functional (NFR) – Summary

- Performance: concurrent access, page load &lt; 3 s, GIS/KML &lt; 5 s  
- Availability: 99.9% uptime, backup/failover  
- Security: RBAC, HTTPS, virus scan on uploads, audit logs  
- Usability: responsive (desktop, tablet, mobile), clear validation messages  
- Export: PDF, Excel, CSV  

This summary is for development reference; the authoritative source is the signed SRS document.
