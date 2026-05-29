import { logout } from "../actions/auth";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key-change-in-production"
);

async function getUserFromToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const verified = await jwtVerify(token, secret);
    return verified.payload;
  } catch (err) {
    return null;
  }
}

export default async function DashboardPage() {
  const user = await getUserFromToken();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Dashboard
              </h1>
            </div>
            <div className="flex items-center">
              <form action={logout}>
                <button
                  type="submit"
                  className="ml-4 px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Logout
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Welcome to your Dashboard
              </h2>
              {user && (
                <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-4">
                  <p className="text-gray-700">
                    <span className="font-semibold">Username:</span>{" "}
                    {user.username}
                  </p>
                  <p className="text-gray-700 text-sm mt-2">
                    Token issued at:{" "}
                    {new Date(
                      (user.iat || 0) * 1000
                    ).toLocaleString()}
                  </p>
                </div>
              )}
              <p className="text-gray-600">
                You are now logged in. This is a protected page that
                requires authentication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}