import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {style} from './SignUpStyle';
import strings from '../../constants/lang';
import imagePath from '../../constants/imagePath';
import CountryPicker from 'react-native-country-picker-modal';
import TextInputfiled from '../../Components/TextInputfiled';
import CustomBtn from '../../Components/CustomBtn';
import {datasend} from '../../redux/actions/action';
import colors from '../../style/colors';
import {AsyncSendData} from '../../utilis/utilis';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// EmojiFunctions
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
const SignUpScreens = ({navigation}) => {
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [passcheck, setPasscheck] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [showCountry, setShowCountry] = useState(false);
  const [countryCode, setCountryCode] = useState('FR');
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withCallingCode, setWithCallingCode] = useState(false);
  const [checkbox, setCheckbox] = useState([]);
  const onSelect = country => {
    setCountryCode(country.cca2);
    setCountry(country);
  };
  // console.log('country', country);

  //  checkbox functions
  const options = [
    strings.WHEELCHAIR,
    strings.SERVICEDOG,
    strings.MILITARY_CLEARANCE,
    strings.NON_COLLAPLISE,
  ];
  function pickCheck(selectPickCheck) {
    if (checkbox.includes(selectPickCheck)) {
      setCheckbox(checkbox.filter(check => check !== selectPickCheck));
      return;
    }
    setCheckbox(check => check.concat(selectPickCheck));
  }
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
  const emojisValidationfirstName = text => {
    if (text.match('^[a-zA-Z ]*$')) {
      setFirstName(text);
      const sanitizedText = removeEmojis(text);
      setFirstName(sanitizedText);
    }
  };
  const emojisValidationlastName = text => {
    if (text.match('^[a-zA-Z ]*$')) {
      setLastName(text);
      const sanitizedText = removeEmojis(text);
      setLastName(sanitizedText);
    }
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const emojisValidationUserPassword = text => {
    const sanitizedText = removeEmojis(text);
    setConfirmPassword(sanitizedText);
  };
  const phonNumberValidation = val => {
    if (val.match('^[0-9]*$')) {
      setPhoneNumber(val);
    }
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
    } else if (firstName == '') {
      alert('Please enter your name');
    } else if (firstName.length < 3) {
      alert('Name should be minium 3 letter');
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
    } else if (phoneNumber == '') {
      alert('Please enter your contact number ');
    } else if (phoneNumber.length < 8) {
      alert('Contact number should be 8 digit ');
    }
    //  else {
    //     AsyncSendData("Suggestions", { Email: email});
    //     datasend(true);
    //   }
}
  return (
    <KeyboardAwareScrollView style={style.MainContainer}>
      <StatusBar
        barStyle="default"
        hidden={false}
        backgroundColor={colors.PURPLECOLOR}
        translucent={true}
      />
      <TouchableOpacity
        style={style.backIcon}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image style={style.arrowback} source={imagePath.icARROWBACK} />
      </TouchableOpacity>
      <View style={style.BannerConatiner}>
        <View style={style.SignUpView}>
          <Text style={style.signuptxt}>{strings.SIGN_UP}</Text>
        </View>
        <TextInputfiled
          placeholder={strings.EMAIL}
          value={email}
          onChangeText={inputEmailValidation}
        />
        <View style={style.inputView}>
          <View style={style.Txtinput}>
            <TextInputfiled
              placeholder={strings.FIRSTNAME}
              value={firstName}
              maxLength={15}
              onChangeText={val => setFirstName(val)}
            />
          </View>
          <View style={style.Txtinput}>
            <TextInputfiled
              placeholder={strings.LASTNAME}
              value={lastName}
              maxLength={15}
              onChangeText={emojisValidationlastName}
            />
          </View>
        </View>
        <View style={style.CountrymainView}>
          <TouchableOpacity style={style.CountryFlagView}>
            <CountryPicker
              {...{
                countryCode,
                withFilter,
                withFlag,
                withCountryNameButton,
                withCallingCode,
                onSelect,
              }}
              visible={showCountry}
            />
            <Image style={style.arrowimg} source={imagePath.icDOWNARROW} />
            <Text style={style.countryCode}>+{countryCode.callingCode}</Text>
          </TouchableOpacity>
          <View style={style.txtinput}>
            <TextInputfiled
              placeholder={strings.PHONE_NUMBER}
              value={phoneNumber}
              keyboardType="numeric"
              maxLength={10}
              onChangeText={phonNumberValidation}
            />
          </View>
          <View style={style.VerifyView}>
            <Text style={style.Verifytxt}>{strings.VERIFY}</Text>
          </View>
        </View>

        <TextInputfiled
          placeholder={strings.PASSWORD}
          value={password}
          onChangeText={PasswordValidation}
          passwordInput={true}
          maxLength={8}
          passcheck={passcheck}
          keyboardType="numeric"
          toggleEye={toggleEye}
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
        <View style={style.MainCheckBoxView}>
          {options.map(options => (
            <View key={options} style={style.checkView}>
              <TouchableOpacity
                onPress={() => {
                  pickCheck(options);
                }}
                style={style.checkBoxTickView}>
                {checkbox.includes(options) && (
                  <Text style={style.markTick}>✔</Text>
                )}
              </TouchableOpacity>

              <Text style={style.chcekContect}>{options}</Text>
            </View>
          ))}
        </View>
        <View style={style.signigView}>
          <Text style={style.SigningAgreetxt}>{strings.Signing_Agree}</Text>
          <Text style={style.termsServices}>{strings.Terms_and_Services}</Text>
        </View>
        <View style={style.CreateAccount}>
          <CustomBtn
            title={'CREATE MY ACCOUNT'}
            onPress={() => {
              handleValidation();
            }}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreens;
