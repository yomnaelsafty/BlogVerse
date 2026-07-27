import BlogsList from "../components/BlogsList";
import { useOutletContext } from "react-router-dom";

function Home() {
  const { filteredBlogs, loading, error, setPage } = useOutletContext();
  return (
    <main className="max-w-7xl mx-auto px-6">
      <BlogsList
        blogs={filteredBlogs}
        loading={loading}
        error={error}
        setPage={setPage}
      />
    </main>
  );
}

export default Home;
