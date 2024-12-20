import { useNavigate } from "react-router-dom";
import { usePopularBooks } from "../hooks/useBooks";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Container } from "../components/Container";
import { LoadingState } from "../components/LoadingState";
import { getAuthors, getSingleBookPageUrl } from "../utils";

export const BooksPage = () => {
  const navigate = useNavigate();
  const { data: books, isLoading } = usePopularBooks();

  if (isLoading) {
    return <LoadingState items={10} mdCols={1} />;
  }

  if (!books || books.length === 0) {
    return (
      <Container>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Popular Books</h1>
        <p className="text-gray-500">No books available at the moment.</p>
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Popular Books</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200" role="list">
          {books.map((book) => (
            <li
              key={book.id}
              className="hover:bg-gray-50 cursor-pointer transition-colors"
              onClick={() => navigate(getSingleBookPageUrl(book.id))}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  navigate(getSingleBookPageUrl(book.id));
                }
              }}
              aria-label={`View details for ${book.title} by ${getAuthors(
                book.authors
              )}`}
            >
              <div className="px-4 py-4 sm:px-6 flex items-center">
                <img
                  src={
                    book.imageLinks?.thumbnail ||
                    "https://via.placeholder.com/50x75?text=No+Cover"
                  }
                  alt={`${book.title} cover`}
                  className="h-16 w-12 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {getAuthors(book.authors)}
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
