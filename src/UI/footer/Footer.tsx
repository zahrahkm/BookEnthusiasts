import { BookOpenIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <BookOpenIcon className="h-6 w-6 text-indigo-600" />
            <span className="text-lg font-semibold text-gray-900">
              BookEnthusiasts
            </span>
          </div>
          <nav className="flex space-x-4" aria-label="Footer navigation">
            <Link to="/" className="text-gray-500 hover:text-gray-900">
              Home
            </Link>
            <Link to="/books" className="text-gray-500 hover:text-gray-900">
              Books
            </Link>
          </nav>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} BookEnthusiasts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
