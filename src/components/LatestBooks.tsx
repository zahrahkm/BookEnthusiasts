import { BuildingLibraryIcon } from "@heroicons/react/24/solid";
import { useLatestBooks } from "../hooks/useBooks";
import BookList from "./BookList";
import { LoadingState } from "./LoadingState";

const LatestBooks = () => {
  const { data: latestBooks, isLoading: isLoadingLatest } = useLatestBooks();

  if (isLoadingLatest) {
    return (
      <LoadingState
        items={3}
        itemHeight="h-80"
        mdCols={3}
        aria-label="Loading latest book releases"
      />
    );
  }

  return (
    <div className="bg-gray-100" aria-labelledby="latest-books-heading">
      <BookList
        title="Latest Releases"
        books={latestBooks || []}
        icon={
          <BuildingLibraryIcon
            className="h-6 w-6 text-indigo-600"
            aria-hidden="true"
          />
        }
      />
    </div>
  );
};

export default LatestBooks;
