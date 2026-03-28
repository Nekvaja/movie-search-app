import type { ReactNode } from "react";
import { PopularMoviesContext } from "./PopularMoviesContext";
import { useEffect, useState } from "react"
import { getPopularMovies } from "../../api/tmdb"



export const PopularMoviesProvider = ({ children } : {children : ReactNode}) => {

        const [ popularMovies, setPopularMovies ] = useState<string[]>([])
    
        useEffect(() => {
            const loadPopularMovies = async () => {
                const data = await getPopularMovies()
    
                if (data) {
                    setPopularMovies(data)
                }
            }
            
            loadPopularMovies()
        }, [])

    return (
        <PopularMoviesContext.Provider value={popularMovies}>
            {children}
        </PopularMoviesContext.Provider>
    )
}