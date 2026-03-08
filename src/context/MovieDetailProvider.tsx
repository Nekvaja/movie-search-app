import { MovieDetailContext } from "./MovieDetailContext";
import type { ReactNode } from "react";
import type { MovieDetailData } from "../api/tmdb"; 

interface Props {
    movie: MovieDetailData,
    children: ReactNode,
}

export const MovieDetailProvider = ({ children, movie } : Props) => {
    return (
        <MovieDetailContext.Provider value={{movie}}>
            {children}
        </MovieDetailContext.Provider>
    )
}