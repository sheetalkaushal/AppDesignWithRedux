import {StyleSheet} from 'react-native';
import colors from '../../style/colors';
import {
  moderateVerticalScale,
  scale,
  verticalScale,
  moderateScale,
} from 'react-native-size-matters';
export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  leftArrowView: {
    backgroundColor: '#D1D1DF',
    width: scale(37),
    height: verticalScale(37),
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: moderateScale(78),
  },
  leftArrow: {
    alignSelf: 'center',
    height: scale(20),
    width: verticalScale(20),
    tintColor: colors.WHITE,
  },
  backimg: {
    width: '100%',
    height: verticalScale(200),
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    shadowOpacity: 6,
  },
  content: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(18),
    justifyContent: 'space-between',
    marginTop: moderateScale(12),
  },
  treeimg: {
    borderRadius: 50,
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    width: scale(76),
    height: verticalScale(76),
    marginTop: moderateVerticalScale(56),
  },
  Treelounge: {
    alignSelf: 'center',
  },
  treedetails: {
    top: 34,
    backgroundColor: 'white',
    width: '90%',
    height: verticalScale(86),
    position: 'relative',
    alignSelf: 'center',
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    shadowOpacity: 6,
    elevation: 2,
    borderRadius: 4,
    justifyContent: 'center',
  },
  nameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contenttxt: {
    marginLeft: moderateScale(23),
    fontSize: 18,
    fontWeight: '700',
    color: colors.BLACK,
  },
  ratingView: {
    flexDirection: 'row',
    gap: 3,
    backgroundColor: '#5B3B81',
    width: scale(48),
    height: verticalScale(20),
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    justifyContent: 'center',
  },
  starimg: {
    width: scale(14),
    height: verticalScale(14),
    tintColor: colors.WHITE,
    alignSelf: 'center',
  },
  rating: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.WHITE,
    marginRight: moderateScale(4),
    alignSelf: 'center',
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
    marginLeft: moderateScale(23),
  },
  locationImg: {
    width: scale(11),
    height: verticalScale(14),
    resizeMode: 'contain',
  },
  countArea: {
    fontSize: 12,
    fontWeight: '600',
  },
  Opentxt: {
    color: colors.GREEN,
    fontSize: 12,
    fontWeight: '600',
    marginRight: moderateScale(12),
  },
  //
  flatitemView: {
    alignItems: 'center',
    padding: moderateScale(10),
    flexDirection: 'row',
    height: verticalScale(40),
    borderRadius: 10,
    backgroundColor: '#D1D1D1',
    gap: 3,
  

  },
  listView: {
    flexDirection: 'row',
    marginLeft: moderateScale(5),
    marginTop: moderateVerticalScale(15),
  },
  flatitemtxt: {
    fontSize: 14,
    color: colors.BLACK,
    fontWeight: '500',
  },
  fliterdownimg: {
    tintColor: colors.BLACK,
    width: scale(15),
    height: verticalScale(15),
    alignSelf: 'center',
  },
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
    // flex:3.5
  },
  price: {
    marginTop: 6,
    fontWeight: '500',
    fontSize: 14,
    flex:3.5
  },
  name: {
    color: colors.BLACK,
    marginLeft: moderateScale(0),
    fontSize: 15,
    fontWeight: '600',
    flex:3.5
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
  cartView: {
    marginRight: moderateScale(6),
    height: verticalScale(55),
    width: scale(55),
    borderRadius: 30,
    backgroundColor: colors.LIGHTPURPLE,
    justifyContent: 'center',
  },
  cart: {
    alignSelf: 'center',
    tintColor: colors.WHITE,
  },
  CartButton: {
    backgroundColor: colors.DARKPURPLE,
    width: '90%',
    alignSelf: 'center',
    height: verticalScale(63),
    borderRadius: 77,
    justifyContent: 'center',
    bottom: 45,
  },
  CartView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemADDCart: {
    marginLeft: moderateScale(23),
    fontSize: 16,
    fontWeight: '700',
    color: colors.WHITE,
  },
});
