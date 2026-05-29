"use server";

import { cookies } from "next/headers";
import { createToken } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function login(formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  if (
    username === "admin" &&
    password === "123456"
  ) {
    const token = await createToken({
      username,
    });

    const cookieStore = await cookies();

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: false,
      path: "/",
    });

    redirect("/dashboard");
  }

  throw new Error("Invalid credentials");
}

export async function logout() {
  const cookieStore = await cookies();

  cookieStore.delete("token");

  redirect("/login");
}