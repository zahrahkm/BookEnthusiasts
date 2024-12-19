import { useNavigate } from "react-router-dom";
import { Container } from "./Container";
import { getSingleBookPageUrl } from "../utils";
import { Book } from "../types/Book";

type BookCardProps = {
  book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      <div
        className="flex flex-col items-center space-y-4"
        role="article"
        aria-labelledby={`book-title-${book.id}`}
      >
        <div
          onClick={() => navigate(getSingleBookPageUrl(book.id))}
          className="shadow-lg cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl w-72 h-96 flex justify-center items-center card-backgroungcolor"
          aria-hidden="true"
        >
          <img
            src={book.imageLinks?.thumbnail}
            alt={`Cover of ${book.title}`}
            className="h-72 w-auto object-contain"
          />
        </div>

        <h3
          id={`book-title-${book.id}`}
          className="text-lg lg:text-xl font-semibold text-gray-900 text-center hover:text-indigo-600 transition-colors"
          onClick={() => navigate(getSingleBookPageUrl(book.id))}
          aria-label={`Title: ${book.title}`}
        >
          {book.title}
        </h3>
      </div>
    </Container>
  );
};

export default BookCard;
