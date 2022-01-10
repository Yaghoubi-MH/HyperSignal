import React, { useState } from "react";
import { View, Text, StyleSheet, Image, StatusBar, Button, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/core";
import PushNotification from "react-native-push-notification";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { color } from "react-native-elements/dist/helpers";

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
            <TouchableOpacity
                style={props.LowRiskButtonColor}
                onPress={props.LowRiskButtonOnPress}>
                <Text style={MainContentStyles.LowRiskText}>کم ریسک</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={MainContentStyles.ConfirmButton}>
                <Text style={MainContentStyles.LowRiskText}>اعمال فیلتر</Text>
            </TouchableOpacity>
        </View>
    )
}

const Filter = () => {
    const [LowRiskColor, setLowRiskColor] = useState(StyleSheet.create({ backgroundColor: "#aaa", }))
    const [SelectedLowriskButton, setSelectedLowriskButton] = useState(false)
    const [LowRiskLocalStorage, setLoRiskLocalStorage] = useState()

    const OnPressHandlerLowRiskColor = () => {
        if (!SelectedLowriskButton) {
            setSelectedLowriskButton(true)
            setLowRiskColor(StyleSheet.create({ backgroundColor: "#36D571" }))
        } else {
            setSelectedLowriskButton(false)
            setLowRiskColor(StyleSheet.create({ backgroundColor: "#aaa" }))
        }
    }

    return (
        <View style={MainPageStyles.Container}>
            <HeaderPage />
            <MainContent
                LowRiskButtonColor={[LowRiskColor, MainContentStyles.LowRiskButton]}
                LowRiskButtonOnPress={OnPressHandlerLowRiskColor} />
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
        width: 300,
        height: 50,
        marginTop: 200,
        marginLeft: 60,
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
    LowRiskText: {
        color: "#000",
        fontSize: hp(2.5)
    }
})
export default Filter