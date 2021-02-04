import axios from "axios";

const BookLibrary = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
});

const apiKey = "AIzaSyBMOpH-LN0m4-qfOymXaFyBNIr0Za3P8tE";

const getBooksByTerm = (SearchTerm, setBooks, start_index, setTotalItems) => {
  BookLibrary.get( '/',{
    params: {
      q: SearchTerm.replace(/ /g, '+'),
      key: apiKey,
      maxResults: 20,
      startIndex: start_index
    },
  }).then((response) => {
    setBooks(response.data.items);
    setTotalItems(response.data.totalItems);
  });
};

const getBooksByTermSorted = (SearchTerm, setBooks, start_index, setTotalItems, sort_by) => {
  BookLibrary.get( '/',{
    params: {
      q: SearchTerm.replace(/ /g, '+'),
      key: apiKey,
      maxResults: 20,
      startIndex: start_index,
      orderBy: sort_by
    },
  }).then((response) => {
    try {
    setBooks(response.data.items);
    setTotalItems(response.data.totalItems);
      
    } catch (error) {
      console.log(error)
      
    }
    
  });
};

const getBooksDetails = (bookID, setCurrentBook) => {
  BookLibrary.get("/" + bookID, {
    params: {
      api_key: apiKey,
    },
  }).then((response) => {
    setCurrentBook(response.data);
  });
};

export { getBooksByTerm, getBooksDetails, getBooksByTermSorted };
