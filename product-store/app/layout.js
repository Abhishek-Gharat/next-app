import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "Products Store",
  description: "Products Store App",
};

export default function RootLayout({ children }) {
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
            }}
          >
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
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