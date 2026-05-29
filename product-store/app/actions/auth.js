"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  AUTH_COOKIE,
  createToken,
  demoUser,
  isValidCallbackUrl,
} from "@/lib/auth";

export async function login(formData) {
  const username = formData.get("username");
  const password = formData.get("password");
  const requestedCallbackUrl = formData.get("callbackUrl");
  const callbackUrl = isValidCallbackUrl(requestedCallbackUrl)
    ? requestedCallbackUrl
    : "/products";

  if (username !== "admin" || password !== "123456") {
    redirect(
      `/login?error=invalid&callbackUrl=${encodeURIComponent(callbackUrl)}`
    );
  }

  const token = await createToken(demoUser);
  const cookieStore = await cookies();

  cookieStore.set(AUTH_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  redirect(callbackUrl);
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE);
  redirect("/login");
}
