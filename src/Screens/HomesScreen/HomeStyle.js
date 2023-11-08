import {StyleSheet} from 'react-native';
import colors from '../../style/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
export const style = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  Container: {
    marginTop: moderateVerticalScale(36),
    marginHorizontal: moderateScale(18),
  },
  leftArrowView: {
    backgroundColor: colors.WHITEOPACITY10,
    width: scale(37),
    height: verticalScale(37),
    justifyContent: 'center',
    borderRadius: 10,
  },
  leftArrow: {
    alignSelf: 'center',
    height: scale(20),
    width: verticalScale(20),
  },
  bannercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 25,
  },
  arrowView: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    gap: 11,
  },
  locationarrow: {
    height: verticalScale(17),
    width: scale(12),
    resizeMode: 'contain',
  },
  Locationtxt: {
    color: colors.BLACK,
    fontSize: 14,
    fontWeight: '400',
  },
  SearchTopView: {
    marginTop: moderateVerticalScale(22),
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  searchView: {
    width: '90%',
    height: verticalScale(48),
    backgroundColor: colors.WHITEOPACITY40,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Searchtxt: {
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: '400',
    marginLeft: moderateScale(23),
  },
  searchicon: {
    width: scale(18),
    height: verticalScale(17),
    marginRight: moderateScale(23),
  },
  filterIcon: {
    width: scale(20),
    height: verticalScale(17),
    tintColor: colors.LIGHTBLUE,
  },
  MainView: {
    marginTop: moderateVerticalScale(33),
  },
  nameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateVerticalScale(10),
    flex:1

  },
  contenttxt: {
    fontSize: 19,
    fontWeight: '500',
    color: colors.BLACK,
    flex:2,
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 3,
    marginRight: moderateScale(12),
  },
  starimg: {
    width: scale(14),
    height: verticalScale(14),
    tintColor: colors.YELLOW,
  },
  rating: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.YELLOW,
  },
  locationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateVerticalScale(5),
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationImg: {
    width: scale(11),
    height: verticalScale(14),
    resizeMode: 'contain',
  },
  countArea: {
    fontSize: 12,
    fontWeight: '400',
  },
  Opentxt: {
    color: colors.GREEN,
    fontSize: 12,
    fontWeight: '600',
    marginRight: moderateScale(12),
  },
  cartView: {
    height: verticalScale(40),
    width: scale(40),
    borderRadius: 30,
    backgroundColor: colors.LIGHTPURPLE,
    justifyContent: 'center',
  },
  cart: {
    alignSelf: 'center',
    tintColor: colors.WHITE,
  },
  listView: {
    marginBottom: moderateScale(93),
  },
  image: {width: '100%'},
});
