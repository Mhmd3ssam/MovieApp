import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';



const Header = ({text}) => {
    return (
        <View style={styles.container}>
           <Text style={styles.headerText}>{text}</Text> 
           <View style={styles.divider} />              
        </View>
    )
}

export {Header};
