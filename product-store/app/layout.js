import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Products Store",
  description: "Products Store App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Products Store</h1>

          <nav>
            <Link href="/">Home</Link>
            {" | "}
            <Link href="/products">Products</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          © 2026 Products Store
        </footer>
      </body>
    </html>
  );
}