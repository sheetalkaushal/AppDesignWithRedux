import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../../style/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

export const style = StyleSheet.create({
  mainConatiner: {
    backgroundColor: colors.PURPLECOLOR,
    flex: 1,
  },
  navContainer: {
    marginTop: moderateScale(20),
    marginHorizontal: moderateScale(20),
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgStyle: {alignSelf: 'center'},
  SomeiView: {
    marginTop: moderateScale(10),
    alignItems: 'center',
  },
  Smoothetxt: {
    fontSize: 30,
    color: colors.BLACK,
  },
  sreachView:{
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  orderitem:{
    marginTop:moderateScale(20)
  }
});
