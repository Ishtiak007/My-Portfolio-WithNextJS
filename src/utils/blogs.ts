import blogData from "../../public/BlogData.json";

export function getAllBlogs() {
  return blogData;
}

export function getBlogById(id: string) {
  return blogData.find((blog) => blog.id === id);
}

export function getAllBlogIds() {
  return blogData.map((blog) => ({ id: blog.id }));
}
