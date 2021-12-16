import React from "react";
import { View, Text, StyleSheet, Image, StatusBar, Button, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/core";
import PushNotification from "react-native-push-notification";
import AsyncStorage from '@react-native-async-storage/async-storage';

function HeaderHomePage() {
    return (
        <View style={headerStyles.HeaderContainer}>
            <Text style={headerStyles.HeaderText}>هایپر سیگنال</Text>
            <Image style={headerStyles.Shape} source={require("../Images/Shape.png")} />
        </View>
    )
}

function Buttons() {
    const navigation = useNavigation()
    return (
        <View>
            <View style={MainHomePageStyles.ButtonContainer}>
                <TouchableOpacity
                    style={ButtonStyles.ButtonOne}
                    onPress={() => navigation.navigate("Filter")}
                >
                    <Text style={ButtonStyles.TextOne}>فیلتر</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ButtonStyles.ButtonOne}
                >
                    <Text style={ButtonStyles.TextOne}>دوم</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ButtonStyles.ButtonOne}
                >
                    <Text style={ButtonStyles.TextOne}>سوم</Text>
                </TouchableOpacity>
            </View>
            <View style={MainHomePageStyles.ButtonContainer}>
                <TouchableOpacity
                    style={ButtonStyles.ButtonOne}
                >
                    <Text style={ButtonStyles.TextOne}>چهارم</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ButtonStyles.ButtonOne}
                >
                    <Text style={ButtonStyles.TextOne}>پنجم</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ButtonStyles.ButtonOne}
                >
                    <Text style={ButtonStyles.TextOne}>ششم</Text>
                </TouchableOpacity>
            </View>
            <View style={MainHomePageStyles.Exit}>
                <TouchableOpacity
                    style={ButtonStyles.ButtonExit}
                    onPress={() => {
                        AsyncStorage.removeItem("@user")
                        navigation.navigate("Login")
                    }}
                >
                    <Text style={ButtonStyles.TextOne}>خروج</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

function MainHomePage() {
    return (
        <View style={MainHomePageStyles.MainContainer}>
            <HeaderHomePage />
            <Buttons />
        </View>
    )
}

const headerStyles = StyleSheet.create({
    HeaderContainer: {
        alignItems: "center"
    },
    Shape: {
        width: wp(100),
        height: hp(20.28),
        resizeMode: "cover",
        marginTop: hp(2.39)
    },
    HeaderText: {
        color: "#fff",
        fontSize: hp(4.94),
        marginTop: hp(1.79),
        fontWeight: "bold"
    }
})

const MainHomePageStyles = StyleSheet.create({
    MainContainer: {
        backgroundColor: "#2B283A",
        width: wp("100%"),
        height: hp("100%"),
    },
    ButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: hp(9.85)
    },
    Exit: {
        width: wp(100),
        justifyContent: "center",
        alignItems: "center",
        marginTop : hp(9.89)
    }
})

const ButtonStyles = StyleSheet.create({
    ButtonOne: {
        backgroundColor: "#feb000",
        width: 100,
        height: 100,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",

    },
    ButtonExit: {
        backgroundColor: "#feb000",
        width: 372,
        height: 62,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",

    },
    TextOne: {
        color: "#000",
        fontSize: hp(3.44),
        fontWeight: "bold"

    }
})
export default MainHomePage