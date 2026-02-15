import { createContext, useContext } from "react";
import type { Movie } from "../api/tmdb";


export interface SearchStructure {
    movies: Movie[];
    isLoading: boolean;   
}

export interface ContextStructure extends SearchStructure {
  searchMovie: (query : string) => Promise<void> | null
}

export const MovieSearchContext = createContext<ContextStructure | null>(null)

export const useSearch = () => {
  const context = useContext(MovieSearchContext);

  if (!context) {
    throw new Error("useSearch must be used within SearchProvider")
  } else {
    return context;
  }
}
  
  
  
  









