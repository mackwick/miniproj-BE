import { db } from "../src/utils/db.server";

type Author = {
  firstName: string;
  lastName: string;
};

type Book = {
  title: string;
  isFiction: boolean;
};

async function seed() {
  await Promise.all(
    getAuthors().map((author) => {
      return db.author.create({
        data: {
          firstName: author.firstName,
          lastName: author.lastName,
        },
      });
    })
  );
  const author = await db.author.findFirst({
    where: {
      firstName: "Tamsyn",
    },
  });

  await Promise.all(
    getBooks().map((book) => {
      const { title, isFiction } = book;
      return db.book.create({
        data: {
          title,
          isFiction,
          authorId: author.id,
        },
      });
    })
  );
}

seed();

function getAuthors(): Author[] {
  return [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "William",
      lastName: "Shakespeare",
    },
    {
      firstName: "Tamsyn",
      lastName: "Muir",
    },
  ];
}

function getBooks(): Book[] {
  return [
    {
      title: "Gideon the Ninth",
      isFiction: true,
    },
    {
      title: "Harrow the Ninth",
      isFiction: true,
    },
    {
      title: "Nona the Ninth",
      isFiction: true,
    },
  ];
}
