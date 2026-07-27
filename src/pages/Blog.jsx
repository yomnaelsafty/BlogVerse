import { useParams } from "react-router-dom";
import useFetchSingleBlog from "../hooks/useFetchSingleBlog";

function Blog() {
  const { id } = useParams();
  const { blog, loading, error } = useFetchSingleBlog(id);

  console.log(blog?.category);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  if (!blog) return null;

  return (
    <div className="bg-white min-h-screen max-w-3xl mx-auto px-6 py-8">
      <span className="inline-block w-fit text-sm font-medium text-white bg-[#4B6BFB] px-3 py-1 rounded-md">
        {blog.category}
      </span>

      <h1 className="font-work-sans text-2xl font-semibold w-full leading-7 tracking-normal text-left text-[#141624] mt-3">
        {blog.title}
      </h1>

      <div className="flex items-center gap-4 mt-4">
        <img
          src={blog.authorImage}
          alt="Author"
          className="w-9 h-9 rounded-full object-cover"
        />
        <div className="text-base font-normal leading-6 text-[#97989F] flex gap-8">
          <span>{blog.authorName}</span>
          <span>{blog.date}</span>
        </div>
      </div>

      <img
        src={blog.image}
        alt="Blog"
        className="w-full h-[462px] rounded-xl object-cover mt-6"
      />

      <div
        className="prose max-w-none mt-6 font-serif text-lg font-normal leading-8 tracking-normal text-[#3B3C4A] prose-p:my-4"
        dangerouslySetInnerHTML={{ __html: blog.bodyHtml }}
      />
    </div>
  );
}

export default Blog;
