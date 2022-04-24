import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPageMainContainer = props => {
  return (
    <View>
      <Text style={LoginPageMainContainerStyles.PhoneNumberText}>
        شماره همراه خود را وارد کنید
      </Text>
      <TextInput
        {...props}
        style={LoginPageMainContainerStyles.UserInput}
        placeholder="e.g. 09121234567"
        keyboardType="numeric"
        placeholderTextColor={'#555'}
      />

      <TouchableOpacity
        {...props}
        style={LoginPageMainContainerStyles.ConfirmButton}>
        <Text style={LoginPageMainContainerStyles.ConfirmText}>ورود</Text>
      </TouchableOpacity>
    </View>
  );
};

const validation = x => {
  const regg = RegExp(/^[0]{1}[9]{1}[0-9]{9}$/);
  if (x.match(regg)) {
    return true;
  } else {
    return false;
  }
};

const LoginPageHeader = () => {
  return <View style={LoginPageHeaderStyles.res}></View>;
};

const Login = () => {
  const navigation = useNavigation();
  const [UserPhoneNumber, setUserPhoneNumber] = useState('');

  const onChangeTextHandler = UserNumber => {
    setUserPhoneNumber(UserNumber);
  };

  const OnPressHandler = async () => {
    const isValid = validation(UserPhoneNumber);
    try {
      if (isValid) {
        
        await axios.get(
          "http://141.11.42.252:8080/NewUserApi?userPhonenumber="+ UserPhoneNumber +"",
        );
        await AsyncStorage.setItem('@user', UserPhoneNumber);
        navigation.navigate('HomePage');
      } else {
        alert('شماره را درست وارد کنید');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{backgroundColor: '#1C233f', height: hp('100%')}}>
      <StatusBar hidden />
      <LoginPageHeader />
      <LoginPageMainContainer
        onChangeText={onChangeTextHandler}
        onPress={OnPressHandler}
        onSubmitEditing={OnPressHandler}
      />
    </View>
  );
};
const LoginPageHeaderStyles = StyleSheet.create({
  res: {
    width: 110,
    height: 110,
    backgroundColor: '#29ED78',
    transform: [{rotate: '45deg'}],
    alignSelf: 'center',
    marginTop: hp('15.7635'),
    borderWidth: 2,
  },
});
// const Modalstyles = StyleSheet.create({
//   MainContainer: {
//     backgroundColor: '#55555550',
//     width: wp(100),
//     height: hp(100),
//     position: 'absolute',
//   },
//   Container: {
//     backgroundColor: '#fff',
//     width: 300,
//     height: 300,
//     marginTop: 200,
//     marginLeft: 55,
//     borderRadius: 25,
//     alignItems: 'center',
//   },
//   Buttons: {
//     height: 50,
//     width: 250,
//     marginTop: 180,
//     borderRadius: 25,
//     backgroundColor: '#feb000',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   ButtonText: {
//     color: '#000',
//     fontSize: hp(3),
//   },
//   MainText: {
//     color: '#000',
//     fontSize: hp(3.5),
//     marginTop: 15,
//   },
// });
const LoginPageMainContainerStyles = StyleSheet.create({
  PhoneNumberText: {
    color: '#fff',
    fontSize: hp(2.69),
    marginTop: hp(10.52211),
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  UserInput: {
    backgroundColor: '#E5E5E5',
    width: wp(69.86),
    marginTop: hp(6.896),
    color: '#000',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#000',
    textAlign: 'center',
    alignSelf: 'center',
  },
  ConfirmButton: {
    backgroundColor: '#FEE000',
    width: wp(81.066),
    height: hp(6.74),
    marginTop: hp(22.536),
    borderRadius: 50,
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  ConfirmText: {
    color: '#000',
    fontSize: hp(2.99),
    fontWeight: 'bold',
  },
});
export default Login;
