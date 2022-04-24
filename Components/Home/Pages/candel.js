import React, {useEffect, useState} from 'react';
import {
  VictoryCandlestick,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
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

// function getScatterData() {
//   return range(50).map((index) => {
//     return {
//       x: random(1, 50),
//       y: random(10, 90),
//       size: random(8) + 3
//     };
//   });
// }
function Example() {
  const [data, setData] = useState();
  const [ser, setSer] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const f = async () => {
      const datas = await axios.get('http://141.11.42.252:8080/mapna');

      // fetch()
      const res = datas.data;
      const z = [];
      for (const x of res) {
        x['timestamp'] = x['DTYYYYMMDD'];
        x['open'] = x['FIRST'];
        x['high'] = x['HIGH'];
        x['low'] = x['LOW'];
        x['close'] = x['LAST'];
        delete x['DTYYYYMMDD'];
        delete x['FIRST'];
        delete x['HIGH'];
        delete x['LOW'];
        delete x['LAST'];
        z.push(x);
      }
      setData(z);
    };
    f()
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.ma}>
        <Text style={styles.maT}>رمپنا</Text>
      </View>
      <VictoryChart
        containerComponent={
          <VictoryZoomContainer zoomDomain={{x: [1, 51], y: [12000, 15000]}} />
        }
        theme={VictoryTheme.material}
        domainPadding={{x: 25}}
        scale={{x: 'time'}}>
        <VictoryAxis tickFormat={t => `${t.getDate()}/${t.getMonth()}`} />
        <VictoryAxis dependentAxis />
        <VictoryCandlestick
          candleColors={{positive: '#00b000', negative: '#c43a31'}}
          data={data}
        />
      </VictoryChart>
      <View style={styles.xContainer}>
        <View style={styles.xv}>
          <Text style={styles.xT}> 16,700 : خرید</Text>
        </View>
        <View style={styles.xv}>
          <Text style={styles.xT}> 16,700 : معامله</Text>
        </View>
      </View>
      <View style={styles.xContainer}>
        <View style={styles.xv}>
          <Text style={styles.xT}> 16,670 : اولین</Text>
        </View>
        <View style={styles.xv}>
          <Text style={styles.xT}> 16,740 : پایانی</Text>
        </View>
      </View>
      <View style={styles.xContainer}>
        <View style={styles.xv}>
          <Text style={styles.xT}> 	6.626 M : حجم معاملات</Text>
        </View>
        
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
  xContainer:{
    marginTop:20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ma:{
    backgroundColor:"#fff",
    alignItems: 'center',
  
  },
  maT:{
    fontSize: 40,
    color: "#000"
  },
  xT:{
    fontSize:25,
  },
  xv:{
    padding:10
  }
});
export default Example;
