import Image from "next/image";

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
    <article className="details-panel">
      <div className="product-image-wrap">
        <Image
          src="/product.jpg"
          alt={product.title}
          width={520}
          height={340}
          priority
          className="product-image"
        />
      </div>

      <h2>{product.title}</h2>

      <p>{product.description}</p>

      <div className="product-meta">
        <div className="meta-item">
          <strong>Price</strong>
          ${product.price}
        </div>

        <div className="meta-item">
          <strong>Category</strong>
          {product.category}
        </div>
      </div>
    </article>
  );
}
