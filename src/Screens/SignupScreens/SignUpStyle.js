import {StyleSheet} from 'react-native';
import colors from '../../style/colors';
import {
  moderateVerticalScale,
  moderateScale,
  verticalScale,
  scale,
} from 'react-native-size-matters';
export const style = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: colors.PURPLECOLOR,
  },
  BannerConatiner: {
    marginHorizontal: moderateScale(30),
  },
  backIcon: {
    marginTop: moderateVerticalScale(50),
    marginHorizontal: moderateScale(10),
  },
  arrowback: {
    tintColor: colors.WHITE,
  },
  SignUpView: {
    marginTop: moderateVerticalScale(40),
    alignItems: 'center',
    alignContent: 'center',
  },
  signuptxt: {
    color: colors.WHITE,
    fontSize: 25,
    fontWeight: '500',
  },
  signigView: {
    alignItems: 'center',
    alignContent: 'center',
    marginTop: moderateVerticalScale(15),
  },
  SigningAgreetxt: {
    color: colors.WHITE,
    fontSize: 15,
    fontWeight: '400',
  },
  inputView: {
    flexDirection: 'row',
    gap: 16,
  },
  Txtinput: {
    flex: 0.5,
  },
  termsServices: {
    color: colors.WHITE,
    fontSize: 15,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  CountrymainView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CountryFlagView: {
    alignItems: 'center',
    gap: 2,
    flexDirection: 'row',
    flex: 0.29,
  },
  arrowimg: {
    width: scale(10),
    height: verticalScale(10),
    tintColor: colors.WHITE,
  },
  countryCode: {
    color: colors.WHITE,
    fontSize: 16,
  },
  txtinput: {
    flex: 0.7,
  },
  VerifyView: {
    flex: 0.15,
  },
  Verifytxt: {
    color: colors.WHITE,
    fontSize: 14,
  },
  MainCheckBoxView: {
    alignSelf: 'flex-start',
    marginTop: moderateScale(20),
  },
  checkView: {
    flexDirection: 'row',
    marginVertical: moderateVerticalScale(3),
  },
  checkBoxTickView: {
    width: scale(18),
    height: verticalScale(18),
    borderWidth: 1,
    borderColor: colors.WHITE,
    marginRight: moderateScale(10),
    backgroundColor: colors.WHITE,
    alignItems: 'center',
  },
  markTick: {
    alignSelf: 'center',
  },
  chcekContect: {
    fontSize: 15,
    color: colors.SMOKYWHITE,
    fontWeight: '400',
  },
  CreateAccount: {
    marginTop: moderateScale(20),
  },
});
