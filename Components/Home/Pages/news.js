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
import {useNavigation} from '@react-navigation/native';
// import {SearchBar} from 'react-native-elements';

function Example() {
  const [data, setData] = useState();
  const [ser, setSer] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: 100,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text allowFontScaling={false} style={{color: '#000',fontSize:25,textAlign:'center',fontWeight:'bold'}}>
          شاخص بورس بدون تغییر ماند/ بازگشایی فولاد بی‌اثر بود
        </Text>
      </View>
      <Text allowFontScaling={false} style={{color: '#fff',fontSize:20,marginTop:30,textAlign:"center"}}>
      به گزارش تجارت‌نیوز، بورس امروز کاهش ۸۱۸  واحدی را تجربه کرد و در نهایت به سطح یک میلیون و ۵۱۲ هزار واحد رسید.

امروز شرکت فولاد مبارکه اصفهان با نماد فولاد با محدودیت نوسان قیمت امروز بازگشایی شد.

افزایش شاخص کل هم‌وزن بورس
بر اساس داده‌های شرکت بورس و اوراق بهادار، امروز شاخص کل هم‌وزن ۰٫۲۲ درصد رشد داشت و به محدوده ۴۰۱ هزار و ۴۳۶ واحدی رسید.

معامله‌گران در این روز ۶۱۶ هزار و ۲۸۲ معامله به ارزش ۵۷ هزار و ۹۸ میلیارد تومان انجام دادند.

امروز نمادهای فولاد، وپارس، وبانک، فارس، خودور، تاپیکو، خگستر و ونوین بیشترین تاثیر مثبت را بر شاخص کل بورس داشتند. همچنین نمادهای پارسان، شبندر، نوری، شستا و شتران بیشترین تاثیر منفی را بر شاخص کل گذاشتند.
      </Text>
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
