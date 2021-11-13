import {StyleSheet} from 'react-native';
import { COLORS, FONTS } from '../../common';

export default StyleSheet.create({
  container: {
    backgroundColor:COLORS.spaceCadet,
    marginTop: 20,
    borderStartColor: COLORS.sun,
    borderStartWidth: 3,
  },
  headerText:{
      color:COLORS.white,
      fontFamily: FONTS.bold,
      fontSize:18,
      padding:10,
    },
    text:{
      color:COLORS.white,
      fontFamily: FONTS.medium,
      fontSize:14,
      paddingStart:10,
      paddingLeft:10,
      paddingBottom:10

    }
});