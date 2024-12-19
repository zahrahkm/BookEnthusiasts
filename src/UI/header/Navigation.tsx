import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="flex items-center" aria-label="Main navigation">
      <Link
        to="/books"
        className="px-3 py-2 rounded-md text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50"
      >
        Books
      </Link>
    </nav>
  );
};
