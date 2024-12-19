import { SearchBar } from "../SearchBar";

export const HeroBanner = () => {
  return (
    <div className="relative bg-cover bg-center py-32 background-banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Discover Your Next Literary Adventure
        </h1>
        <p className="text-xl text-white mb-8">
          Explore thousands of books and find your perfect read
        </p>
        <SearchBar />
      </div>
    </div>
  );
};