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
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Image
              src="/logo.jpg"
              alt="Products Store Logo"
              width={60}
              height={60}
              priority
            />

            <h1>Products Store</h1>
          </div>

          <nav
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            {user ? (
              <form action={logout}>
                <button
                  type="submit"
                  style={{
                    padding: "8px 12px",
                    background: "#111827",
                    color: "white",
                    border: "0",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </form>
            ) : (
              <Link href="/login?callbackUrl=/products">Login</Link>
            )}
          </nav>
        </header>

        <main
          style={{
            padding: "20px",
            minHeight: "80vh",
          }}
        >
          {children}
        </main>

        <footer
          style={{
            textAlign: "center",
            padding: "20px",
            borderTop: "1px solid #ddd",
          }}
        >
          © 2026 Products Store. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
