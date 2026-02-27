import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-sm space-y-6">
      <h1 className="text-2xl font-bold text-stone-900">Lessee / User registration</h1>
      <p className="text-stone-600">
        Register with your name, address, PAN and contact to obtain login credentials (as per
        E-Khanij lessee registration).
      </p>
      <div className="card p-6">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-stone-700">
              Name / Organisation
            </label>
            <input
              id="name"
              type="text"
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="pan" className="block text-sm font-medium text-stone-700">
              PAN number
            </label>
            <input
              id="pan"
              type="text"
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
              placeholder="e.g. AAAAA9999A"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-stone-700">
              Address
            </label>
            <textarea
              id="address"
              rows={2}
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-stone-700">
              Mobile
            </label>
            <input
              id="mobile"
              type="tel"
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-stone-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
              required
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-stone-500">
          Already have an account?{' '}
          <Link href="/login" className="text-primary-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
