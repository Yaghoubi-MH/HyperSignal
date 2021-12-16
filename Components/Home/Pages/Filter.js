import React from "react";
import { View, Text, StyleSheet, Image, StatusBar, Button, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/core";
import PushNotification from "react-native-push-notification";
import AsyncStorage from '@react-native-async-storage/async-storage';

const HeaderPage = () => {
    return (
        <View style={HeaderPageStyles.Container}>
            <Text style={HeaderPageStyles.HeaderText}>فیلتر</Text>
        </View>
    )
}

const Filter = () => {
    return (
        <View style={MainPageStyles.Container}>
            <HeaderPage />
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
        justifyContent : "center",
        alignItems : "center"
    },
    HeaderText: {
        color : "#000",
        fontSize : hp(6.29),
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
export default Filter