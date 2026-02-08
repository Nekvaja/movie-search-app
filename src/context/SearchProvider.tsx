import { useState, useEffect, type ReactNode } from "react";
import { getMovies } from "../api/tmdb";
import { MovieSearchContext } from "./SearchContext";
import type { SearchStructure } from "./SearchContext";


export const SearchProvider = ({ children }: {children : ReactNode}) => {
  const [searchDetails, setSearchDetails] = useState<SearchStructure>({
    movies: [],
    isLoading: true,
  });

   
    useEffect(() => {
      const loadData = async () => {
        const data = await getMovies();

        console.log(data);
        setSearchDetails({
            movies: data,
            isLoading: false,
        })
      };

      loadData();

      
    }, []);
  

  return (
  
    <MovieSearchContext.Provider value={{
        movies: searchDetails.movies,
        isLoading: searchDetails.isLoading,
    }}>

      { children }

    </MovieSearchContext.Provider>

  )
};