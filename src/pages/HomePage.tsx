import { useSearchParams } from "react-router-dom";
import { HeroBanner } from "../components/hero";
import { SearchResults } from "../components/SearchResults";
import LatestBooks from "../components/LatestBooks";
import { useSearchBooks } from "../hooks/useBooks";

export const HomePage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q")?.trim() || "";

  const {
    data: searchResults,
    isLoading: isLoadingSearch,
    isError,
  } = useSearchBooks(searchQuery);

  return (
    <>
      <HeroBanner />

      {searchQuery && (
        <SearchResults
          query={searchQuery}
          books={searchResults}
          isLoading={isLoadingSearch}
          isError={isError}
          aria-label="Latest book releases"
        />
      )}

      <LatestBooks />
    </>
  );
};
