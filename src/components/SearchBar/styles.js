import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../common';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.spaceCadet,
    height: 60,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  inputContainer: {
    backgroundColor: COLORS.spaceCadet,
    width: '80%',
    paddingStart: 16,
    fontFamily: FONTS.medium,
    height: '100%',
    fontSize: 16,
    color:COLORS.white
  },
  iconContainer: {
    borderStartColor: COLORS.sun,
    borderStartWidth: 1,
    backgroundColor: COLORS.cloudBurst,
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});