import {StyleSheet} from 'react-native';
import colors from '../../style/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const style = StyleSheet.create({
  Conatiner: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  headerContainer: {
    marginTop: moderateVerticalScale(56),
    marginHorizontal: moderateVerticalScale(12),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Cart: {
    alignSelf: 'center',
  },
  carttxt:{
    fontSize:16,fontWeight:"600"
  },
//   
  CartView: {
    justifyContent: 'center',
    marginLeft: 120,
  },
  leftArrowView: {
    backgroundColor: colors.LIGHT_GREY,
    width: scale(37),
    height: verticalScale(37),
    justifyContent: 'center',
    borderRadius: 10,
  },
  leftArrow: {
    alignSelf: 'center',
    height: scale(20),
    width: verticalScale(20),
    tintColor: colors.WHITE,
  },
//   
listitem: {
    marginTop: moderateVerticalScale(34),
    marginHorizontal: moderateScale(12),
  },
  MenuView: {
    backgroundColor: '#D1D1DF',
    width: scale(37),
    height: verticalScale(37),
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: moderateVerticalScale(45),
  },
  packagesView: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginHorizontal: moderateScale(34),
    marginLeft: 23,
  },
  ServiceView: {
    marginHorizontal: moderateScale(17),
    marginTop: moderateScale(31),
  },
  slaonitem: {
    marginVertical: moderateScale(12),
  },

  Servicetxt: {
    fontWeight: '600',
    fontSize: 16,
    color: '#808080',
    marginLeft: moderateScale(15),
    marginTop: moderateVerticalScale(15),
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 23,
  },
  price: {
    marginTop: 6,
    fontWeight: '500',
    fontSize: 14,
  },
  name: {
    color: colors.BLACK,
    marginLeft: moderateScale(0),
    fontSize: 15,
    fontWeight: '600',
  },
  selectdata: {
    flexDirection: 'row',
    borderColor: colors.PURPLECOLOR,
    backgroundColor: colors.PURPLECOLOR,
    borderRadius: 7,
    width: moderateScale(70),
    borderWidth: 1,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentincrement: {
    color: colors.WHITE,
    fontSize: 17,
  },
  decrmentcontent: {
    color: colors.WHITE,
    fontSize: 17,
  },
  qantity: {
    color: colors.WHITE,
    fontSize: 17,
  },
  Datacount: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  DataAdd: {
    color: colors.WHITE,
  },
  subtotalView: {
    borderRadius: 10,
    backgroundColor: colors.WHITE,
    marginHorizontal: moderateScale(12),
    marginTop: moderateScale(10),
    paddingVertical: moderateScale(12),
  },
  grandtotal: {
    color: colors.PURPLECOLOR,
    alignSelf: 'center',
    marginTop: moderateScale(29),
    fontSize: 30,
    fontWeight: '700',
  },
  subtotal: {
    fontSize: 25,
    fontWeight: '700',
    color: colors.LIGHTPURPLE
  },
  gstcharges: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(8),
    gap: 6,
    marginTop: moderateScale(3),
  },
  gstRent: {
    color: colors.PURPLECOLOR,
  },
  chargesimg: {
    tintColor: colors.LIGHT_GREY,
    width: moderateScale(20),
    height: moderateScale(20),
  },
  totalgrand: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(12),
  },
  grandview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(8),
    borderTopColor: colors.WHITE,
    borderTopWidth: 1,
    marginTop: moderateScale(12),
  },
  grandcharge: {
    color: Colors.LIGHT_GREY,
    fontWeight: '700',
    fontSize: 24,
  },
  totalitem: {
    flexDirection: 'row',
  },
  subgrand: {
    marginLeft:moderateScale(200)

  },
});
