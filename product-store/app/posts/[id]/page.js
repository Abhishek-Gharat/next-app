
export async function generateMetadata({ params }) {
  const { id } = await params;

  return {
    title: `Post ${id} - My Blog`,
    description: `This is post ${id}`,
  };
}

export default async function PostPage({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1>Post {id}</h1>
      <p>This is dynamic post page.</p>
    </div>
  );
}