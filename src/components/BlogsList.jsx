import BlogCard from "./BlogCard";

function BlogsList({ blogs, loading, error, setPage }) {
  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  const loadMoreHandler = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-8">
      <div className="grid grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            image={blog.image}
            category={blog.category}
            authorImage={blog.authorImage}
            authorName={blog.authorName}
            date={blog.date}
          />
        ))}
      </div>
      <button
        className="text-[#696A75] text-base font-medium border border-[#696A754D] rounded-md px-4 py-2 mt-4 mx-auto block transition-colors duration-200 hover:bg-[#4B6BFB] hover:text-white hover:border-[#4B6BFB]"
        onClick={loadMoreHandler}
      >
        Load More
      </button>
    </div>
  );
}

export default BlogsList;
