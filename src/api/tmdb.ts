const baseUrl = "https://api.themoviedb.org/3";

interface ApiMovie {
    id: number;
    title: string;
    release_date: string;
    vote_average: number;
}

export interface Movie {
    id: number;
    title: string;
    year: string,
    rate: number,
}

interface ApiResponseStructure {
    results: ApiMovie[],
}

export const getMovies = async () : Promise<Movie[]> => {
    const response = await fetch(`${baseUrl}/search/movie?query=Jack+Reacher`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
        }
    });

    const json : ApiResponseStructure = await response.json();

    const data : Movie[] = json.results.map((apiMovieData : ApiMovie) => {
        return {
            id: apiMovieData.id,
            title: apiMovieData.title,
            year: (apiMovieData.release_date).slice(0, 4),
            rate: Math.round((apiMovieData.vote_average) * 10),
        }
    })

    return data;

};

