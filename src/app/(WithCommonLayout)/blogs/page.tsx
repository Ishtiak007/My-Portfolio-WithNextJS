import { BlogCard3D } from "@/components/modules/BlogCard";
import { getAllBlogs } from "@/utils/blogs";

export default function BlogListPage() {
  const blogs = getAllBlogs();

  return (
    <div className="min-h-screen bg-white/5 border-white/10 backdrop-blur-lg py-12 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center text-fuchsia-500 mt-16">
        My Blog Posts
      </h1>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {blogs.map((blog) => (
          <BlogCard3D
            key={blog.id}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            link={`/blogs/${blog.id}`}
          />
        ))}
      </div>
    </div>
  );
}
