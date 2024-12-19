import { BookOpenIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2" aria-label="Home">
      <BookOpenIcon className="h-8 w-8 text-indigo-600" />
      <span className="text-xl font-bold text-gray-900">BookEnthusiasts</span>
    </Link>
  );
};
