import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { logout } from "@/app/actions/auth";
import { getCurrentUser } from "@/lib/auth";

export const metadata = {
  title: "Products Store",
  description: "Products Store App",
};

export default async function RootLayout({ children }) {
  const user = await getCurrentUser();

  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="brand">
            <Image
              src="/logo.jpg"
              alt="Products Store Logo"
              width={60}
              height={60}
              priority
            />

            <h1>Products Store</h1>
          </div>

          <nav className="site-nav">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            {user ? (
              <form action={logout}>
                <button type="submit" className="nav-button">
                  Logout
                </button>
              </form>
            ) : (
              <Link href="/login?callbackUrl=/products">Login</Link>
            )}
          </nav>
        </header>

        <main className="site-main">{children}</main>

        <footer className="site-footer">
          © 2026 Products Store. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
