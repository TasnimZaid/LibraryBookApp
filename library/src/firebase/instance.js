import axios from "axios";

export default axios.create({
    baseURL : "https://book-catalog-d6c11-default-rtdb.firebaseio.com/"
})