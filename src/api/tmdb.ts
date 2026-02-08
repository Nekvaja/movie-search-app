const baseUrl = "https://api.themoviedb.org/3";

export interface Movie {
    id: number;
    title: string;
}

interface ApiResponseStructure {
    results: Movie[],
}

export const getMovies = async () => {
    const response = await fetch(`${baseUrl}/search/movie?query=Jack+Reacher`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
        }
    });

    const data : ApiResponseStructure = await response.json();

    return data.results;

};

