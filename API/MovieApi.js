import axios from "axios";


const url = "http://www.omdbapi.com/?i=tt3896198&apikey=979839b9"

export const getMovies = async (title) =>{
    const res = axios.get(`${url}&s=${title}`).then(response => console.log(response.data));
    return res.json();
}


