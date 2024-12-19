import { Book } from "../types/Book";
import BookList from "./BookList";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { SearchNotFound } from "./SearchNotFound";
import { Error } from "./Error";
import { LoadingState } from "./LoadingState";

interface SearchResultsProps {
  query: string;
  books: Book[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

export const SearchResults = ({
  query,
  books,
  isLoading,
  isError,
}: SearchResultsProps) => {
  if (isLoading) {
    return <LoadingState items={3} itemHeight="h-80" mdCols={3} />;
  }
  if (!isLoading && (!books || books.length === 0)) {
    return <SearchNotFound />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <div>
      <BookList
        title={`Search Results for "${query}"`}
        books={books || []}
        icon={<MagnifyingGlassIcon className="h-6 w-6 text-indigo-600" />}
      />
    </div>
  );
};
