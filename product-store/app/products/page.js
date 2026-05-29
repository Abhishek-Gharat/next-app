import Link from "next/link";

export const metadata = {
  title: "Products Store - Products List",
  description: "Browse all products",
};

export const revalidate = 60;

async function getProducts() {
  const res = await fetch(
    "https://dummyjson.com/products"
  );

  return res.json();
}

export default async function ProductsPage() {
  const data = await getProducts();

  return (
    <section>
      <div className="products-header">
        <div>
          <h1 className="page-title">Products</h1>
          <p className="page-lede">
            Explore the current product catalog.
          </p>
        </div>
      </div>

      <ul className="product-grid">
        {data.products.map((product) => (
          <li key={product.id} className="product-card">
            <Link href={`/products/${product.id}`}>
              <span>Product #{product.id}</span>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
