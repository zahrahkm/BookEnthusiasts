export type Book = {
  id: string;
  title: string;
  authors?: string[];
  publishedDate?: string;
  description?: string;
  imageLinks?: {
    thumbnail: string;
    smallThumbnail?: string;
  };
  categories?: string[];
  averageRating?: number;
  ratingsCount?: number;
  pageCount?: number;
  publisher?: string;
  language?: string;
};

export type ApiResponseItem = {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate?: string;
    description?: string;
    imageLinks?: {
      thumbnail: string;
      smallThumbnail?: string;
    };
    categories?: string[];
    averageRating?: number;
    ratingsCount?: number;
    pageCount?: number;
    publisher?: string;
    language?: string;
  };
};
