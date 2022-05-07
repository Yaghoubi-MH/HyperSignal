import React, {useEffect, useState} from 'react';

import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useNavigation} from '@react-navigation/native';
import Increaseer from '../../Redux/InAction';
import {useDispatch, connect} from 'react-redux';
import store from '../../Redux/Store';
import { Deletes } from '../../Redux/Types';
import Deletea from '../../Redux/DeAction';

function Examplze() {
  const navigation = useNavigation();
  const [watch, setWatch] = useState(false);

  const dispatch = useDispatch();

  const val = store.getState();

  if (val == undefined) {
    return (
      <ScrollView style={styles.container}>
        <Text
        allowFontScaling={false}
          style={{
            color: '#FFF',
            fontSize: 25,
            alignSelf: 'center',
            marginTop: 25,
          }}>
          هیچ تنظیماتی برای نوتیفیکیشن اعمال نکردید
        </Text>
        <TouchableOpacity
          style={{
            marginTop: 650,
            backgroundColor: '#FFF',
            width: 300,
            alignSelf: 'center',
            borderRadius: 20,
          }}
          onPress={() => {
            navigation.navigate('nf');
          }}>
          <Text allowFontScaling={false} style={{color: '#000', fontSize: 50, alignSelf: 'center'}}>
            افزودن
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
  const Azx = () => {
    // return(
    // <View style={styles.container}>
    // {val.map((item, index) => (
    //   <View
    //     key={index}
    //     style={{
    //       backgroundColor: '#FFF',
    //       marginTop: 10,
    //       width: 350,
    //       alignSelf: 'center',
    //       borderRadius: 10,
    //       flexDirection: 'row',
    //     }}>
    //     <TouchableOpacity
    //       style={{
    //         backgroundColor: '#ff0000',
    //         borderTopLeftRadius: 10,
    //         borderBottomLeftRadius: 10,
    //       }}>
    //       <Text
    //         style={{
    //           color: '#000',
    //           fontSize: 30,
    //           fontWeight: 'bold',
    //           padding: 10,
    //         }}>
    //         -
    //       </Text>
    //     </TouchableOpacity>
    //     <Text
    //       style={{
    //         color: '#000',
    //         fontSize: 30,
    //         fontWeight: 'bold',
    //         padding: 10,
    //         marginLeft: 230,
    //       }}>
    //       {item}
    //     </Text>
    //   </View>
    // ))}
    // <TouchableOpacity
    //   style={{
    //     marginTop: 300,
    //     backgroundColor: '#FFF',
    //     width: 300,
    //     alignSelf: 'center',
    //     borderRadius: 20,
    //   }}
    //   onPress={()=>{navigation.navigate('nfx')}}>
    //   <Text style={{color: '#000', fontSize: 50, alignSelf: 'center'}}>
    //     افزودن
    //   </Text>
    // </TouchableOpacity>
    // </View>
    // )
  };
  return (
    // <Azx/>
    <ScrollView style={styles.container}>
      {val.map((item, index) => (
        <View
          key={index}
          style={{
            backgroundColor: '#FFF',
            marginTop: 10,
            width: 350,
            alignSelf: 'center',
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent:'center'
          }}>
         
          
          <Text
          allowFontScaling={false}
            style={{
              color: '#000',
              fontSize: 30,
              fontWeight: 'bold',
              padding: 10,
              // marginLeft: 230,
            }}>
            {item.CompanySymbol}
          </Text>
        </View>
      ))}
      <TouchableOpacity
        style={{
          marginTop: 300,
          backgroundColor: '#FFF',
          width: 300,
          alignSelf: 'center',
          borderRadius: 20,
        }}
        onPress={() => {
          navigation.navigate('nfx');
        }}>
        <Text allowFontScaling={false} style={{color: '#000', fontSize: 50, alignSelf: 'center'}}>
          افزودن
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
    Deletea : id => {
      dispatch(Deletea(id))
    }
  };
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2B283b',
    flex: 1,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Examplze);
