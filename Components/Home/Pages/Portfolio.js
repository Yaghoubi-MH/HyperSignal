import React, {useEffect, useState} from 'react';
import {
  VictoryCandlestick,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryLine,
  VictoryLabel,
  VictoryZoomContainer,
  VictoryVoronoiContainer,
  VictoryScatter,
  VictoryTooltip,
  VictoryPie,
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

function Example() {
  const [data, setData] = useState();
  const [ser, setSer] = useState('');
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine
          domain={{x: [0, 13], y: [1, 1.7]}}
          style={{
            data: {stroke: '#c43a31'},
            parent: {border: '1px solid #ccc'},
            labels: {fill: '#fff'},
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
        <VictoryLine
          domain={{x: [0, 13], y: [1, 1.7]}}
          style={{
            data: {stroke: '#c4c3ff'},
            parent: {border: '1px solid #ccc'},
          }}
          data={[
            {x: 0, y: 1.177},
            {x: 1, y: 1.294},
            {x: 2, y: 1.202},
            {x: 3, y: 1.139},
            {x: 4, y: 1.243},
            {x: 5, y: 1.314},
            {x: 6, y: 1.55},
            {x: 7, y: 1.422},
            {x: 8, y: 1.407},
            {x: 9, y: 1.404},
            {x: 10, y: 1.318},
            {x: 11, y: 1.256},
            {x: 12, y: 1.414},
            {x: 13, y: 1.513},
          ]}
        />
      </VictoryChart>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          
        }}>
        <View
          style={{
            width: 20,
            height: 20,
            backgroundColor: '#c4c3ff',
            borderRadius: 50,
            padding: 10,
          }}></View>
        <Text style={{fontSize: 18, padding: 10}}>شاخص</Text>
        <View
          style={{
            width: 20,
            height: 20,
            backgroundColor: '#c43a31',
            borderRadius: 50,
            padding: 10,
          }}></View>
        <Text style={{fontSize: 18, padding: 10}}>پرتفولیو</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <VictoryPie
          labelComponent={
            <VictoryLabel
              direction="rtl"
              style={[{fill: '#000', fontSize: 15, fontFamily: 'aria'}]}
            />
          }
          colorScale={['tomato', 'blue', 'gold', 'cyan', 'navy']}
          width={300}
          labelRadius={({innerRadius}) => innerRadius + 40}
          // style={{labels:{fill:"#fff",fontSize: 20,direction:'rtl'}}}
          data={[
            {x: '30%', y: 30},
            {x: '40%', y: 40},
            {x: '20%', y: 20},
            {x: '10%', y: 10},
          ]}
        />
      </View>
      <View style={{direction: "ltr"}}>
        <View style={{flexDirection: 'row',paddingHorizontal: 10,justifyContent:'flex-end'}}>
          <Text style={{fontSize: 20, paddingHorizontal: 10}}>
            درصد سود وزیان : %20
          </Text>
          <Text style={{fontSize: 20, paddingHorizontal: 10}}>
            قیمت آخر : 2,137
          </Text>
          <Text style={{fontSize: 20, paddingHorizontal:5}}>خساپا</Text>
          <View
            style={{
              backgroundColor: 'tomato',
              width: 20,
              height: 20,
              borderRadius: 50,
            }}></View>
        </View>
        <View style={{flexDirection: 'row' ,paddingVertical:10,paddingHorizontal: 10,justifyContent:'flex-end'}}>
          <Text style={{fontSize: 20, paddingHorizontal: 10}}>
             درصد سود وزیان : %40
          </Text>
          <Text style={{fontSize: 20, paddingHorizontal: 10}}>
            قیمت آخر : 7,570  
          </Text>
          <Text style={{fontSize: 20,paddingHorizontal:5}}>فملی</Text>
          <View
            style={{
              backgroundColor: 'blue',
              width: 20,
              height: 20,
              borderRadius: 50,
            }}></View>
        </View>
        <View style={{flexDirection: 'row' ,paddingVertical:10,paddingHorizontal: 10,justifyContent:'flex-end'}}>
          <Text style={{fontSize: 20, paddingHorizontal: 10}}>
             درصد سود وزیان : %22
          </Text>
          <Text style={{fontSize: 20, paddingHorizontal: 10}}>
            قیمت آخر : 8,860    
          </Text>
          <Text style={{fontSize: 20 ,paddingHorizontal:5}}>شبندر</Text>
          <View
            style={{
              backgroundColor: 'gold',
              width: 20,
              height: 20,
              borderRadius: 50,
            }}></View>
        </View>
        
        <View style={{flexDirection: 'row' ,paddingVertical:10,marginBottom:20,paddingHorizontal: 10,justifyContent:'flex-end' }}>
          <Text style={{fontSize: 20, paddingHorizontal: 10}}>
             درصد سود وزیان : %15
          </Text>
          <Text style={{fontSize: 20, paddingHorizontal: 10}}>
            قیمت آخر : 16,650      
          </Text>
          <Text style={{fontSize: 20,paddingHorizontal:5}}>رمپنا</Text>
          <View
            style={{
              backgroundColor: 'cyan',
              width: 20,
              height: 20,
              borderRadius: 50,
              
            }}></View>
        </View>
        
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    
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
