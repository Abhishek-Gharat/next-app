import { cookies } from "next/headers";
import { jwtVerify, SignJWT } from "jose";

export const AUTH_COOKIE = "product-store-auth";

const encoder = new TextEncoder();
const secret = encoder.encode(
  process.env.JWT_SECRET ||
    process.env.NEXTAUTH_SECRET ||
    "product-store-development-secret"
);

export const demoUser = {
  id: "1",
  username: "admin",
  name: "Admin User",
};

export function isValidCallbackUrl(callbackUrl) {
  return (
    typeof callbackUrl === "string" &&
    callbackUrl.startsWith("/") &&
    !callbackUrl.startsWith("//")
  );
}

export async function createToken(user) {
  return new SignJWT({
    id: user.id,
    username: user.username,
    name: user.name,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(secret);
}

export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE)?.value;

  if (!token) {
    return null;
  }

  return verifyToken(token);
}
