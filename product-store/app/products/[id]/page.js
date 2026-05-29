export const revalidate = 60;

export default async function ProductDetailsPage({
  params,
}) {
  const { id } = await params;

  const res = await fetch(
    `https://dummyjson.com/products/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const product = await res.json();

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
      }}
    >
      <h2>{product.title}</h2>

      <p>{product.description}</p>

      <p>
        <strong>Price:</strong> ${product.price}
      </p>

      <p>
        <strong>Category:</strong> {product.category}
      </p>

      <p>
        <strong>Rating:</strong> {product.rating}
      </p>
    </div>
  );
}