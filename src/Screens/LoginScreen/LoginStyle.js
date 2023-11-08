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
    flex: 1,
    backgroundColor: colors.PURPLECOLOR,
  },
  navConatiner: {
    marginTop: moderateScale(40),
    marginHorizontal: moderateScale(30),
  },
  inputView: {
    marginTop: moderateVerticalScale(60),
  },
  welcomeView: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(100),
  },
  Welcometxt: {
    color: colors.WHITE,
    fontSize: 30,
    fontWeight: '800',
  },
  Detailstxt: {
    color: colors.WHITE,
    fontSize: 16,
    fontWeight: '400',
  },
  BtnView: {
    marginTop: moderateVerticalScale(50),
  },
  AccountView: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: moderateVerticalScale(20),
  },
  Agreeterms: {
    marginTop: moderateVerticalScale(25),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  signagree: {
    flexDirection: 'row',
    marginLeft: moderateScale(80),
    gap: 4,
  },
  Alreadytxt: {
    color: colors.WHITE,
    fontSize: 14,
    fontWeight: '400',
  },
  Signuptxt: {
    color: colors.WHITE,
    fontSize: 14,
  },
  signinLeft: {
    height: verticalScale(1),
    width: '28%',
    marginLeft: moderateScale(10),
    backgroundColor: colors.LIGHT_GREY,
  },
  signinRight: {
    height: verticalScale(1),
    width: '28%',
    marginRight: moderateScale(10),
    backgroundColor: colors.LIGHT_GREY,
  },
  signintxt: {
    height: moderateVerticalScale(30),
    color: colors.SMOKYWHITE,
    fontSize: 16,
    fontWeight: '400',
    padding: moderateScale(4),
  },
  signinwithView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(20),
  },
  socialIconView: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 9,
    marginTop: moderateVerticalScale(20),
  },
  socialIcon: {
    width: verticalScale(20),
    height: scale(20),
    borderRadius: 30,
  },
});
