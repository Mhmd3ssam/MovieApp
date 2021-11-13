import React from 'react';
import {TextInput, View, Pressable} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import {COLORS} from '../../common';

const SearchBar = ({value, onChange, onPress}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.inputContainer}
        placeholder={'Enter movie name ...'}
        placeholderTextColor={COLORS.sun}
      />
      <Pressable onPress={onPress} style={styles.iconContainer}>
        <Icon name="magnifying-glass" size={30} color={COLORS.sun} />
      </Pressable>
    </View>
  );
};

export {SearchBar};