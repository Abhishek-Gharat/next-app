import Image from "next/image";

export const revalidate = 60;

export default async function ProductDetailsPage({
  params,
}) {
  const { id } = await params;

  const res = await fetch(
    `https://dummyjson.com/products/${id}`
  );

  const product = await res.json();

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
      }}
    >
      <Image
        src="/product.jpg"
        alt="Product"
        width={300}
        height={200}
      />

      <h2>{product.title}</h2>

      <p>{product.description}</p>

      <p>
        <strong>Price:</strong> ${product.price}
      </p>

      <p>
        <strong>Category:</strong> {product.category}
      </p>
    </div>
  );
}