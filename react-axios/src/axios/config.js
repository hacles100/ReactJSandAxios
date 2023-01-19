import axios from "axios";

const blogFecth = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export default blogFecth