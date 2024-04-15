//DEPENDENCIES
import { db } from "../utils/db.server";

type BookRead = {
  id: number;
  title: string;
  isFiction: boolean;
  authorId: number;
};

export const listBooks = async (): Promise<BookRead[]> => {
  return db.book.findMany({
    select: {
      id: true,
      title: true,
      isFiction: true,
      authorId: true,
    },
  });
};
