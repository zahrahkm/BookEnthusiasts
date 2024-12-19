import { Book } from "../../types/Book";
import {
  BookOpenIcon,
  CalendarIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/solid";
import { BuildingLibraryIcon } from "@heroicons/react/24/outline";
import { getAuthors, getPublicationYear, pureTextContent } from "../../utils";
import { CategoryList } from "../CategoryList";
import { RatingDisplay } from "../RatingDisplay";

type BookInfoProps = {
  book: Book;
};

export const BookInfo = ({ book }: BookInfoProps) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-6"
      role="region"
      aria-labelledby="book-title"
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0" aria-labelledby="book-cover">
          <img
            src={
              book.imageLinks?.thumbnail ||
              "https://via.placeholder.com/200x300?text=No+Cover"
            }
            alt={`Cover of ${book.title}`}
            className="w-48 h-auto rounded-lg shadow-md"
            aria-hidden="true"
          />
        </div>

        <div className="flex-grow">
          <h1
            id="book-title"
            className="text-3xl font-bold text-gray-900 mb-2"
            aria-live="polite"
          >
            {book.title}
          </h1>

          <div className="space-y-4">
            {book.authors && (
              <p className="text-lg" aria-labelledby="book-authors">
                <span className="font-semibold">
                  {getAuthors(book.authors)}
                </span>
              </p>
            )}

            <div className="flex flex-wrap gap-4">
              {book.averageRating && (
                <RatingDisplay
                  averageRating={book.averageRating}
                  ratingsCount={book.ratingsCount}
                  aria-label="Book rating"
                />
              )}

              {book.publishedDate && (
                <div
                  className="flex items-center"
                  title="Publication Date"
                  aria-labelledby="publication-date"
                >
                  <CalendarIcon
                    className="h-5 w-5 text-gray-400 mr-1"
                    aria-hidden="true"
                  />
                  <span>{getPublicationYear(book.publishedDate)}</span>
                </div>
              )}

              {book.pageCount && (
                <div
                  className="flex items-center"
                  title="Page Count"
                  aria-labelledby="page-count"
                >
                  <BookOpenIcon
                    className="h-5 w-5 text-gray-400 mr-1"
                    aria-hidden="true"
                  />
                  <span>{book.pageCount} pages</span>
                </div>
              )}

              {book.language && (
                <div
                  className="flex items-center"
                  title="Language"
                  aria-labelledby="language"
                >
                  <GlobeEuropeAfricaIcon
                    className="h-5 w-5 text-gray-400 mr-1"
                    aria-hidden="true"
                  />
                  <span>{book.language.toUpperCase()}</span>
                </div>
              )}

              {book.publisher && (
                <div
                  className="flex items-center"
                  title="Publisher"
                  aria-labelledby="publisher"
                >
                  <BuildingLibraryIcon
                    className="h-5 w-5 text-gray-400 mr-1"
                    aria-hidden="true"
                  />
                  <span>{book.publisher}</span>
                </div>
              )}
            </div>

            {book.description && (
              <div className="mt-4" aria-labelledby="book-description">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-700 font-sans font-normal leading-relaxed">
                  {pureTextContent(book.description)}
                </p>
              </div>
            )}

            {book.categories && (
              <div
                className="flex flex-wrap gap-2 mt-4"
                aria-labelledby="categories"
              >
                <CategoryList categories={book.categories || []} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
