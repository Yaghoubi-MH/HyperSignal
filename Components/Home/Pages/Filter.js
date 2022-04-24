import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {color} from 'react-native-elements/dist/helpers';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

const HeaderPage = () => {
  return (
    <View style={HeaderPageStyles.Container}>
      <Text style={HeaderPageStyles.HeaderText}>فیلتر</Text>
    </View>
  );
};

const MainContent = props => {
  return (
    <ScrollView>
      <View style={MainContentStyles.Container}>
        {/* <TouchableOpacity
          onPress={props.QuestionOnPress}
          style={MainContentStyles.QuestionMarker}>
          <Text style={MainContentStyles.QuestionMarkerText}>?</Text>
        </TouchableOpacity> */}
        <View style={MainContentStyles.RiskTextContainer}>
          <Text style={MainContentStyles.LowRiskText}>میزان ریسک</Text>
        </View>
        <View style={MainContentStyles.RiskContainer}>
          <TouchableOpacity
            style={props.VeryLowRiskColor}
            onPress={props.OnPressHandlerVeryLowRisk}>
            <Text style={MainContentStyles.LowRiskText}>خیلی کم ریسک</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={props.LowRiskButtonColor}
            onPress={props.LowRiskButtonOnPress}>
            <Text style={MainContentStyles.LowRiskText}>کم ریسک</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={props.MediumRiskColor}
            onPress={props.OnPressHandlerMediumRisk}>
            <Text style={MainContentStyles.LowRiskText}>متوسط</Text>
          </TouchableOpacity>
        </View>
        <View style={MainContentStyles.RiskContainer}>
          <TouchableOpacity
            style={props.HighRiskColor}
            onPress={props.OnPressHandlerHighRisk}>
            <Text style={MainContentStyles.LowRiskText}>پر ریسک</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={props.VeryHighRiskColor}
            onPress={props.OnPressHandlerVeryHighRisk}>
            <Text style={MainContentStyles.LowRiskText}>خیلی پر ریسک</Text>
          </TouchableOpacity>
        </View>
        <View style={MainContentStyles.RiskTextContainer}>
          <Text style={MainContentStyles.LowRiskText}>بازده</Text>
        </View>
        <View style={MainContentStyles.RiskContainer}>
          <TouchableOpacity style={props.bvl} onPress={props.OnPressHandlerbvl}>
            <Text style={MainContentStyles.LowRiskText}>خیلی کم</Text>
          </TouchableOpacity>
          <TouchableOpacity style={props.ngl} onPress={props.OnPressHandlerngl}>
            <Text style={MainContentStyles.LowRiskText}>کم</Text>
          </TouchableOpacity>
          <TouchableOpacity style={props.ngm} onPress={props.OnPressHandlerngm}>
            <Text style={MainContentStyles.LowRiskText}>متوسط</Text>
          </TouchableOpacity>
        </View>
        <View style={MainContentStyles.RiskContainer}>
          <TouchableOpacity style={props.ngh} onPress={props.OnPressHandlerngh}>
            <Text style={MainContentStyles.LowRiskText}>زیاد</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={props.ngvh}
            onPress={props.OnPressHandlerngvh}>
            <Text style={MainContentStyles.LowRiskText}>خیلی زیاد</Text>
          </TouchableOpacity>
        </View>
        <View style={MainContentStyles.RiskTextContainer}>
          <Text style={MainContentStyles.LowRiskText}>نقد شوندگی</Text>
        </View>
        <View style={MainContentStyles.RiskContainer}>
          <TouchableOpacity
            style={props.ngvl}
            onPress={props.OnPressHandlerngvl}>
            <Text style={MainContentStyles.LowRiskText}>خیلی کم</Text>
          </TouchableOpacity>
          <TouchableOpacity style={props.bl} onPress={props.OnPressHandlerbl}>
            <Text style={MainContentStyles.LowRiskText}>کم</Text>
          </TouchableOpacity>
          <TouchableOpacity style={props.bm} onPress={props.OnPressHandlerbm}>
            <Text style={MainContentStyles.LowRiskText}>متوسط</Text>
          </TouchableOpacity>
        </View>
        <View style={MainContentStyles.RiskContainer}>
          <TouchableOpacity style={props.bh} onPress={props.OnPressHandlerbh}>
            <Text style={MainContentStyles.LowRiskText}>زیاد</Text>
          </TouchableOpacity>
          <TouchableOpacity style={props.bvh} onPress={props.OnPressHandlerbvh}>
            <Text style={MainContentStyles.LowRiskText}>خیلی زیاد</Text>
          </TouchableOpacity>
        </View>
        <View style={MainContentStyles.RiskTextContainer}>
          <Text style={MainContentStyles.LowRiskText}>ارزندگی</Text>
        </View>
        <View style={MainContentStyles.RiskContainer}>
          <TouchableOpacity style={props.avl} onPress={props.OnPressHandleravl}>
            <Text style={MainContentStyles.LowRiskText}>خیلی کم</Text>
          </TouchableOpacity>
          <TouchableOpacity style={props.al} onPress={props.OnPressHandleral}>
            <Text style={MainContentStyles.LowRiskText}>کم</Text>
          </TouchableOpacity>
          <TouchableOpacity style={props.am} onPress={props.OnPressHandleram}>
            <Text style={MainContentStyles.LowRiskText}>متوسط</Text>
          </TouchableOpacity>
        </View>
        <View style={MainContentStyles.RiskContainer}>
          <TouchableOpacity style={props.ah} onPress={props.OnPressHandlerah}>
            <Text style={MainContentStyles.LowRiskText}>زیاد</Text>
          </TouchableOpacity>
          <TouchableOpacity style={props.avh} onPress={props.OnPressHandleravh}>
            <Text style={MainContentStyles.LowRiskText}>خیلی زیاد</Text>
          </TouchableOpacity>
        </View>
        <View style={MainContentStyles.RiskTextContainer}>
          <Text style={MainContentStyles.LowRiskText}>تابلو خوانی</Text>
        </View>
        <View style={MainContentStyles.RiskContainer}>
          <TouchableOpacity style={props.tvb} onPress={props.OnPressHandlertvb}>
            <Text style={MainContentStyles.LowRiskText}>خیلی بد</Text>
          </TouchableOpacity>
          <TouchableOpacity style={props.tb} onPress={props.OnPressHandlertb}>
            <Text style={MainContentStyles.LowRiskText}>بد</Text>
          </TouchableOpacity>
          <TouchableOpacity style={props.tm} onPress={props.OnPressHandlertm}>
            <Text style={MainContentStyles.LowRiskText}>متوسط</Text>
          </TouchableOpacity>
        </View>
        <View style={MainContentStyles.RiskContainer}>
          <TouchableOpacity style={props.tg} onPress={props.OnPressHandlertg}>
            <Text style={MainContentStyles.LowRiskText}>خوب</Text>
          </TouchableOpacity>
          <TouchableOpacity style={props.tvg} onPress={props.OnPressHandlertvg}>
            <Text style={MainContentStyles.LowRiskText}>خیلی خوب</Text>
          </TouchableOpacity>
        </View>
        <View style={MainContentStyles.RiskTextContainer}>
          <Text style={MainContentStyles.LowRiskText}>وضعیت تکنیکال</Text>
        </View>
        <View style={MainContentStyles.RiskContainer}>
          <TouchableOpacity
            style={props.vtvb}
            onPress={props.OnPressHandlervtvb}>
            <Text style={MainContentStyles.LowRiskText}>خیلی بد</Text>
          </TouchableOpacity>
          <TouchableOpacity style={props.vtb} onPress={props.OnPressHandlervtb}>
            <Text style={MainContentStyles.LowRiskText}>بد</Text>
          </TouchableOpacity>
          <TouchableOpacity style={props.vtm} onPress={props.OnPressHandlervtm}>
            <Text style={MainContentStyles.LowRiskText}>متوسط</Text>
          </TouchableOpacity>
        </View>
        <View style={MainContentStyles.RiskContainer}>
          <TouchableOpacity style={props.vtg} onPress={props.OnPressHandlervtg}>
            <Text style={MainContentStyles.LowRiskText}>خوب</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={props.vtvg}
            onPress={props.OnPressHandlervtvg}>
            <Text style={MainContentStyles.LowRiskText}>خیلی خوب</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={MainContentStyles.ConfirmButton}
        onPress={props.QuestionOnPress}>
        <Text style={MainContentStyles.LowRiskText}>اعمال فیلتر</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const Modal = props => {
  const ok = 'شپنا و شبندر و فولاد و خساپا';
  const notok = 'فیلتر مورد نظر را انتخاب کنید';
  return (
    <View pointerEvents={props.Pointer} style={props.OKButtonStyles}>
      <View style={Modalstyles.Container}>
        <Text style={Modalstyles.MainText}>
          {props.isSelectedVeryLowriskButton ||
          props.isSelectedLowriskButton ||
          props.isSelectedMediumriskButton ||
          props.isSelectedHighriskButton ||
          props.isSelectedLowVeryHighriskButton ||
          props.isSelectedngvl ||
          props.isSelectedngv ||
          props.isSelectedngm ||
          props.isSelectedngh ||
          props.isSelectedngvh ||
          props.isSelectedbvl ||
          props.isSelectedbl ||
          props.isSelectedbm ||
          props.isSelectedbh ||
          props.isSelectedbvh ||
          props.isSelectedavl ||
          props.isSelectedal ||
          props.isSelectedam ||
          props.isSelectedah ||
          props.isSelectedavh ||
          props.isSelectedtvb ||
          props.isSelectedtb ||
          props.isSelectedtm ||
          props.isSelectedtg ||
          props.isSelectedtvg ||
          props.isSelectedvtvb ||
          props.isSelectedvtb ||
          props.isSelectedvtm ||
          props.isSelectedvtg ||
          props.isSelectedvtvg
            ? ok
            : notok}
        </Text>
        <TouchableOpacity
          onPress={props.OKButtonOnPress}
          style={Modalstyles.Buttons}>
          <Text style={Modalstyles.ButtonText}>فهمیدم</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Filter = () => {
  const [VeryLowRiskColor, setVeryLowRiskColor] = useState(
    StyleSheet.create({backgroundColor: '#aaa'}),
  );
  const [LowRiskColor, setLowRiskColor] = useState(
    StyleSheet.create({backgroundColor: '#aaa'}),
  );
  const [MediumRiskColor, setMediumRiskColor] = useState(
    StyleSheet.create({backgroundColor: '#aaa'}),
  );
  const [HighRiskColor, setHighRiskColor] = useState(
    StyleSheet.create({backgroundColor: '#aaa'}),
  );
  const [VeryHighRiskColor, setVeryHighRiskColor] = useState(
    StyleSheet.create({backgroundColor: '#aaa'}),
  );
  const [ngvl, setNgvl] = useState(
    StyleSheet.create({backgroundColor: '#aaa'}),
  );
  const [ngl, setNgl] = useState(StyleSheet.create({backgroundColor: '#aaa'}));
  const [ngm, setNgm] = useState(StyleSheet.create({backgroundColor: '#aaa'}));
  const [ngvh, setNgvh] = useState(
    StyleSheet.create({backgroundColor: '#aaa'}),
  );
  const [ngh, setNgh] = useState(StyleSheet.create({backgroundColor: '#aaa'}));
  const [bvl, setbvl] = useState(StyleSheet.create({backgroundColor: '#aaa'}));
  const [bl, setbl] = useState(StyleSheet.create({backgroundColor: '#aaa'}));
  const [bm, setbm] = useState(StyleSheet.create({backgroundColor: '#aaa'}));
  const [bh, setbh] = useState(StyleSheet.create({backgroundColor: '#aaa'}));
  const [bvh, setbvh] = useState(StyleSheet.create({backgroundColor: '#aaa'}));
  const [avl, setavl] = useState(StyleSheet.create({backgroundColor: '#aaa'}));
  const [al, setal] = useState(StyleSheet.create({backgroundColor: '#aaa'}));
  const [am, setam] = useState(StyleSheet.create({backgroundColor: '#aaa'}));
  const [ah, setah] = useState(StyleSheet.create({backgroundColor: '#aaa'}));
  const [avh, setavh] = useState(StyleSheet.create({backgroundColor: '#aaa'}));
  const [tvb, settvb] = useState(StyleSheet.create({backgroundColor: '#aaa'}));
  const [tb, settb] = useState(StyleSheet.create({backgroundColor: '#aaa'}));
  const [tm, settm] = useState(StyleSheet.create({backgroundColor: '#aaa'}));
  const [tg, settg] = useState(StyleSheet.create({backgroundColor: '#aaa'}));
  const [tvg, settvg] = useState(StyleSheet.create({backgroundColor: '#aaa'}));
  const [vtvb, setvtvb] = useState(
    StyleSheet.create({backgroundColor: '#aaa'}),
  );
  const [vtb, setvtb] = useState(StyleSheet.create({backgroundColor: '#aaa'}));
  const [vtm, setvtm] = useState(StyleSheet.create({backgroundColor: '#aaa'}));
  const [vtg, setvtg] = useState(StyleSheet.create({backgroundColor: '#aaa'}));
  const [vtvg, setvtvg] = useState(
    StyleSheet.create({backgroundColor: '#aaa'}),
  );
  const [SelectedVeryLowriskButton, setSelectedVeryLowriskButton] =
    useState(false);
  const [SelectedLowriskButton, setSelectedLowriskButton] = useState(false);
  const [SelectedMediumriskButton, setSelectedMediumriskButton] =
    useState(false);
  const [SelectedHighriskButton, setSelectedHighriskButton] = useState(false);
  const [SelectedLowVeryHighriskButton, setSelectedVeryHighriskButton] =
    useState(false);
  const [Selectedngvl, setSelecCktedngvl] = useState(false);
  const [Selectedngv, setSelecCktedngv] = useState(false);
  const [Selectedngm, setSelecCktedngm] = useState(false);
  const [Selectedngvh, setSelecCktedngvh] = useState(false);
  const [Selectedngh, setSelecCktedngh] = useState(false);
  const [Selectedbvl, setSelecCktedbvl] = useState(false);
  const [Selectedbl, setSelecCktedbl] = useState(false);
  const [Selectedbm, setSelecCktedbm] = useState(false);
  const [Selectedbh, setSelecCktedbh] = useState(false);
  const [Selectedbvh, setSelecCktedbvh] = useState(false);
  const [Selectedavl, setSelecCktedavl] = useState(false);
  const [Selectedal, setSelecCktedal] = useState(false);
  const [Selectedam, setSelecCktedam] = useState(false);
  const [Selectedah, setSelecCktedah] = useState(false);
  const [Selectedavh, setSelecCktedavh] = useState(false);
  const [Selectedtvb, setSelecCktedtvb] = useState(false);
  const [Selectedtb, setSelecCktedtb] = useState(false);
  const [Selectedtm, setSelecCktedtm] = useState(false);
  const [Selectedtg, setSelecCktedtg] = useState(false);
  const [Selectedtvg, setSelecCktedtvg] = useState(false);
  const [Selectedvtvb, setSelecCktedvtvb] = useState(false);
  const [Selectedvtb, setSelecCktedvtb] = useState(false);
  const [Selectedvtm, setSelecCktedvtm] = useState(false);
  const [Selectedvtg, setSelecCktedvtg] = useState(false);
  const [Selectedvtvg, setSelecCktedvtvg] = useState(false);
  const [LowRiskLocalStorage, setLoRiskLocalStorage] = useState();
  const [SelectedOKButton, setSelectedOKButton] = useState(false);
  const [OKButtonOpacity, setOKButtonOpacity] = useState(
    StyleSheet.create({opacity: 0}),
  );
  const [Pointer, setPointer] = useState('none');

  const OnPressHandlerLowRiskColor = () => {
    if (!SelectedLowriskButton) {
      setSelectedLowriskButton(true);
      setLowRiskColor(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelectedLowriskButton(false);
      setLowRiskColor(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlerVeryHighRisk = () => {
    if (!SelectedLowVeryHighriskButton) {
      setSelectedVeryHighriskButton(true);
      setVeryHighRiskColor(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelectedVeryHighriskButton(false);
      setVeryHighRiskColor(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlerHighRisk = () => {
    if (!SelectedHighriskButton) {
      setSelectedHighriskButton(true);
      setHighRiskColor(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelectedHighriskButton(false);
      setHighRiskColor(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlerMediumRisk = () => {
    if (!SelectedMediumriskButton) {
      setSelectedMediumriskButton(true);
      setMediumRiskColor(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelectedMediumriskButton(false);
      setMediumRiskColor(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlerVeryLowRisk = () => {
    if (!SelectedVeryLowriskButton) {
      setSelectedVeryLowriskButton(true);
      setVeryLowRiskColor(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelectedVeryLowriskButton(false);
      setVeryLowRiskColor(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlerngvl = () => {
    if (!Selectedngvl) {
      setSelecCktedngvl(true);
      setNgvl(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedngvl(false);
      setNgvl(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlerngl = () => {
    if (!Selectedngv) {
      setSelecCktedngv(true);
      setNgl(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedngv(false);
      setNgl(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlerngm = () => {
    if (!Selectedngm) {
      setSelecCktedngm(true);
      setNgm(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedngm(false);
      setNgm(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlerngvh = () => {
    if (!Selectedngvh) {
      setSelecCktedngvh(true);
      setNgvh(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedngvh(false);
      setNgvh(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlerngh = () => {
    if (!Selectedngh) {
      setSelecCktedngh(true);
      setNgh(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedngh(false);
      setNgh(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlerbvl = () => {
    if (!Selectedbvl) {
      setSelecCktedbvl(true);
      setbvl(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedbvl(false);
      setbvl(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlerbl = () => {
    if (!Selectedbl) {
      setSelecCktedbl(true);
      setbl(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedbl(false);
      setbl(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlerbm = () => {
    if (!Selectedbm) {
      setSelecCktedbm(true);
      setbm(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedbm(false);
      setbm(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlerbh = () => {
    if (!Selectedbh) {
      setSelecCktedbh(true);
      setbh(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedbh(false);
      setbh(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlerbvh = () => {
    if (!Selectedbvh) {
      setSelecCktedbvh(true);
      setbvh(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedbvh(false);
      setbvh(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandleravl = () => {
    if (!Selectedavl) {
      setSelecCktedavl(true);
      setavl(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedavl(false);
      setavl(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandleral = () => {
    if (!Selectedal) {
      setSelecCktedal(true);
      setal(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedal(false);
      setal(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandleram = () => {
    if (!Selectedam) {
      setSelecCktedam(true);
      setam(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedam(false);
      setam(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlerah = () => {
    if (!Selectedah) {
      setSelecCktedah(true);
      setah(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedah(false);
      setah(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandleravh = () => {
    if (!Selectedavh) {
      setSelecCktedavh(true);
      setavh(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedavh(false);
      setavh(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlertvb = () => {
    if (!Selectedtvb) {
      setSelecCktedtvb(true);
      settvb(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedtvb(false);
      settvb(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };

  const OnPressHandlertb = () => {
    if (!Selectedtb) {
      setSelecCktedtb(true);
      settb(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedtb(false);
      settb(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlertm = () => {
    if (!Selectedtm) {
      setSelecCktedtm(true);
      settm(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedtm(false);
      settm(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlertg = () => {
    if (!Selectedtg) {
      setSelecCktedtg(true);
      settg(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedtg(false);
      settg(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlertvg = () => {
    if (!Selectedtvg) {
      setSelecCktedtvg(true);
      settvg(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedtvg(false);
      settvg(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlervtvb = () => {
    if (!Selectedvtvb) {
      setSelecCktedvtvb(true);
      setvtvb(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedvtvb(false);
      setvtvb(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlervtb = () => {
    if (!Selectedvtb) {
      setSelecCktedvtb(true);
      setvtb(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedvtb(false);
      setvtb(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlervtm = () => {
    if (!Selectedvtm) {
      setSelecCktedvtm(true);
      setvtm(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedvtm(false);
      setvtm(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlervtg = () => {
    if (!Selectedvtg) {
      setSelecCktedvtg(true);
      setvtg(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedvtg(false);
      setvtg(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressHandlervtvg = () => {
    if (!Selectedvtvg) {
      setSelecCktedvtvg(true);
      setvtvg(StyleSheet.create({backgroundColor: '#36D571'}));
    } else {
      setSelecCktedvtvg(false);
      setvtvg(StyleSheet.create({backgroundColor: '#aaa'}));
    }
  };
  const OnPressQuestionHandler = () => {
    if (!SelectedOKButton) {
      setSelectedOKButton(true);
      setPointer('auto');
      setOKButtonOpacity(StyleSheet.create({opacity: 1}));
      console.log(Pointer);
    }
  };
  const OnPressOKButtonHandler = () => {
    if (SelectedOKButton) {
      setSelectedOKButton(false);
      setPointer('none');
      setOKButtonOpacity(StyleSheet.create({opacity: 0}));
    }
  };

  return (
    <View style={MainPageStyles.Container}>
      <HeaderPage />
      <MainContent
        LowRiskButtonColor={[LowRiskColor, MainContentStyles.LowRiskButton]}
        VeryLowRiskColor={[VeryLowRiskColor, MainContentStyles.LowRiskButton]}
        MediumRiskColor={[MediumRiskColor, MainContentStyles.LowRiskButton]}
        HighRiskColor={[HighRiskColor, MainContentStyles.LowRiskButton]}
        VeryHighRiskColor={[VeryHighRiskColor, MainContentStyles.LowRiskButton]}
        ngvl={[ngvl, MainContentStyles.LowRiskButton]}
        ngl={[ngl, MainContentStyles.LowRiskButton]}
        ngm={[ngm, MainContentStyles.LowRiskButton]}
        ngvh={[ngvh, MainContentStyles.LowRiskButton]}
        ngh={[ngh, MainContentStyles.LowRiskButton]}
        bvl={[bvl, MainContentStyles.LowRiskButton]}
        bl={[bl, MainContentStyles.LowRiskButton]}
        bm={[bm, MainContentStyles.LowRiskButton]}
        bh={[bh, MainContentStyles.LowRiskButton]}
        bvh={[bvh, MainContentStyles.LowRiskButton]}
        avl={[avl, MainContentStyles.LowRiskButton]}
        al={[al, MainContentStyles.LowRiskButton]}
        am={[am, MainContentStyles.LowRiskButton]}
        ah={[ah, MainContentStyles.LowRiskButton]}
        avh={[avh, MainContentStyles.LowRiskButton]}
        tvb={[tvb, MainContentStyles.LowRiskButton]}
        tb={[tb, MainContentStyles.LowRiskButton]}
        tm={[tm, MainContentStyles.LowRiskButton]}
        tg={[tg, MainContentStyles.LowRiskButton]}
        tvg={[tvg, MainContentStyles.LowRiskButton]}
        vtvb={[vtvb, MainContentStyles.LowRiskButton]}
        vtb={[vtb, MainContentStyles.LowRiskButton]}
        vtm={[vtm, MainContentStyles.LowRiskButton]}
        vtg={[vtg, MainContentStyles.LowRiskButton]}
        vtvg={[vtvg, MainContentStyles.LowRiskButton]}
        LowRiskButtonOnPress={OnPressHandlerLowRiskColor}
        OnPressHandlerVeryLowRisk={OnPressHandlerVeryLowRisk}
        OnPressHandlerMediumRisk={OnPressHandlerMediumRisk}
        OnPressHandlerHighRisk={OnPressHandlerHighRisk}
        OnPressHandlerVeryHighRisk={OnPressHandlerVeryHighRisk}
        OnPressHandlerngvl={OnPressHandlerngvl}
        OnPressHandlerngl={OnPressHandlerngl}
        OnPressHandlerngm={OnPressHandlerngm}
        OnPressHandlerngvh={OnPressHandlerngvh}
        OnPressHandlerngh={OnPressHandlerngh}
        OnPressHandlerbvl={OnPressHandlerbvl}
        OnPressHandlerbl={OnPressHandlerbl}
        OnPressHandlerbm={OnPressHandlerbm}
        OnPressHandlerbh={OnPressHandlerbh}
        OnPressHandlerbvh={OnPressHandlerbvh}
        OnPressHandleravl={OnPressHandleravl}
        OnPressHandleral={OnPressHandleral}
        OnPressHandleram={OnPressHandleram}
        OnPressHandlerah={OnPressHandlerah}
        OnPressHandleravh={OnPressHandleravh}
        OnPressHandlertvb={OnPressHandlertvb}
        OnPressHandlertb={OnPressHandlertb}
        OnPressHandlertm={OnPressHandlertm}
        OnPressHandlertg={OnPressHandlertg}
        OnPressHandlertvg={OnPressHandlertvg}
        OnPressHandlervtvb={OnPressHandlervtvb}
        OnPressHandlervtb={OnPressHandlervtb}
        OnPressHandlervtm={OnPressHandlervtm}
        OnPressHandlervtg={OnPressHandlervtg}
        OnPressHandlervtvg={OnPressHandlervtvg}
        QuestionOnPress={OnPressQuestionHandler}
        IsLowRisk={SelectedLowriskButton}
      />
      <Modal
        OKButtonOnPress={OnPressOKButtonHandler}
        OKButtonStyles={[OKButtonOpacity, Modalstyles.MainContainer]}
        isSelectedLowriskButton={SelectedLowriskButton}
        isSelectedVeryLowriskButton={SelectedVeryLowriskButton}
        isSelectedMediumriskButton={SelectedMediumriskButton}
        isSelectedHighriskButton={SelectedHighriskButton}
        isSelectedLowVeryHighriskButton={SelectedLowVeryHighriskButton}
        isSelectedngvl={Selectedngvl}
        isSelectedngv={Selectedngv}
        isSelectedngm={Selectedngm}
        isSelectedngh={Selectedngh}
        isSelectedngvh={Selectedngvh}
        isSelectedbvl={Selectedbvl}
        isSelectedbl={Selectedbl}
        isSelectedbm={Selectedbm}
        isSelectedbh={Selectedbh}
        isSelectedbvh={Selectedbvh}
        isSelectedavl={Selectedavl}
        isSelectedal={Selectedal}
        isSelectedam={Selectedam}
        isSelectedah={Selectedah}
        isSelectedavh={Selectedavh}
        isSelectedtvb={Selectedtvb}
        isSelectedtb={Selectedtb}
        isSelectedtm={Selectedtm}
        isSelectedtg={Selectedtg}
        isSelectedtvg={Selectedtvg}
        isSelectedvtvb={Selectedvtvb}
        isSelectedvtb={Selectedvtb}
        isSelectedvtm={Selectedvtm}
        isSelectedvtg={Selectedvtg}
        isSelectedvtvg={Selectedvtvg}
        Pointer={Pointer}
      />
    </View>
  );
};

const HeaderPageStyles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    width: wp(100),
    height: hp(10),
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderText: {
    color: '#000',
    fontSize: hp(6.29),
    fontWeight: 'bold',
  },
  vv: {
    width: wp('29.3333%'),
    height: hp('16.4917'),
    // width: 100,
    // height: 100,
    backgroundColor: '#fff',
  },
});

const MainPageStyles = StyleSheet.create({
  Container: {
    backgroundColor: '#2B283A',
    width: wp(100),
    height: hp(100),
  },
});

const MainContentStyles = StyleSheet.create({
  RiskContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'center',
  },
  RiskTextContainer: {
    backgroundColor: '#fff',
    height: 30,
    marginTop: 10,
    alignItems: 'center',
  },
  LowRiskButton: {
    width: 125,
    height: 50,
    marginLeft: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ConfirmButton: {
    backgroundColor: '#feb000',
    width: 300,
    height: 50,
    marginTop: 150,
    marginBottom: 15,
    marginLeft: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  QuestionMarker: {
    backgroundColor: '#fe6600',
    width: 20,
    height: 20,
    marginTop: 15,
    marginLeft: 25,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  QuestionMarkerText: {
    fontSize: hp(2),
  },
  Container: {
    // flexDirection: 'row',
    marginTop: 50,
  },
  LowRiskText: {
    color: '#000',
    fontSize: hp(2.5),
  },
});

const Modalstyles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#55555550',
    width: wp(100),
    height: hp(100),
    position: 'absolute',
  },
  Container: {
    backgroundColor: '#fff',
    width: 300,
    height: 300,
    marginTop: 200,
    marginLeft: 55,
    borderRadius: 25,
    alignItems: 'center',
  },
  Buttons: {
    height: 50,
    width: 250,
    marginTop: 180,
    borderRadius: 25,
    backgroundColor: '#feb000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    color: '#000',
    fontSize: hp(3),
  },
  MainText: {
    color: '#000',
    fontSize: hp(3),
    marginTop: 15,
  },
});
export default Filter;
