export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-stone-500">
            E-Khanij 2.0 — Exploration Module. Mineral Resources Department / Ministry of Mines.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="https://ekhanij.mp.gov.in/AppPrevious/HomePage.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline"
            >
              E-Khanij (Legacy)
            </a>
            <a
              href="https://mines.mp.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline"
            >
              Mines Portal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
