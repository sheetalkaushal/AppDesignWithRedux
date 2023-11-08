import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import colors from '../style/colors';
import imagePath from '../constants/imagePath';

const TextInputfiled = ({
  value = '',
  onChangeText = () => {},
  placeholder = '',
  onPress,
  maxLength,
  passcheck,
  keyboardType,
  passwordInput = false,
  showPasswordTouch,
  toggleEye = () => {},
}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.textField}>
        <TextInput
          style={style.inputtext}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={passcheck}
          maxLength={maxLength}
          keyboard={keyboardType}
          showPasswordTouch={showPasswordTouch}
          placeholderTextColor={colors.SMOKYWHITE}></TextInput>
        {passwordInput ? (
          <TouchableOpacity onPress={toggleEye} style={style.hidebtn}>
            <Image
              source={passcheck ? imagePath.icHide : imagePath.icView}
              style={style.passwordicon}
            />
          </TouchableOpacity>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  inputtext: {
    fontSize: 17,
    borderBottomWidth: 2,
    borderBottomColor: colors.SMOKYWHITE,
    color: colors.WHITE,
    width: '100%',
    fontWeight: '400',
    paddingLeft:0,
  },
  hidebtn: {
    position: 'absolute',
    right: 5,
    top: 15,
  },
  textField: {
    alignItems: 'center',
  },
  passwordicon: {
    tintColor: colors.WHITE,
  },
  container: {
    marginTop: moderateVerticalScale(7),
  },
});

export default TextInputfiled;
