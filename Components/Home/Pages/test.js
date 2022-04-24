import React, {useEffect, useState} from 'react';
// import {
//   VictoryCandlestick,
//   VictoryChart,
//   VictoryTheme,
//   VictoryAxis,
//   VictoryZoomContainer,
//   VictoryVoronoiContainer,
//   VictoryScatter,
//   VictoryTooltip,
// } from 'victory-native';
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
import {SearchBar} from 'react-native-elements';

function Example() {
  const [data, setData] = useState([
    
      {CompanySymbol: 'زمگسا', CompanyId: 1},
      {CompanySymbol: 'کطبس', CompanyId: 2},
      {CompanySymbol: 'کچاد', CompanyId: 3},
      {CompanySymbol: 'کگل', CompanyId: 4},
      {CompanySymbol: 'ومعادن', CompanyId: 5},
      {CompanySymbol: 'کبافق', CompanyId: 6},
      {CompanySymbol: 'کدما', CompanyId: 7},
      {CompanySymbol: 'کروی', CompanyId: 8},
      {CompanySymbol: 'کمنگنز', CompanyId: 9},
      {CompanySymbol: 'کاما', CompanyId: 10},
      {CompanySymbol: 'کماسه', CompanyId: 11},
      {CompanySymbol: 'غشهد', CompanyId: 14},
      {CompanySymbol: 'غنوش', CompanyId: 15},
      {CompanySymbol: 'غدشت', CompanyId: 16},
      {CompanySymbol: 'غاذر', CompanyId: 19},
      {CompanySymbol: 'غمارگ', CompanyId: 21},
      {CompanySymbol: 'غبشهر', CompanyId: 22},
      {CompanySymbol: 'بهپاک', CompanyId: 23},
      {CompanySymbol: 'غناب', CompanyId: 24},
      {CompanySymbol: 'وبشهر', CompanyId: 26},
      {CompanySymbol: 'غپاک', CompanyId: 27},
      {CompanySymbol: 'غشصفا', CompanyId: 28},
      {CompanySymbol: 'غشاذر', CompanyId: 29},
      {CompanySymbol: 'غالبر', CompanyId: 30},
      {CompanySymbol: 'غشان', CompanyId: 31},
      {CompanySymbol: 'غگل', CompanyId: 33},
      {CompanySymbol: 'غدام', CompanyId: 34},
      {CompanySymbol: 'غگرجی', CompanyId: 35},
      {CompanySymbol: 'غویتا', CompanyId: 36},
      {CompanySymbol: 'غیوان', CompanyId: 37},
      {CompanySymbol: 'غسالم', CompanyId: 38},
      {CompanySymbol: 'قنیشا', CompanyId: 39},
      {CompanySymbol: 'قیستو', CompanyId: 40},
      {CompanySymbol: 'قشرین', CompanyId: 41},
      {CompanySymbol: 'قثابت', CompanyId: 42},
      {CompanySymbol: 'قنقش', CompanyId: 43},
      {CompanySymbol: 'قمرو', CompanyId: 44},
      {CompanySymbol: 'قلرست', CompanyId: 45},
      {CompanySymbol: 'قهکمت', CompanyId: 47},
      {CompanySymbol: 'قپیرا', CompanyId: 49},
      {CompanySymbol: 'قجام', CompanyId: 50},
      {CompanySymbol: 'قشکر', CompanyId: 51},
      {CompanySymbol: 'قصفها', CompanyId: 52},
      {CompanySymbol: 'قشهد', CompanyId: 53},
      {CompanySymbol: 'قشیر', CompanyId: 54},
      {CompanySymbol: 'قزوین', CompanyId: 55},
      {CompanySymbol: 'غپینو', CompanyId: 56},
      {CompanySymbol: 'غصینو', CompanyId: 57},
      {CompanySymbol: 'غشوکو', CompanyId: 58},
      {CompanySymbol: 'غچین', CompanyId: 59},
      {CompanySymbol: 'غمهرا', CompanyId: 61},
      {CompanySymbol: 'غبهنوش', CompanyId: 62},
      {CompanySymbol: 'نمرینو', CompanyId: 73},
      {CompanySymbol: 'نبروج', CompanyId: 76},
      {CompanySymbol: 'نتوس', CompanyId: 83},
      {CompanySymbol: 'وملی', CompanyId: 93},
      {CompanySymbol: 'چفیبر', CompanyId: 94},
      {CompanySymbol: 'چنوپا', CompanyId: 95},
      {CompanySymbol: 'چکاوه', CompanyId: 96},
      {CompanySymbol: 'چکارن', CompanyId: 97},
      {CompanySymbol: 'چبسپا', CompanyId: 98},
      {CompanySymbol: 'چکارم', CompanyId: 100},
      {CompanySymbol: 'چافست', CompanyId: 105},
      {CompanySymbol: 'شنفت', CompanyId: 107},
      {CompanySymbol: 'شبهرن', CompanyId: 108},
      {CompanySymbol: 'شزنگ', CompanyId: 109},
      {CompanySymbol: 'ونفت', CompanyId: 110},
      {CompanySymbol: 'شفارا', CompanyId: 111},
      {CompanySymbol: 'شاملا', CompanyId: 112},
      {CompanySymbol: 'شیران', CompanyId: 113},
      {CompanySymbol: 'شمواد', CompanyId: 114},
      {CompanySymbol: 'شسینا', CompanyId: 115},
      {CompanySymbol: 'شخارک', CompanyId: 116},
      {CompanySymbol: 'شصفها', CompanyId: 117},
      {CompanySymbol: 'شاراک', CompanyId: 118},
      {CompanySymbol: 'شفارس', CompanyId: 119},
      {CompanySymbol: 'شکلر', CompanyId: 120},
      {CompanySymbol: 'شیراز', CompanyId: 121},
      {CompanySymbol: 'شپترو', CompanyId: 122},
      {CompanySymbol: 'شملی', CompanyId: 123},
      {CompanySymbol: 'شسم', CompanyId: 124},
      {CompanySymbol: 'شپمچا', CompanyId: 126},
      {CompanySymbol: 'شرنگی', CompanyId: 127},
      {CompanySymbol: 'شلعاب', CompanyId: 129},
      {CompanySymbol: 'دجابر', CompanyId: 131},
      {CompanySymbol: 'دابور', CompanyId: 132},
      {CompanySymbol: 'دکیمی', CompanyId: 133},
      {CompanySymbol: 'درازک', CompanyId: 134},
      {CompanySymbol: 'دلقما', CompanyId: 135},
      {CompanySymbol: 'داسوه', CompanyId: 137},
      {CompanySymbol: 'وپخش', CompanyId: 138},
      {CompanySymbol: 'دکوثر', CompanyId: 139},
      {CompanySymbol: 'دشیری', CompanyId: 140},
   
  ]);
  const [ser, setSer] = useState('');
  const navigation = useNavigation();
  const seraa = text => {

    setSer(text);
    const updatedData = data.filter(x => x.CompanySymbol.indexOf(text) !== -1);
    setData(updatedData);

  };

  const Item = ({title}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate('candel');
      }}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => <Item title={item.CompanySymbol} />;
  return (
    <View style={styles.container}>
      <SearchBar value={ser} onChangeText={text => seraa(text)}></SearchBar>
      <FlatList data={data} renderItem={renderItem} />
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
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: '#000',
  },
});
export default Example;
