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
    backgroundColor: colors.WHITE,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginDesign: {
    borderRadius: moderateScale(30),
    borderColor: colors.BLACK,
    borderWidth: 1,
    marginHorizontal: moderateScale(28),
  },
  designBack: {
    marginHorizontal: moderateScale(28),
    marginBottom: moderateScale(30),
    marginTop: moderateScale(50),
  },
  forgottxt: {
    alignSelf: 'flex-end',
    color: colors.BLACK,
    fontSize: 16,
  },
  BtnView: {
    marginTop: moderateScale(20),
  },
  orView: {
    marginTop: moderateScale(20),
    alignSelf: 'center',
  },
  ortxt: {fontSize: 20},
  SocailView: {
    marginTop: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
