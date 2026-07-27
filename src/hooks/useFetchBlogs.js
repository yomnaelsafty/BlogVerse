import { useState, useEffect } from "react";

function capitalize(str) {
  if (!str) return "General";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function useFetchBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch(
          `https://dev.to/api/articles?per_page=9&page=${page}`,
        );
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();

        const formatted = data.map((post) => ({
          id: post.id,
          image:
            post.cover_image ||
            post.social_image ||
            "https://placehold.co/360x240",
          category: capitalize(post.tag_list?.[0]),
          title: post.title,
          authorImage: post.user?.profile_image || "https://placehold.co/40x40",
          authorName: post.organization?.name || post.user?.name || "Unknown",
          date: post.readable_publish_date,
        }));

        setBlogs((prev) => (page === 1 ? formatted : [...prev, ...formatted]));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, [page]);

  const filteredBlogs =
    !searchTerm || searchTerm === ""
      ? blogs
      : blogs.filter((blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()),
        );

  return {
    blogs,
    loading,
    error,
    page,
    setPage,
    filteredBlogs,
    setSearchTerm,
  };
}

export default useFetchBlogs;
