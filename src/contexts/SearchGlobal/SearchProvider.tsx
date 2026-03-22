import { useState, useEffect ,useCallback, type ReactNode } from "react";
import { getMovies } from "../../api/tmdb";
import { MovieSearchContext } from "./SearchContext";
import type { Movie } from "../../api/tmdb";



export const SearchProvider = ({ children }: {children : ReactNode}) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(4);
  const [isDebouncing, setIsDebouncing] = useState<boolean>(false);
  
  const updateQuery = (newQuery: string) => {
    setQuery(newQuery);
    setVisibleCount(4);

    if (newQuery?.trim() === "") {
      setIsDebouncing(false) 
    } else {
      setIsDebouncing(true); 
    } 
  }

  const resetSearch = () => {
    updateQuery("");
    setMovies([]);
    setIsLoading(false);
  }

  const searchMovie = useCallback(async (query : string) => {

    setIsDebouncing(false);
    setIsLoading(true);

    const data = await getMovies(query);

    setMovies(data);
    setIsLoading(false);

  }, [])

  useEffect(() => {

          const timeoutId = setTimeout(() => {searchMovie(query)}, 500)
  
          return () => clearTimeout(timeoutId)
  
      }, [query, searchMovie])

  return (
  
    <MovieSearchContext.Provider value={{
        movies: movies,
        isLoading: isLoading,
        resetSearch,
        query,
        updateQuery,
        visibleCount,
        setVisibleCount,
        isDebouncing,
    }}>

      { children }

    </MovieSearchContext.Provider>

  )
};