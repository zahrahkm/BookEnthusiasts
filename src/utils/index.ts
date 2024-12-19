import { ApiResponseItem, Book } from "../types/Book";

export function getSingleBookPageUrl(bookId?: string): string {
  return `/books/${bookId}`;
}

export const pureTextContent = (description: string): string => {
  return description?.replace(/<[^>]*>/g, "") || "";
};

export const getAuthors = (authors: string[] | undefined): string => {
  if (authors && authors.length > 0) {
    return authors.join(", ");
  }
  return "Unknown Author";
};

export const getPublicationYear = (
  publishedDate: string | undefined
): string | null => {
  if (!publishedDate) return null;

  const date = new Date(publishedDate);
  return date.getFullYear().toString();
};

export const mapToBook = (item: ApiResponseItem): Book => ({
  id: item.id,
  title: item.volumeInfo.title,
  authors: item.volumeInfo.authors,
  publishedDate: item.volumeInfo.publishedDate,
  description: item.volumeInfo.description,
  imageLinks: item.volumeInfo.imageLinks,
  categories: item.volumeInfo.categories,
  averageRating: item.volumeInfo.averageRating,
  ratingsCount: item.volumeInfo.ratingsCount,
  pageCount: item.volumeInfo.pageCount,
  publisher: item.volumeInfo.publisher,
  language: item.volumeInfo.language,
});
