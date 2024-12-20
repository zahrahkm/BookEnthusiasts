import React from "react";
import { Book } from "../types/Book";
import BookCard from "./BookCard";
import { Container } from "./Container";

interface BookListProps {
  title: string;
  books: Book[];
  icon?: React.ReactNode;
}

const BookList = ({ title, books, icon }: BookListProps) => {
  return (
    <>
      <Container>
        <div className="flex items-center" aria-label={`${title} Section`}>
          {icon && <div className="mr-2">{icon}</div>}
          <h2 className="text-2xl font-bold text-gray-900" role="heading">
            {title}
          </h2>
        </div>
      </Container>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-8 lg:px-16 xl:px-48 py-7"
        role="list"
        aria-label={`${title} Book List`}
      >
        {books.map((book) => (
          <div role="listitem" key={book?.id || ""}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </>
  );
};

export default BookList;
