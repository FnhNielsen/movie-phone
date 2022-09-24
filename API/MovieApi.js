const url = "http://www.omdbapi.com/?i=tt3896198&apikey=979839b9"

export const getMovies = async (title) =>{
    const res = fetch(`${url}&s=${title}`)
    .then(res => console.log(res.data))
    .then((res) => res.json());
}