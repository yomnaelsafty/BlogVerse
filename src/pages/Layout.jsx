import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import useFetchBlogs from "../hooks/useFetchBlogs";

function Layout() {
  const blogsData = useFetchBlogs();
  return (
    <div className="bg-white min-h-screen">
      <Header setSearchTerm={blogsData.setSearchTerm} />
      <div>
        <Outlet context={blogsData} />
      </div>
    </div>
  );
}

export default Layout;
