export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  return (
    <main
      style={{
        border: "2px solid black",
        padding: "20px",
        width: "fit-content",
      }}
    >
      <h1>
        Product {id} details page — content coming soon!
      </h1>
    </main>
  );
}