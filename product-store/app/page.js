import Link from "next/link";

export const metadata = {
  title: "Products Store - Home",
  description: "Welcome to Products Store",
};

export default function HomePage() {
  return (
    <section className="hero">
      <h1>Welcome to the Products Store</h1>
      <p>
        Browse a clean catalog of products and open any item to see its
        details.
      </p>
      <div className="hero-actions">
        <Link className="button" href="/products">
          View Products
        </Link>
        <Link className="button-secondary" href="/login?callbackUrl=/products">
          Login
        </Link>
      </div>
    </section>
  );
}
