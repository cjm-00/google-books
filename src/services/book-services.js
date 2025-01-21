export const fetchBooks = async (searchTerm) => {
  const key = import.meta.env.VITE_BOOKS_API;
  // let searchTerm = "friday";
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${key}&maxResults=30`
    );
    const data = await response.json();
    const bookListResults = cleanData(data.items);
    return bookListResults;
  } catch (error) {
    console.error("Data Fetch Error :c");
    return [];
  }

  // console.log(bookListResults);
};

const cleanData = (books) => {
  return books.map((book) => ({
    id: book.id,
    title: book.volumeInfo.title,
    author: book.volumeInfo.authors
      ? book.volumeInfo.authors.join(", ")
      : "Unkown Author",
    rating: book.volumeInfo.averageRating || "--",
    categories: book.volumeInfo.categories || "--",
    description: book.volumeInfo.description,
    pages: book.volumeInfo.pageCount || "--",
    date: book.volumeInfo.publishedDate || "--",
    publisher: book.volumeInfo.publisher || "--",
    publicDomain: book.accessInfo.publicDomain,
    mature: book.volumeInfo.maturityRating,
    cover: book.volumeInfo.imageLinks?.thumbnail
      ? book.volumeInfo.imageLinks.thumbnail + "&fife=w800"
      : "http://lgimages.s3.amazonaws.com/nc-md.gif",
  }));
};

// export default fetchBooks;
