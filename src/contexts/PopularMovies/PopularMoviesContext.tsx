import { createContext, useContext } from "react";

export const PopularMoviesContext = createContext<string[] | null>(null);

export const usePopularMovies = () => {
    const context = useContext(PopularMoviesContext);

    if (!context) {
        throw new Error("usePopularMovies must be used within SearchProvider")
    } else {
        return context;
    }
}