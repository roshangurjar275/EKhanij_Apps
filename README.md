# E-Khanij 2.0 — Exploration & Resource Module

Web and mobile apps for the **Exploration and Resource** module of E-Khanij 2.0, aligned with **SRS V1.2** (Exploration Module-SRS_V_1.2.docx, Govt. of Madhya Pradesh, MPS@DC). Summary: `docs/SRS-Exploration-Module-V1.2-Summary.md`.

Reference portals:

- **E-Khanij (Legacy):** [ekhanij.mp.gov.in](https://ekhanij.mp.gov.in/AppPrevious/HomePage.aspx) — Madhya Pradesh Mineral Resources Department  
- **E-Khanij 2.0 / Mines portal:** [mines.mp.gov.in](https://mines.mp.gov.in)

Features (per SRS): **Agency onboarding**, **Fill Agency Onboarding Form** (Exploration Area Details, Project Name, multiple districts, Source of Funding, Budget Sanctioned/Accrued, Level of Exploration G1–G4/NA, KML mandatory, Further Action by Agency), **State Admin** (Approve / Send for Revision with remarks—no Reject), **Projects Onboarded** dashboard, filters and export (Excel/PDF), and field verification (mobile).

## Repository structure

- **`web/`** — Next.js 16 web app (Exploration dashboard, applications, blocks, status, login/register)
- **`mobile/`** — Expo (React Native) app for Android/iOS (Exploration screens + field verification with location)
- **`packages/shared/`** — Shared TypeScript types and constants (`@ekhanij/shared`)

## Prerequisites

- **Node.js** 18+
- **npm** (or yarn/pnpm)
- For mobile: **Expo Go** on device/simulator, or **Android Studio** / **Xcode** for builds

## Quick start

### 1. Install dependencies (root)

```bash
cd "c:\Users\user\Desktop\EKhanij Apps"
npm install
```

### 2. Run the web app

```bash
npm run dev:web
```

Open [http://localhost:3000](http://localhost:3000). You’ll see:

- Home with links to Exploration
- **Exploration** dashboard
- **My Applications** (list, detail, new application)
- **Exploration blocks** (EL blocks by tranche/status)
- **Check status** (application ID + acknowledgement date)
- **Login** / **Register** (lessee-style registration)

### 3. Run the mobile app

```bash
npm run dev:mobile
```

Then:

- Scan the QR code with **Expo Go** (Android) or Camera (iOS), or  
- Press `a` for Android emulator / `i` for iOS simulator

Screens:

- Home → Dashboard, My Applications, Exploration Blocks, Check Status, **Field verification** (location + remarks)

## Mobile assets (Expo)

The mobile app currently uses Expo default icons/splash assets and exports native bundles only (`ios`, `android`).
If custom branding assets are added later, place them under `mobile/assets/` and reference them from `mobile/app.json`.

## Tech stack

| Layer    | Web              | Mobile        |
|----------|------------------|---------------|
| Framework | Next.js 16 (App Router) | Expo SDK 52, Expo Router |
| Language | TypeScript       | TypeScript    |
| UI       | Tailwind CSS     | React Native StyleSheet |
| Shared   | `@ekhanij/shared` | `@ekhanij/shared` |

## Reference links

- E-Khanij (Legacy): https://ekhanij.mp.gov.in/AppPrevious/HomePage.aspx  
- Mines portal (E-Khanij 2.0): https://mines.mp.gov.in  
- Exploration Licence regime: MMDR Amendment Act 2023, Mineral (Auction) Amendment Rules 2023  

## Next steps (integration)

- Replace mock data with real APIs (applications, blocks, status, auth).
- Connect web and mobile to the same backend (e.g. REST or GraphQL).
- Add GIS/map integration and photo upload for field verification.
- Enforce auth (e.g. JWT/session) for “My Applications” and sensitive actions.
