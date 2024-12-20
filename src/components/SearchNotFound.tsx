import { NoResult } from "./noResult/NoResult";

export const SearchNotFound = () => {
  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      role="alert"
      aria-live="assertive"
    >
      <div className="text-center">
        <NoResult />
        <h2 className="text-xl font-semibold text-gray-900 mt-4" role="heading">
          No results found
        </h2>
        <p className="mt-2 text-gray-600">
          Try searching with different keywords
        </p>
      </div>
    </div>
  );
};
