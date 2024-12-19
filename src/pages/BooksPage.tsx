import { useNavigate } from "react-router-dom";
import { usePopularBooks } from "../hooks/useBooks";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Container } from "../components/Container";
import { LoadingState } from "../components/LoadingState";
import { getSingleBookPageUrl } from "../utils";

export const BooksPage = () => {
  const navigate = useNavigate();
  const { data: books, isLoading } = usePopularBooks();

  if (isLoading) {
    return <LoadingState items={10} mdCols={1} />;
  }

  return (
    <Container>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Popular Books</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {books?.map((book) => (
            <li
              key={book.id}
              className="hover:bg-gray-50 cursor-pointer transition-colors"
              onClick={() => navigate(getSingleBookPageUrl(book.id))}
            >
              <div className="px-4 py-4 sm:px-6 flex items-center">
                <img
                  src={
                    book.imageLinks?.thumbnail ||
                    "https://via.placeholder.com/50x75?text=No+Cover"
                  }
                  alt=""
                  className="h-16 w-12 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {book.authors?.join(", ") || "Unknown Author"}
                  </p>
                </div>
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
