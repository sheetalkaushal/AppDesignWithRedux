import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
  Keyboard,
  FlatList,
} from 'react-native';
import React, {useState, version} from 'react';
import {style} from './LoginStyle';
import imagePath from '../../constants/imagePath';
import colors from '../../style/colors';
import {alertType, showAlertMessage} from '../../utils/helperFunctions';
import TextInputfiled from '../../Components/TextInputfiled';
import CustomBtn from '../../Components/CustomBtn';
import strings from '../../constants/lang';
import {AsyncSendData} from '../../utilis/utilis';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {datasend} from '../../redux/actions/action';
import {moderateScale, scale} from 'react-native-size-matters';

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
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passcheck, setPasscheck] = useState(true);
  const [product, setProduct] = useState([
    {
      id: 1,
      img: imagePath.icPARTYREDAYCOMBO,
      name: 'Party ready combo',
      price: '$8.00',
      qty: 0,
    },
    {
      id: 2,
      img: imagePath.icPARTYREDAYCOMBO,
      name: 'Party ready combo',
      price: '$8.00',
      qty: 0,
    },
    {
      id: 3,
      img: imagePath.icPARTYREDAYCOMBO,
      name: 'Party ready combo',
      price: '$8.00',
      qty: 0,
    },
    {
      id: 4,
      img: imagePath.icPARTYREDAYCOMBO,
      name: 'Party ready combo',
      price: '$8.00',
      qty: 0,
    },
    {
      id: 5,
      img: imagePath.icSUMMERCOMBO,
      name: 'Summer ready combo',
      price: '$8.00',
      qty: 0,
    },
  ]);
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
    } else {
      AsyncSendData('userData', {Email: email, Password: password});
      // navigation.navigate("SignUpScreens");
      datasend(true);
    }
  }
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={style.mainConatiner}>
      {/* <StatusBar
        barStyle="default"
        hidden={false}
        backgroundColor={colors.PURPLECOLOR}
        translucent={true}
      />
      <View style={style.navConatiner}>
        <View style={style.welcomeView}>
          <Text style={style.Welcometxt}>{strings.WELCOME_BACK}</Text>
          <Text style={style.Detailstxt}>{strings.DETAILS_PROCCES}</Text>
        </View>
        <View style={style.inputView}>
          <TextInputfiled
            placeholder={strings.EMAIL}
            value={email}
            onChangeText={inputEmailValidation}
          />
          <TextInputfiled
            placeholder={strings.PASSWORD}
            value={password}
            onChangeText={PasswordValidation}
            maxLength={8}
            passwordInput={true}
            passcheck={passcheck}
            keyboardType={Keyboard}
            toggleEye={toggleEye}
          />
        </View>
        <View style={style.BtnView}>
          <CustomBtn
            onPress={() => handleValidation()}
            title={strings.LOGIN_IN}
          />
        </View>
        <View style={style.signinwithView}>
          <View style={style.signinLeft}></View>
          <Text style={style.signintxt}>{strings.Or_Sign_In}</Text>
          <View style={style.signinRight}></View>
        </View>
        <View style={style.Agreeterms}>
          <View style={style.signagree}>
            <Text style={style.Alreadytxt}>{strings.ALREADY_ACCOUNT}</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('SignUpScreens')}>
              <Text style={style.Signuptxt}>{strings.SIGNUP}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.socialIconView}>
          <Image style={style.socialIcon} source={imagePath.icFACEBOOK} />
          <Image style={style.socialIcon} source={imagePath.icGOOGLE} />
          <Image style={style.socialIcon} source={imagePath.icINSTAGRAM} />
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <Text style={{flex:3}}>hello</Text>
          <Text style={{flex:3}}>hello</Text>
          <Text >hello</Text>
        </View>
      </View> */}
      <View>
        <ImageBackground
          style={{
            height: moderateScale(200),
            width: '100%',
            // alignContent:"center",
            alignItems: 'center',
            justifyContent: 'center',
          }}
          source={imagePath.icIMAGE2}>
          <Text
            style={{fontSize: scale(34), fontWeight: '500', color: 'white'}}>
            Login
          </Text>
        </ImageBackground>
        <FlatList
          data={product}
         showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          // showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text
                  numberOfLines={2}
                  style={{backgroundColor: 'red', flex: 0.2}}>
                  gelx
                </Text>
                <Text style={{backgroundColor: 'black', flex: 0.3}}>gelx</Text>
                <Text style={{backgroundColor: 'yellow'}}>gelx</Text>
                {/* <Image source={item.img} />
                <Text  numberOfLines={2} style={{backgroundColor:"red"}}>{item.name}</Text>
                <Text>{item.price}</Text> */}
              </View>
            );
          }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
