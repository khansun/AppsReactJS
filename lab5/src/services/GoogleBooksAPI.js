import axios from 'axios';

const APIKey = "AIzaSyBMOpH-LN0m4-qfOymXaFyBNIr0Za3P8tE";

const BookLib = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
});

const getBooksBySearch = (SearchTerm, setBooks, sortTerm, ItemPerPage, firstitem, setPagelist) => {
    BookLib.get('', {
        params: {
            q: SearchTerm,
            key: APIKey,
            maxResults: ItemPerPage,
            orderBy: sortTerm,
            startIndex: firstitem,

        },
    }).then((response) => {
        console.log(response.data);
        setBooks(response.data);
        let pageList = []
        for (let i = 0; i <= response.data.totalItems; i += ItemPerPage) {
            pageList.push(i)
        }
        setPagelist(pageList)
    })
}

export { getBooksBySearch };