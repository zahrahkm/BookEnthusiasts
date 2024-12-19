import { Book } from "../types/Book";
import { mapToBook } from "../utils";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export const fetchLatestBooks = async (limit: number): Promise<Book[]> => {
  const response = await fetch(
    `${BASE_URL}?q=subject:fiction&orderBy=newest&maxResults=${limit}`
  );
  const data = await response.json();

  return data.items.map(mapToBook);
};

export const searchBooks = async (
  query: string,
  limit: number
): Promise<Book[]> => {
  const response = await fetch(
    `${BASE_URL}?q=${encodeURIComponent(query)}&maxResults=${limit}`
  );
  const data = await response.json();

  return data.items.map(mapToBook);
};

export const fetchPopularBooks = async (limit: number): Promise<Book[]> => {
  const response = await fetch(
    `${BASE_URL}?q=subject:fiction&orderBy=relevance&maxResults=${limit}`
  );
  const data = await response.json();

  return data.items.map(mapToBook);
};

export const fetchBookDetails = async (bookId: string): Promise<Book> => {
  const response = await fetch(`${BASE_URL}/${bookId}`);
  if (!response.ok) {
    throw new Error("Book not found");
  }
  const data = await response.json();

  return mapToBook(data);
};
