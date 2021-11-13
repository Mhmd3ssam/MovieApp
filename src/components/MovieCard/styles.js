import {StyleSheet} from 'react-native';
import { COLORS, FONTS } from '../../common';

export default StyleSheet.create({
  container: {
    backgroundColor:COLORS.spaceCadet,
    flexDirection:'row',
    height: 160,
    marginTop: 100,
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  leftContainer:{
      backgroundColor:COLORS.spaceCadet,
      width:'40%',
      height:'100%',
      borderRadius:10,

  },
  rightContainer:{
    width:'60%',
    height:'100%',
  },
  contentContainer:{
    marginTop:20,
    },
    headerText:{
      color:COLORS.white,
      fontFamily: FONTS.bold,
      marginStart:20,
      fontSize:20
    },
    releaseText:{
      color:COLORS.white,
      fontFamily: FONTS.medium,
      marginStart:25,
      marginTop:14,
      fontSize:16
    },
    images:{
      width:130,
      height:190,
      position:'absolute',
      borderRadius:15,
      bottom:42,
      left:15
    }
});