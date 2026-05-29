import { auth } from "@/app/api/auth/[...nextauth]/route";

export const middleware = auth((req) => {
  // You can add custom logic here if needed
  return req;
});

export const config = {
  matcher: ["/dashboard/:path*"],
};