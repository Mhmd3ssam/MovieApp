import React from 'react';
import { FlatList } from 'react-native';
import { MovieCard } from '..';
import styles from './styles';



function MovieList({ data, onPress }) {
    const renderItem = ({ item }) => <MovieCard data={item} onPress={() => onPress(item)} />
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}
        />

    )
}

export { MovieList };
