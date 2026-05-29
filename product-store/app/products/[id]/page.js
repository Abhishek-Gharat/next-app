export const revalidate = 60;

async function getProduct(id) {
  const res = await fetch(
    `https://dummyjson.com/products/${id}`
  );

  return res.json();
}

export async function generateMetadata({
  params,
}) {
  const { id } = await params;

  const product = await getProduct(id);

  return {
    title: `${product.title} - Products Store`,
    description: product.description,
  };
}

export default async function ProductDetailsPage({
  params,
}) {
  const { id } = await params;

  const product = await getProduct(id);

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
        <strong>Category:</strong>{" "}
        {product.category}
      </p>
    </div>
  );
}