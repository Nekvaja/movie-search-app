import { createContext, useContext } from "react";
import type { Movie } from "../../api/tmdb";




export interface ContextStructure {
  movies: Movie[],
  resetSearch: () => void,
  isLoading: boolean,
  query: string,
  updateQuery: (newQuery: string) => void,
  visibleCount: number,
  setVisibleCount: React.Dispatch<React.SetStateAction<number>>,
  isDebouncing: boolean,
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
  
  
  
  









