import { createContext, useContext } from "react";
import type { Movie } from "../api/tmdb";




export interface ContextStructure {
  movies: Movie[],
  isLoading: boolean,
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
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
  
  
  
  









