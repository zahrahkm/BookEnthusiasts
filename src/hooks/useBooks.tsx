import { useQuery } from "@tanstack/react-query";
import {
  fetchLatestBooks,
  searchBooks,
  fetchPopularBooks,
  fetchBookDetails,
} from "../api/books";
import { Book } from "../types/Book";

export const useLatestBooks = () => {
  return useQuery<Book[]>({
    queryKey: ["books", "latest"],
    queryFn: () => fetchLatestBooks(3),
    staleTime: 1000 * 60 * 5,
  });
};

export const useSearchBooks = (searchTerm: string | null) => {
  return useQuery<Book[]>({
    queryKey: ["books", "q", searchTerm],
    queryFn: () => searchBooks(searchTerm || "", 9),
    enabled: !!searchTerm && searchTerm.trim().length > 0,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
};

export const usePopularBooks = () => {
  return useQuery<Book[]>({
    queryKey: ["books", "popular"],
    queryFn: () => fetchPopularBooks(10),
    staleTime: 1000 * 60 * 5,
  });
};

export const useBookDetails = (bookId: string) => {
  return useQuery<Book>({
    queryKey: ["book", bookId],
    queryFn: () => fetchBookDetails(bookId),
    enabled: !!bookId,
    staleTime: 1000 * 60 * 5,
  });
};
