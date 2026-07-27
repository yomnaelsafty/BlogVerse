import Logo from "./Logo";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

function Header({ setSearchTerm }) {
  const onSearchChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <header className="bg-white text-black border-none ">
      <div className="max-w-6xl mx-auto px-16 py-4 flex items-center justify-between gap-10 mb-2">
        <Logo />
        <div>
          <Link
            to="/"
            className="text-[#3B3C4A] text-base font-normal transition-colors duration-200 hover:text-[#4B6BFB]"
          >
            Home
          </Link>
        </div>
        <SearchInput onChange={onSearchChange} />
      </div>
    </header>
  );
}

export default Header;
