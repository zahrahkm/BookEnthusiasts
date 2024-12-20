import { useParams, useNavigate } from "react-router-dom";
import { useBookDetails } from "../hooks/useBooks";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { BookInfo } from "../components/BookDetails/BookInfo";
import { Container } from "../components/Container";
import { LoadingState } from "../components/LoadingState";

export const SingleBookPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: book, isLoading, isError } = useBookDetails(id || "");

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError || !book) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Book not found
        </h2>
        <p className="text-gray-600 mb-6">
          The book you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
          aria-label="Go back to previous page"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Go back
        </button>
      </div>
    );
  }

  return (
    <Container>
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-8"
        aria-label="Go back to previous page"
      >
        <ArrowLeftIcon className="h-4 w-4 mr-2" />
        Back
      </button>
      <BookInfo book={book} />
    </Container>
  );
};
