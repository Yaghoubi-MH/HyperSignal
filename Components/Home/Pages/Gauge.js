import React, {useEffect, useState} from 'react';
import Speedometer from 'react-native-speedometer-chart';
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
import {useNavigation} from '@react-navigation/native';

function Example() {
  const [data, setData] = useState();
  const [ser, setSer] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          margin: 25,
          backgroundColor: '#fff',
          height: 75,
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            paddingRight: 8,
            paddingTop: 15,
            color: '#000',
          }}>
          خیلی بد
        </Text>
        <Speedometer
          value={65}
          totalValue={100}
          size={70}
          outerColor="#d3d3d3"
          internalColor="#aaff00"
          showIndicator
        />
        <Text
          style={{
            fontSize: 18,
            paddingLeft: 8,
            paddingTop: 15,
            paddingRight: 95,
            color: '#000',
          }}>
          خیلی خوب
        </Text>
        <Text style={{fontSize: 25, paddingRight: 10, color: '#000'}}>
          بنیادی
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          margin: 25,
          backgroundColor: '#fff',
          height: 75,
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            paddingRight: 8,
            paddingBottom: 3,
            color: '#000',
          }}>
          خیلی{'\n'}پر ریسک
        </Text>
        <Speedometer
          value={50}
          totalValue={100}
          size={70}
          outerColor="#d3d3d3"
          internalColor="#ffee00"
          showIndicator
        />
        <Text
          style={{
            fontSize: 18,
            paddingLeft: 8,
            paddingBottom: 3,
            paddingRight: 105,
            color: '#000',
          }}>
          خیلی{'\n'}کم ریسک
        </Text>
        <Text style={{fontSize: 25, paddingRight: 10, color: '#000'}}>
          ریسک
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          margin: 25,
          backgroundColor: '#fff',
          height: 75,
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            paddingRight: 8,
            paddingTop: 15,
            color: '#000',
          }}>
          خیلی بد
        </Text>
        <Speedometer
          value={80}
          totalValue={100}
          size={70}
          outerColor="#d3d3d3"
          internalColor="#00ff00"
          showIndicator
        />
        <Text
          style={{
            fontSize: 18,
            paddingLeft: 8,
            paddingTop: 15,
            paddingRight: 47,
            color: '#000',
          }}>
          خیلی خوب
        </Text>
        <Text style={{fontSize: 25, paddingRight: 10, color: '#000'}}>
          نقد شوندگی
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          margin: 25,
          backgroundColor: '#fff',
          height: 75,
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            paddingRight: 8,
            paddingTop: 15,
            color: '#000',
          }}>
          خیلی بد
        </Text>
        <Speedometer
          value={40}
          totalValue={100}
          size={70}
          outerColor="#d3d3d3"
          internalColor="#ffaa00"
          showIndicator
        />
        <Text
          style={{
            fontSize: 18,
            paddingLeft: 8,
            paddingTop: 15,
            paddingRight: 85,
            color: '#000',
          }}>
          خیلی خوب
        </Text>
        <Text style={{fontSize: 25, paddingRight: 10, color: '#000'}}>
          تکنیکال
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          margin: 25,
          backgroundColor: '#fff',
          height: 75,
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            paddingRight: 8,
            paddingTop: 15,
            color: '#000',
          }}>
          خیلی بد
        </Text>
        <Speedometer
          value={15}
          totalValue={100}
          size={70}
          outerColor="#d3d3d3"
          internalColor="#ff0000"
          showIndicator
        />
        <Text
          style={{
            fontSize: 18,
            paddingLeft: 8,
            paddingTop: 15,
            paddingRight: 80,
            color: '#000',
          }}>
          خیلی خوب
        </Text>
        <Text style={{fontSize: 25, paddingRight: 10, color: '#000'}}>
          ارزندگی
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          margin: 25,
          backgroundColor: '#fff',
          height: 75,
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            paddingRight: 8,
            paddingTop: 15,
            color: '#000',
          }}>
          خیلی بد
        </Text>
        <Speedometer
          value={30}
          totalValue={100}
          size={70}
          outerColor="#d3d3d3"
          internalColor="#ff9900"
          showIndicator
        />
        <Text
          style={{
            fontSize: 18,
            paddingLeft: 8,
            paddingTop: 15,
            paddingRight: 53,
            color: '#000',
          }}>
          خیلی خوب
        </Text>
        <Text style={{fontSize: 25, paddingRight: 10, color: '#000'}}>
          تابلو خوانی
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B283b',
  },
  item: {
    backgroundColor: '#feb000',
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: '#000',
  },
  xContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ma: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  maT: {
    fontSize: 40,
    color: '#000',
  },
  xT: {
    fontSize: 25,
  },
  xv: {
    padding: 10,
  },
});
export default Example;
