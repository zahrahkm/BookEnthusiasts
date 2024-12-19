import { useSearchParams } from "react-router-dom";
import { useSearchBooks } from "../hooks/useBooks";
import { HeroBanner } from "../components/hero";
import { SearchResults } from "../components/SearchResults";
import LatestBooks from "../components/LatestBooks";

export const HomePage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q")?.trim() || "";

  const {
    data: searchResults,
    isLoading: isLoadingSearch,
    isError,
  } = useSearchBooks(searchQuery);
  console.log(searchResults);
  return (
    <>
      <HeroBanner />

      {searchQuery && (
        <SearchResults
          query={searchQuery}
          books={searchResults}
          isLoading={isLoadingSearch}
          isError={isError}
        />
      )}

      <LatestBooks />
    </>
  );
};
