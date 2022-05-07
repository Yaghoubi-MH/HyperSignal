import React, {useEffect, useState} from 'react';

import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Switch,
  StatusBar,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import Increaseer from '../../Redux/InAction';
import store from '../../Redux/Store';

function Examplea({route, navigation}) {
  const [watch, setWatch] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const [isEnabled4, setIsEnabled4] = useState(false);
  const [isEnabled5, setIsEnabled5] = useState(false);
  const [isEnabled6, setIsEnabled6] = useState(false);
  const [isEnabled7, setIsEnabled7] = useState(false);
  const [isEnabled8, setIsEnabled8] = useState(false);
  const [isEnabled9, setIsEnabled9] = useState(false);
  const [isEnabled10, setIsEnabled10] = useState(false);
  const [isEnabled11, setIsEnabled11] = useState(false);
  const dispatch = useDispatch();
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  const toggleSwitch2 = () => {
    setIsEnabled2(previousState => !previousState);
  };
  const toggleSwitch3 = () => {
    setIsEnabled3(previousState => !previousState);
  };
  const toggleSwitch4 = () => {
    setIsEnabled4(previousState => !previousState);
  };
  const toggleSwitch5 = () => {
    setIsEnabled5(previousState => !previousState);
  };
  const toggleSwitch6 = () => {
    setIsEnabled6(previousState => !previousState);
  };
  const toggleSwitch7 = () => {
    setIsEnabled7(previousState => !previousState);
  };
  const toggleSwitch8 = () => {
    setIsEnabled8(previousState => !previousState);
  };
  const toggleSwitch9 = () => {
    setIsEnabled9(previousState => !previousState);
  };
  const toggleSwitch10 = () => {
    setIsEnabled10(previousState => !previousState);
  };
  const toggleSwitch11 = () => {
    setIsEnabled11(previousState => !previousState);
  };
  const sub = () => {
    if (
      isEnabled ||
      isEnabled2 ||
      isEnabled3 ||
      isEnabled4 ||
      isEnabled5 ||
      isEnabled6 ||
      isEnabled7 ||
      isEnabled8 ||
      isEnabled9 ||
      isEnabled10 ||
      isEnabled11
    ) {
      dispatch(Increaseer(id.ids));
      console.log('ssaz', store.getState());
      navigation.navigate('notif');
    }
  };
  const id = route.params;
  console.log(id);
  console.log(id.ids);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: '#FFF',
          height: 50,
          width: 370,
          alignSelf: 'center',
          flexDirection: 'row',
          borderRadius: 20,
        }}
        onPress={toggleSwitch}>
        <Text
        allowFontScaling={false}
          style={{
            color: '#000',
            paddingLeft: 10,
            fontSize: 18,
            alignSelf: 'center',
          }}>
          پیام ناظر ها را به من خبر بده
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{padding: 5, paddingLeft: 120}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: '#FFF',
          height: 50,
          width: 370,
          alignSelf: 'center',
          flexDirection: 'row',
          borderRadius: 20,
        }}
        onPress={toggleSwitch2}>
        <Text
        allowFontScaling={false}
          style={{
            color: '#000',
            paddingLeft: 10,
            fontSize: 18,
            alignSelf: 'center',
          }}>
          اگر اطلاعیه کدال افشا شد به من خبر بده
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch2}
          value={isEnabled2}
          style={{padding: 5, paddingLeft: 45}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: '#FFF',
          height: 50,
          width: 370,
          alignSelf: 'center',
          flexDirection: 'row',
          borderRadius: 20,
        }}
        onPress={toggleSwitch3}>
        <Text
        allowFontScaling={false}
          style={{
            color: '#000',
            paddingLeft: 10,
            fontSize: 18,
            alignSelf: 'center',
          }}>
          هر وقت از صف فروش در آمد به من خبر بده
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled3 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch3}
          value={isEnabled3}
          style={{padding: 5, paddingLeft: 25}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: '#FFF',
          height: 50,
          width: 370,
          alignSelf: 'center',
          flexDirection: 'row',
          borderRadius: 20,
        }}
        onPress={toggleSwitch4}>
        <Text
        allowFontScaling={false}
          style={{
            color: '#000',
            paddingLeft: 10,
            fontSize: 18,
            alignSelf: 'center',
          }}>
          در آستانه صف فروش قرار گرفت به من خبر بده
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled4 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch4}
          value={isEnabled4}
          style={{padding: 5}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: '#FFF',
          height: 50,
          width: 370,
          alignSelf: 'center',
          flexDirection: 'row',
          borderRadius: 20,
        }}
        onPress={toggleSwitch5}>
        <Text
        allowFontScaling={false}
          style={{
            color: '#000',
            paddingLeft: 10,
            fontSize: 18,
            alignSelf: 'center',
          }}>
          در آستانه صف خرید قرار گرفت به من خبر بده
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled5 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch5}
          value={isEnabled5}
          style={{padding: 5, paddingLeft: 13}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: '#FFF',
          height: 50,
          width: 370,
          alignSelf: 'center',
          flexDirection: 'row',
          borderRadius: 20,
        }}
        onPress={toggleSwitch6}>
        <Text
        allowFontScaling={false}
          style={{
            color: '#000',
            paddingLeft: 10,
            fontSize: 18,
            alignSelf: 'center',
          }}>
          به اولین حمایت رسید به من خبر بده
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled6 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch6}
          value={isEnabled6}
          style={{padding: 5, paddingLeft: 75}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: '#FFF',
          height: 50,
          width: 370,
          alignSelf: 'center',
          flexDirection: 'row',
          borderRadius: 20,
        }}
        onPress={toggleSwitch7}>
        <Text
        allowFontScaling={false}
          style={{
            color: '#000',
            paddingLeft: 10,
            fontSize: 18,
            alignSelf: 'center',
          }}>
          به اولین مقاومت رسید به من خبر بده
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled7 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch7}
          value={isEnabled7}
          style={{padding: 5, paddingLeft: 68}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: '#FFF',
          height: 50,
          width: 370,
          alignSelf: 'center',
          flexDirection: 'row',
          borderRadius: 20,
        }}
        onPress={toggleSwitch8}>
        <Text
        allowFontScaling={false}
          style={{
            color: '#000',
            paddingLeft: 10,
            fontSize: 18,
            alignSelf: 'center',
          }}>
          به اولین کف کانال رسید به من خبر بده
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled8 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch8}
          value={isEnabled8}
          style={{padding: 5, paddingLeft: 60}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: '#FFF',
          height: 50,
          width: 370,
          alignSelf: 'center',
          flexDirection: 'row',
          borderRadius: 20,
        }}
        onPress={toggleSwitch9}>
        <Text
        allowFontScaling={false}
          style={{
            color: '#000',
            paddingLeft: 10,
            fontSize: 18,
            alignSelf: 'center',
          }}>
          به اولین سقف کانال رسید به من خبر بده
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled9 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch9}
          value={isEnabled9}
          style={{padding: 5, paddingLeft: 50}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: '#FFF',
          height: 50,
          width: 370,
          alignSelf: 'center',
          flexDirection: 'row',
          borderRadius: 20,
        }}
        onPress={toggleSwitch10}>
        <Text
        allowFontScaling={false}
          style={{
            color: '#000',
            paddingLeft: 10,
            fontSize: 18,
            alignSelf: 'center',
          }}>
          اگر خط روند را شکست به من خبر بده
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled10 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch10}
          value={isEnabled10}
          style={{padding: 5, paddingLeft: 67}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: '#FFF',
          height: 50,
          width: 370,
          alignSelf: 'center',
          flexDirection: 'row',
          borderRadius: 20,
        }}
        onPress={toggleSwitch11}>
        <Text
        allowFontScaling={false}
          style={{
            color: '#000',
            paddingLeft: 10,
            fontSize: 14.5,
            alignSelf: 'center',
          }}>
          اگر قدرت خریداران بیشتر از فروشنگان شد به من خبر بده
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled11 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch11}
          value={isEnabled11}
          style={{padding: 5, paddingLeft: 13}}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: '#FFF',
          height: 55,
          width: 150,
          alignSelf: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          borderRadius: 20,
        }}
        onPress={sub}>
        <Text
        allowFontScaling={false}
          style={{
            color: '#000',
            padding: 10,
            fontSize: 30,
          }}>
          اعمال
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const mapStateToProps = state => {
  return {
    val: state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    Increaseer: id => {
      dispatch(Increaseer(id));
    },
  };
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2B283b',
    flex: 1,
  },
});
export default Examplea;
