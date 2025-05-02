import { getBlogById, getAllBlogIds } from "@/utils/blogs";
import Image from "next/image";

// This must be an async component if you're using async functions inside
export default async function BlogDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const blog = await getBlogById(params.id); // await for async data loading

  if (!blog) return <div className="p-10 text-center">Blog not found.</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 mt-20 dark:bg-gray-200 rounded-md my-4">
      <Image
        src={blog.image}
        alt={blog.title}
        width={1000}
        height={400}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      <h1 className="text-4xl font-bold mb-4 dark:text-gray-900">
        {blog.title}
      </h1>
      <p className="text-gray-600 mb-6">{blog.description}</p>
      <div className="prose prose-lg dark:prose-invert whitespace-pre-wrap dark:text-black">
        {blog.content}
      </div>
    </div>
  );
}

// Generate static paths for all blog IDs
export async function generateStaticParams() {
  const blogs = await getAllBlogIds();
  return blogs.map((blog) => ({ id: blog.id }));
}
