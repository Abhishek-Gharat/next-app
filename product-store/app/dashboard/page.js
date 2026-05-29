"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

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
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="ml-4 px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Welcome to your Dashboard, {session.user?.name || session.user?.username || "User"}!
              </h2>

              <div className="bg-blue-50 border border-blue-200 rounded p-4 space-y-3">
                <div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Email:</span> {session.user?.email}
                  </p>
                </div>
                {session.user?.username && (
                  <div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Username:</span> {session.user.username}
                    </p>
                  </div>
                )}
                <div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Provider:</span> {session.user?.provider || "Unknown"}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 mt-6">
                You are now logged in. This is a protected page that requires authentication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}