import React, { useState } from "react";
import { View, Text, StyleSheet, Image, StatusBar, Button, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/core";
import PushNotification from "react-native-push-notification";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { color } from "react-native-elements/dist/helpers";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const HeaderPage = () => {
    return (
        <View style={HeaderPageStyles.Container}>
            <Text style={HeaderPageStyles.HeaderText}>فیلتر</Text>
        </View>
    )
}

const MainContent = (props) => {
    return (
        <View>
            <View style={MainContentStyles.Container}>
                <TouchableOpacity
                    onPress={props.QuestionOnPress}
                    style={MainContentStyles.QuestionMarker}>
                    <Text style={MainContentStyles.QuestionMarkerText}>?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={props.LowRiskButtonColor}
                    onPress={props.LowRiskButtonOnPress}>
                    <Text style={MainContentStyles.LowRiskText}>کم ریسک</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={MainContentStyles.ConfirmButton}>
                <Text style={MainContentStyles.LowRiskText}>اعمال فیلتر</Text>
            </TouchableOpacity>
        </View>
    )
}
const Modal = (props) => {
    return (
        <View
            pointerEvents={props.Pointer}
            style={props.OKButtonStyles}>
            <View style={Modalstyles.Container}>
                <Text style={Modalstyles.MainText}>جدا از اسمش معلوم نیست؟</Text>
                <TouchableOpacity
                    onPress={props.OKButtonOnPress}
                    style={Modalstyles.Buttons}>
                    <Text style={Modalstyles.ButtonText}>فهمیدم</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const Filter = () => {
    const [LowRiskColor, setLowRiskColor] = useState(StyleSheet.create({ backgroundColor: "#aaa", }))
    const [SelectedLowriskButton, setSelectedLowriskButton] = useState(false)
    const [LowRiskLocalStorage, setLoRiskLocalStorage] = useState()
    const [SelectedOKButton, setSelectedOKButton] = useState(false)
    const [OKButtonOpacity, setOKButtonOpacity] = useState(StyleSheet.create({ opacity: 0 }))
    const [Pointer, setPointer] = useState("none")

    const OnPressHandlerLowRiskColor = () => {
        if (!SelectedLowriskButton) {
            setSelectedLowriskButton(true)
            setLowRiskColor(StyleSheet.create({ backgroundColor: "#36D571" }))
        } else {
            setSelectedLowriskButton(false)
            setLowRiskColor(StyleSheet.create({ backgroundColor: "#aaa" }))
        }
    }
    const OnPressQuestionHandler = () => {
        if (!SelectedOKButton) {
            setSelectedOKButton(true)
            setPointer("auto")
            setOKButtonOpacity(StyleSheet.create({ opacity: 1 }))
            console.log(Pointer)
        }
    }
    const OnPressOKButtonHandler = () => {
        if (SelectedOKButton) {
            setSelectedOKButton(false)
            setPointer("none")
            setOKButtonOpacity(StyleSheet.create({ opacity: 0 }))
        }
    }
    return (
        <View style={MainPageStyles.Container}>
            <HeaderPage />
            <MainContent
                LowRiskButtonColor={[LowRiskColor, MainContentStyles.LowRiskButton]}
                LowRiskButtonOnPress={OnPressHandlerLowRiskColor}
                QuestionOnPress={OnPressQuestionHandler} />
            <Modal
                OKButtonOnPress={OnPressOKButtonHandler}
                OKButtonStyles={[OKButtonOpacity, Modalstyles.MainContainer]}
                Pointer={Pointer}
            />
        </View>
    )
}

const HeaderPageStyles = StyleSheet.create({
    Container: {
        backgroundColor: "#fff",
        width: wp(100),
        height: hp(10),
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    HeaderText: {
        color: "#000",
        fontSize: hp(6.29),
        fontWeight: "bold"
    }
})

const MainPageStyles = StyleSheet.create({
    Container: {
        backgroundColor: "#2B283A",
        width: wp(100),
        height: hp(100),
    }
})

const MainContentStyles = StyleSheet.create({
    LowRiskButton: {
        width: 200,
        height: 50,
        marginLeft: 150,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    ConfirmButton: {
        backgroundColor: "#feb000",
        width: 300,
        height: 50,
        marginTop: 450,
        marginLeft: 60,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    QuestionMarker: {
        backgroundColor: "#fe6600",
        width: 20,
        height: 20,
        marginTop: 15,
        marginLeft: 25,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    QuestionMarkerText: {
        fontSize: hp(2)
    },
    Container: {
        flexDirection: "row",
        marginTop: 200,
    },
    LowRiskText: {
        color: "#000",
        fontSize: hp(2.5)
    }
})

const Modalstyles = StyleSheet.create({
    MainContainer: {
        backgroundColor: "#55555550",
        width: wp(100),
        height: hp(100),
        position: "absolute",
    },
    Container: {
        backgroundColor: "#fff",
        width: 300,
        height: 300,
        marginTop: 200,
        marginLeft: 55,
        borderRadius: 25,
        alignItems: "center"
    },
    Buttons: {
        height: 50,
        width: 250,
        marginTop: 180,
        borderRadius: 25,
        backgroundColor: "#feb000",
        justifyContent: "center",
        alignItems: "center"
    },
    ButtonText: {
        color: "#000",
        fontSize: hp(3)
    },
    MainText: {
        color: "#000",
        fontSize: hp(3.5),
        marginTop: 15
    }
})
export default Filter