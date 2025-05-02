import React from "react";

const blogs = [
  {
    title: "Mastering the MERN Stack in 2025 — A Practical Guide",
    description:
      "A hands-on guide to building modern web apps with MongoDB, Express, React, and Node.js.",
    slug: "mastering-mern-2025",
    date: "May 1, 2025",
  },
  {
    title: "Top 5 Mistakes Beginners Make in Full Stack MERN Development",
    description:
      "Every new MERN developer makes mistakes. Here are five common pitfalls and how to avoid them.",
    slug: "mern-mistakes",
    date: "April 28, 2025",
  },
  {
    title: "How to Build a Blog API Using MERN Stack",
    description:
      "Step-by-step tutorial to build a blog API with CRUD operations using MongoDB, Express, and Node.js.",
    slug: "mern-blog-api",
    date: "April 20, 2025",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen py-12 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        My Blog Posts
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 ease-in-out"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              {blog.title}
            </h2>
            <p className="text-gray-600 mt-2">{blog.description}</p>
            <p className="text-sm text-gray-400 mt-4">{blog.date}</p>
            <a
              href={`/blogs/${blog.slug}`}
              className="inline-block mt-4 text-indigo-600 hover:underline font-medium"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
