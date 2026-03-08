import { useParams } from "react-router-dom"
import { PageLayout } from "../common/PageLayout"
import { useEffect, useState } from "react";
import { getMovieById } from "../../api/tmdb";
import type { MovieDetailData } from "../../api/tmdb";


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
        <PageLayout>

            <h2>{movie.title}</h2>
            
        </PageLayout>
    )
    
  
}