import { useParams } from "react-router-dom"
import { PageLayout } from "../common/PageLayout"
import { useEffect, useState } from "react";
import { getMovieById } from "../../api/tmdb";
import type { MovieDetailData } from "../../api/tmdb";
import { MovieHeader } from "../movieDetail/MovieHeader";
import { MovieDetailProvider } from "../../contexts/MovieDetail/MovieDetailProvider";
import { MovieMainInfo } from "../movieDetail/MovieMainInfo";
import { MovieDetails } from "../movieDetail/MovieDetails";

export const MovieDetail = () => {

    const {id} = useParams();
    const [movie, setMovie] = useState<MovieDetailData | null>(null);


    useEffect(() => {

        if (!id) return;

        const loadMovie = async () => {
            const data = await getMovieById(Number(id));
            setMovie(data)
        }

        loadMovie()
        
    }, [id])
    
    if (!movie) {
        return (
        <PageLayout>
   
            <p>loading...</p>
            
        </PageLayout>
        )
    } 
        return (
        <PageLayout variant="detail">
            <MovieDetailProvider movie={movie}>
                  <MovieHeader/>
                  <MovieMainInfo/>
                  <MovieDetails/>
            </MovieDetailProvider>
          
        </PageLayout>
    )
    
  
}