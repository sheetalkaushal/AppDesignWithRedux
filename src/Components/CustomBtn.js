import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {moderateVerticalScale, scale, verticalScale} from 'react-native-size-matters';
import colors from '../style/colors';
export default ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{...style.backbtn}}>
        <Text style={{...style.btntext}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  backbtn: {
    backgroundColor:colors.DARKPURPLE,
    height:verticalScale(60),
    borderColor:colors.WHITE,
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth:1
  },
  btntext: {
    fontSize:20,
    color: colors.WHITE,
  },
});
