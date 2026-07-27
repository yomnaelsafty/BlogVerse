import { useState, useEffect } from "react";

function capitalize(str) {
  if (!str) return "General";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function useFetchSingleBlog(id) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchBlog() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://dev.to/api/articles/${id}`);
        if (!res.ok) throw new Error("Failed to fetch the article");
        const data = await res.json();

        const tagsArray =
          typeof data.tag_list === "string"
            ? data.tag_list.split(",").map((tag) => tag.trim())
            : data.tag_list || [];

        if (!ignore) {
          setBlog({
            id: data.id,
            title: data.title,
            image: data.cover_image || data.social_image,
            category: capitalize(tagsArray[0]),
            bodyHtml: data.body_html,
            authorImage: data.user?.profile_image,
            authorName: data.organization?.name || data.user?.name || "Unknown",
            date: data.readable_publish_date,
          });
        }
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchBlog();
    return () => {
      ignore = true;
    };
  }, [id]);

  return { blog, loading, error };
}

export default useFetchSingleBlog;
