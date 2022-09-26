const endpoint = "http://www.omdbapi.com/?apikey=979839b9"

export const getAllMovies = async (title) =>{
    const result = await fetch(`${endpoint}&s=${title}`)
    return result.json();
}

export const getMovie = async (id) => {
    const result = await fetch(`${endpoint}&i=${id}`)
    return result.json();
}