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
    <div
      className="flex items-center"
      title="Rating"
      aria-label={`Average rating is ${averageRating} out of 5`}
    >
      <StarIcon className="h-5 w-5 text-yellow-400 mr-1" aria-hidden="true" />
      <span aria-hidden="true">{averageRating}/5</span>
      {ratingsCount && (
        <span
          className="text-gray-500 text-sm ml-1"
          aria-label={`${ratingsCount} total ratings`}
        >
          ({ratingsCount} ratings)
        </span>
      )}
    </div>
  );
};
