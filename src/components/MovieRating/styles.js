import {StyleSheet} from 'react-native';
import { COLORS, FONTS } from '../../common';

export default StyleSheet.create({
  container: {
    backgroundColor:COLORS.spaceCadet,
    height: 120,
    marginTop: 20,
  },
  ratingContainer:{
      backgroundColor:COLORS.spaceCadet,
      flexDirection:'row',
      width:'100%',
      height:'50%',
      marginRight:10,
      textAlign:'center'
      },
    ratingHeaderText:{
      color:COLORS.sun,
      fontFamily: FONTS.bold,
      fontSize:15,
      paddingRight:25,
      paddingLeft:25,
      paddingTop:15,
      textAlign:'center'
    },
    ratingText:{
      color:COLORS.white,
      fontFamily: FONTS.medium,
      fontSize:15,
      paddingRight:40,
      paddingLeft:40,
    }
});