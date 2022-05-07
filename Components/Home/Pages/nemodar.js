import React, {useEffect, useState} from 'react';
import {
  VictoryCandlestick,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryLine,
  VictoryZoomContainer,
  VictoryVoronoiContainer,
  VictoryScatter,
  VictoryTooltip,
} from 'victory-native';
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
// import {SearchBar} from 'react-native-elements';

function Example() {
  const [data, setData] = useState();
  const [ser, setSer] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#FFF'}}>
        <Text
          allowFontScaling={false}
          style={{color: '#000', fontSize: 25, alignSelf: 'center'}}>
          نمودار شاخص کل در شش ماه اخیر
        </Text>
        <VictoryChart>
          <VictoryLine
            domain={{x: [0, 13], y: [1, 1.7]}}
            style={{
              data: {stroke: '#bbb'},
              parent: {border: '1px solid #ccc'},
            }}
            data={[
              {x: 0, y: 1.127},
              {x: 1, y: 1.264},
              {x: 2, y: 1.23},
              {x: 3, y: 1.165},
              {x: 4, y: 1.202},
              {x: 5, y: 1.25},
              {x: 6, y: 1.479},
              {x: 7, y: 1.37},
              {x: 8, y: 1.375},
              {x: 9, y: 1.32},
              {x: 10, y: 1.31},
              {x: 11, y: 1.15},
              {x: 12, y: 1.45},
              {x: 13, y: 1.508},
            ]}
          />
        </VictoryChart>
      </View>
      <View style={{backgroundColor: '#fff', marginTop: 20}}>
        <Text
          allowFontScaling={false}
          style={{
            color: '#000',
            fontSize: 35,
            alignSelf: 'center',
            fontWeight: 'bold',
          }}>
          اخبار روز
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('news')}
          style={{
            width: 300,
            backgroundColor: '#fff',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            marginTop: 20,
          }}>
          <Text
            allowFontScaling={false}
            style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
            شاخص بورس بدون تغییر ماند
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('news')}
          style={{
            width: 300,
            backgroundColor: '#fff',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            marginTop: 20,
          }}>
          <Text
            allowFontScaling={false}
            style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
            ۶ سیگنال جدید برای بورس
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('news')}
          style={{
            width: 300,
            backgroundColor: '#fff',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            marginTop: 20,
          }}>
          <Text
            allowFontScaling={false}
            style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
            سه شنبه هیجانی بورس
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('news')}
          style={{
            width: 300,
            backgroundColor: '#fff',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            marginTop: 20,
          }}>
          <Text
            allowFontScaling={false}
            style={{
              fontSize: 20,
              color: '#000',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            استعداد شرکت‌های دولتی‌ در خلق زیان بورسی
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('news')}
          style={{
            width: 300,
            backgroundColor: '#fff',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            marginTop: 20,
          }}>
          <Text
            allowFontScaling={false}
            style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
            زیان سهامداران بورس کی جبران می‌شود؟
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B283b',
    // marginTop: StatusBar.currentHeight || 0,
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
