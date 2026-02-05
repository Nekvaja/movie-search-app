const baseUrl = "https://api.themoviedb.org/3";

export const getMovies = async () => {
    const response = await fetch(`${baseUrl}/movie/popular`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
        }
    });

    const data = await response.json();

    return data;

};

