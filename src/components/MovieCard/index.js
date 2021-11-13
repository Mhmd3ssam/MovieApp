import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import { dummy_data, IMAGES } from '../../common'
import FastImage from 'react-native-fast-image';


const MovieCard = ({ data, onPress }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.leftContainer} />
            <View style={styles.rightContainer}>
                <View style={styles.contentContainer} >
                    <Text style={styles.headerText}>{data.Title}</Text>
                    <Text style={styles.releaseText}>{`Released: ${data.Year}`}</Text>
                </View>
            </View>
            <FastImage
                source={
                    data.Poster !== 'N/A' ?
                        { uri: data.Poster }
                        : IMAGES.noMoviePhoto
                }
                style={styles.images}
            />
        </Pressable>
    )
}

export { MovieCard };
