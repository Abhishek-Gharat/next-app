"use server";

import { signOut as nextAuthSignOut } from "@/app/api/auth/[...nextauth]/route";

// This file is kept for reference but NextAuth handles sign-in/sign-out
// Use the NextAuth functions directly from the route handler

export async function logout() {
  // Call NextAuth signOut
  await nextAuthSignOut({ redirectTo: "/login" });
}
