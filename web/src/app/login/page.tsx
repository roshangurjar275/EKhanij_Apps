import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-sm space-y-6">
      <h1 className="text-2xl font-bold text-stone-900">Login</h1>
      <div className="card p-6">
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-700">
              Email / User ID
            </label>
            <input
              id="email"
              type="text"
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
              required
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
            Sign in
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-stone-500">
          Don’t have an account?{' '}
          <Link href="/register" className="text-primary-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
