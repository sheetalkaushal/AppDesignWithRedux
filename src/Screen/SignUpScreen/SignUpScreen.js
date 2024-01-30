import {
  View,
  Text,
  Image,
  ImageBackground,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import imagePath from '../../constants/imagePath';
import TextInputfiled from '../../Components/TextInputfiled';
import colors from '../../style/colors';
import strings from '../../constants/lang';
import {moderateScale} from 'react-native-size-matters';
import CustomBtn from '../../Components/CustomBtn';
import {style} from './SignUpStyle';
import { datasend } from '../../redux/actions/action';
//  EmojiFunctions
const removeEmojis = input => {
  var result = '';
  if (input?.length == 0) return input;
  for (
    var indexOfInput = 0, lengthOfInput = input?.length;
    indexOfInput < lengthOfInput;
    indexOfInput++
  ) {
    var charAtSpecificIndex = input[indexOfInput].charCodeAt(0);
    if (32 <= charAtSpecificIndex && charAtSpecificIndex <= 126) {
      result += input[indexOfInput];
    }
  }
  return result;
};

const SignUpScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passcheck, setPasscheck] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState();
  //   Functions
  function toggleEye() {
    setPasscheck(!passcheck);
  }
  const PasswordValidation = text => {
    const sanitizedText = removeEmojis(text);
    setPassword(sanitizedText);
  };
  const inputEmailValidation = val => {
    const sanitizedText = removeEmojis(val);
    setEmail(sanitizedText);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const emojisValidationUserPassword = text => {
    const sanitizedText = removeEmojis(text);
    setConfirmPassword(sanitizedText);
  };

  //  Validation_Start
  async function handleValidation() {
    var emailFormatCheck =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:'",.<>/?]).{8,}$/;
    if (email == '') {
      alert('Please enter your email id ');
    } else if (!email?.match(emailFormatCheck)) {
      alert('Please enter valid email id ');
    } else if (password == '') {
      alert('Please enter your password ');
    } else if (!passwordRegex.test(password)) {
      alert(
        'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character. ',
      );
    } else if (confirmPassword == '') {
      alert('Please enter your confirm password');
    } else if (password !== confirmPassword) {
      alert('Password does not match');
    }
  }
  return (
    <KeyboardAwareScrollView>
      {/* <View style={style.navConatiner}> */}
      <View>
        <ImageBackground
          source={imagePath.LoginPic}
          imageStyle={{width: '100%'}}>
          <Image style={{alignSelf: 'center'}} source={imagePath.Title} />
        </ImageBackground>
        {/* login design */}
        <View style={style.loginDesign}>
          <View style={style.designBack}>
            <TextInputfiled
              placeholder={strings.Email}
              value={email}
              onChangeText={inputEmailValidation}
            />
            <TextInputfiled
              placeholder="Create Password"
              value={password}
              onChangeText={PasswordValidation}
              maxLength={8}
              passcheck={passcheck}
              keyboardType={Keyboard}
            />
            <TextInputfiled
              placeholder={strings.CONFIRM_PASSWORD}
              value={confirmPassword}
              passwordInput={true}
              passcheck={passcheck}
              maxLength={8}
              showPasswordTouch={handleToggleConfirmPassword}
              onChangeText={emojisValidationUserPassword}
              toggleEye={toggleEye}
            />
            <View style={{marginTop: moderateScale(10)}}>
              <Text style={style.forgottxt}>{strings.Forgot_Password}</Text>
            </View>
            <View style={style.BtnView}>
              <CustomBtn
                onPress={() => datasend(true)}
                // onPress={() => handleValidation()}
                title={strings.Sign_UP}
              />
            </View>
            <View style={style.orView}>
              <Text style={style.ortxt}>or</Text>
            </View>
            <TouchableOpacity style={style.SocailView}>
              <Image
                style={{width: 20, height: 20}}
                source={imagePath.Twitter}
              />
              <Image
                style={{width: 20, height: 20}}
                source={imagePath.Facebook}
              />
              <Image
                style={{width: 20, height: 20}}
                source={imagePath.Google}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.itemContainer}>
          <Image source={imagePath.ScoopIce} />
          <Image source={imagePath.IceCake} />
        </View>
      </View>
      {/* </View> */}
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreen;
