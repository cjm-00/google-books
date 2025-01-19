export const fetchBooks = async () => {
  const key = import.meta.env.VITE_BOOKS_API;
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=colour+of+magic&key=${key}`
    );
    const data = await response.json();
    console.log(data.items);

    const bookListResults = cleanData(data.items);
    return bookListResults;
  } catch (error) {
    console.error("cannot fetch from api:", error);
    return [];
  }

  // console.log(bookListResults);
};

const cleanData = (books) => {
  return books.map((book) => ({
    id: book.id,
    title: book.volumeInfo.title,
    author: book.volumeInfo.authors.join(", "),
    rating: book.volumeInfo.averageRating,
    categories: book.volumeInfo.categories,
    description: book.volumeInfo.description,
    pages: book.volumeInfo.pageCount,
    date: book.volumeInfo.publishedDate,
    publisher: book.volumeInfo.publisher,
    publicDomain: book.accessInfo.publicDomain,
    mature: book.volumeInfo.maturityRating,
    //   thumb: book.volumeInfo.imageLinks.smallThumbnail,
    //   cover: book.volumeInfo.imageLinks.thumbnail,
  }));
};

// export default fetchBooks;
