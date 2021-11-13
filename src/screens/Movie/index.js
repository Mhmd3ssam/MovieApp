import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { getMovieDetails } from '../../services/getMovieDetails';
import { MovieInfo } from '../../components/MovieInfo/'
import { MovieRating } from '../../components/MovieRating/'
import { MovieSummary } from '../../components/MovieSummary/'


const Movie = () => {

    const [movieData, setMovieData] = useState([]);

    const route = useRoute();
    console.log(route.params.id);
    let movieId = route.params.id;

    useEffect(() => {

        (async (movieId) => {

            const res = await getMovieDetails(movieId)
            console.log(res.Ratings[0].Value)
            setMovieData(res)
        })(movieId)

    }, [])

    return (
        <ScrollView>
            <MovieInfo movieData={movieData} />
            <MovieRating movieData={movieData} />
            <MovieSummary headline="Summary" movieData={movieData.Plot} />
            <MovieSummary headline="Director" movieData={movieData.Director} />
            <MovieSummary headline="Actors" movieData={movieData.Actors} />
        </ScrollView>
    )
}

export default Movie
