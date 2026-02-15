import { useState, useCallback, type ReactNode } from "react";
import { getMovies } from "../api/tmdb";
import { MovieSearchContext } from "./SearchContext";
import type { SearchStructure } from "./SearchContext";



export const SearchProvider = ({ children }: {children : ReactNode}) => {
  const [searchDetails, setSearchDetails] = useState<SearchStructure>({
    movies: [],
    isLoading: true,
  });

  const searchMovie = useCallback(async (query : string) => {

    const data = await getMovies();
    console.log(query)

    setSearchDetails({
            movies: data,
            isLoading: false,
        })
  }, [])

  return (
  
    <MovieSearchContext.Provider value={{
        movies: searchDetails.movies,
        isLoading: searchDetails.isLoading,
        searchMovie,
    }}>

      { children }

    </MovieSearchContext.Provider>

  )
};