import Link from "next/link";

export const revalidate = 60;

async function getProducts() {
  const res = await fetch(
    "https://dummyjson.com/products"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function ProductsPage() {
  const data = await getProducts();

  return (
    <div>
      <h2>Products</h2>

      <ul>
        {data.products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}