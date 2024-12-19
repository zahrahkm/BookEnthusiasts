import { StarIcon } from "@heroicons/react/24/solid";

interface RatingDisplayProps {
  averageRating: number;
  ratingsCount?: number;
}

export const RatingDisplay = ({
  averageRating,
  ratingsCount,
}: RatingDisplayProps) => {
  return (
    <div className="flex items-center" title="Rating">
      <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
      <span>{averageRating}/5</span>
      {ratingsCount && (
        <span className="text-gray-500 text-sm ml-1">
          ({ratingsCount} ratings)
        </span>
      )}
    </div>
  );
};
