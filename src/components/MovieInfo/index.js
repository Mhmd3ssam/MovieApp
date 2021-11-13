import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { IMAGES } from '../../common'
import FastImage from 'react-native-fast-image';


const MovieInfo = ({ movieData }) => {
    return (
        <View style={styles.container} >
            <View style={styles.leftContainer} />
            <View style={styles.rightContainer}>
                <View style={styles.contentContainer} >
                    <Text style={styles.headerText}>{movieData.Title}</Text>
                    <Text style={styles.releaseText}>{movieData.Released}</Text>
                    <Text style={styles.releaseText}>{movieData.Genre}</Text>
                    <Text style={styles.releaseText}>{movieData.Runtime}</Text>
                </View>
            </View>
            <FastImage
                source={
                    movieData.Poster !== 'N/A' ?
                        { uri: movieData.Poster }
                        : IMAGES.noMoviePhoto
                }
                style={styles.images}
            />
        </View>
    )
}

export { MovieInfo };
