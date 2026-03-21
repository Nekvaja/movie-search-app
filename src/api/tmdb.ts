const baseUrl = "https://api.themoviedb.org/3";
const imageBaseUrl = "https://image.tmdb.org/t/p/w342";

interface ApiMovie {
    id: number;
    title: string;
    release_date: string;
    vote_average: number;
    poster_path: string;
}

export interface Movie {
    id: number;
    title: string;
    year: string;
    rate: number;
    imageUrl: string;
}

interface ApiResponseStructure {
    results: ApiMovie[],
}



export const getMovies = async (query : string) : Promise<Movie[]> => {

    const searchParams = new URLSearchParams({
        query: query,
    })

    const response = await fetch(`${baseUrl}/search/movie?${searchParams}`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch movies")
    };

    const json : ApiResponseStructure = await response.json();

    const data : Movie[] = json.results.map((apiMovieData : ApiMovie) => {
        return {
            id: apiMovieData.id,
            title: apiMovieData.title,
            year: (apiMovieData.release_date).slice(0, 4),
            rate: Math.round((apiMovieData.vote_average) * 10),
            imageUrl: `${imageBaseUrl}${apiMovieData.poster_path}`,
        }
    })

    return data;

};

    interface ApiMovieDetailData {
    title: string;
    poster_path: string,
    genres: {
        name: string;
    }[];
    production_countries: {
        id: number;
        name: string;
    }[];
    release_date: string;
    runtime: number,
    tagline: string,
    overview: string;
    vote_average: number,
    credits: {
        cast: {
        name: string;
        }[];
        crew: {
            name: string;
            job: string;
        }[];
    };
}

export interface MovieDetailData {
    title: string,
    posterPath: string,
    genres: string[],
    countries: string[],
    year: string,
    runtime: number,
    tagline: string,
    overview: string,
    rate: number,
    actors: string[],
    director: string[],
    screenwriters: string[],
}

export const getMovieById = async (id : number) : Promise<MovieDetailData> => {

    const response = await fetch(`${baseUrl}/movie/${id}?append_to_response=credits`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch movies")
    };

    const json : ApiMovieDetailData = await response.json();

    const formatCountry = (country: {name: string}) => {
        if (country.name === "United States of America") {
            return "USA"
        } return country.name;
    }
    

    const data : MovieDetailData = {
        title: json.title,
        posterPath: `${imageBaseUrl}${json.poster_path}`,
        genres: json.genres.map((genre) => genre.name),
        countries: json.production_countries.map((country) => formatCountry(country)),
        year: json.release_date.slice(0,4),
        runtime: json.runtime,
        tagline: json.tagline,
        overview: json.overview,
        rate: Math.round((json.vote_average) * 10),
        actors: json.credits.cast.map((actor) => actor.name),
        director: json.credits.crew.filter((member) => (member.job.toLowerCase()==="director")).map((member) => member.name),
        screenwriters: json.credits.crew.filter((member) => (member.job.toLowerCase()==="screenplay")).map((member) => member.name)
    }

    console.log(json)
    console.log(data)
    return data;
}


