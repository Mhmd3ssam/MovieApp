import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const MovieRating = ({movieData}) => {
    return (
        <View style={styles.container} > 
        <View style={styles.ratingContainer}>
            <Text style={styles.ratingHeaderText}>{'IMDB'}</Text>
            <Text style={styles.ratingHeaderText}>{"Rotten Tomatoes"}</Text>
            <Text style={styles.ratingHeaderText}>{"Metacritic"}</Text>
        </View>

        <View style={styles.ratingContainer}>
           <Text style={styles.ratingText}>{`${movieData.imdbRating}/10`}</Text>
            <Text style={styles.ratingText}>{`${movieData.Metascore}%`}</Text>
            <Text style={styles.ratingText}>{`${movieData.Metascore}/100`}</Text>
        </View>
       
  
        </View>
    )
}

export {MovieRating};
