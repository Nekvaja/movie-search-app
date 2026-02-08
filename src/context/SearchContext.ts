import { createContext, useContext } from "react";
import type { Movie } from "../api/tmdb";


export interface SearchStructure {
    movies: Movie[];
    isLoading: boolean;   
}

 export const MovieSearchContext = createContext<SearchStructure>({
    movies: [],
    isLoading: true,
  });

export const useSearch = () => useContext(MovieSearchContext);









