import React from "react";
import { Book } from "../types/Book";
import BookCard from "./BookCard";
import { Container } from "./Container";
import { LoadingState } from "./LoadingState";

interface BookListProps {
  title: string;
  books: Book[];
  icon?: React.ReactNode;
}

const BookList = ({ title, books, icon }: BookListProps) => {
  return (
    <>
      <Container>
        <div className="flex items-center ">
          {icon && <div className="mr-2">{icon}</div>}
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
      </Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-8 lg:px-16 xl:px-48 py-7">
        {books.map((book) => (
          <BookCard key={book?.id || ""} book={book} />
        ))}
      </div>
    </>
  );
};

export default BookList;
