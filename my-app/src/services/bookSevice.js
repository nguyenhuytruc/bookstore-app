import axios from "axios";
import { BOOK_API } from "./common";

class BookSevice{
    static getBook(){
        return axios.get(BOOK_API);
    }
}

export default BookSevice;