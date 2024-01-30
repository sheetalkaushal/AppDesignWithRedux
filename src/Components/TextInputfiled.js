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
          placeholderTextColor={colors.BLACK}></TextInput>
        {passwordInput ? (
          <TouchableOpacity onPress={toggleEye} style={style.hidebtn}>
            <Image
              source={passcheck ? imagePath.Hide : imagePath.View}
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
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    color: colors.BLACK,
    width: '100%',
    fontWeight: '400',
    paddingLeft: 0,
  },
  hidebtn: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 30,
    height: 30,
  },
  textField: {
    alignItems: 'center',
  },
  passwordicon: {
    tintColor: colors.BLACK,
    height: '100%',
    width: '100%',
  },
  container: {
    marginTop: moderateVerticalScale(7),
  },
});

export default TextInputfiled;
