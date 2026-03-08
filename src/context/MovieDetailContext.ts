import { createContext, useContext } from "react";
import type { MovieDetailData } from "../api/tmdb";

export interface MovieContextStructure {
    movie: MovieDetailData,
}

export const MovieDetailContext = createContext<MovieContextStructure | null>(null)

export const useMovieDetail = () => {
    const context = useContext(MovieDetailContext);

    if (!context) {
        throw new Error("useSearch must be used within SearchProvider")
  } else {
        return context;
    }
}

