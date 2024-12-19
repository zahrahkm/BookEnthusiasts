import { NoResult } from "./noResult/NoResult";
export const Error = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <NoResult />
        <h2 className="text-xl font-semibold text-gray-900 mt-4">
          An error occurred
        </h2>
        <p className="mt-2 text-gray-600">Please try again later</p>
      </div>
    </div>
  );
};