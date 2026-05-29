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
    <div>
      <h1>Products</h1>

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