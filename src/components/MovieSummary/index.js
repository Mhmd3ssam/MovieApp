import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const MovieSummary = ({headline, movieData}) => {
    return (
        <View style={styles.container} > 
       <Text style={styles.headerText}>{headline}</Text>
       <Text style={styles.text}>{movieData}</Text>
        </View>
    )
}

export {MovieSummary};