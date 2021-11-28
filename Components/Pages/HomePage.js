import React from "react";
import { View, Text, StyleSheet, StatusBar, Button, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/core";
import PushNotification from "react-native-push-notification";


function HeaderHomePage() {
    return (
        <View style={headerStyles.HeaderContainer}>
            <Text style={headerStyles.HeaderText}>welcome to hypersignal</Text>
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
                    onPress={()=>navigation.navigate("Search")}
                >
                    <Text style={ButtonStyles.TextOne}>search</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ButtonStyles.ButtonOne}
                    onPress={()=>navigation.navigate("Singup")}
                >
                    <Text style={ButtonStyles.TextOne}>SingUp</Text>
                </TouchableOpacity>
            </View>
            <View style={MainHomePageStyles.ButtonContainer}>
                <TouchableOpacity
                    style={ButtonStyles.ButtonOne}
                >
                    <Text style={ButtonStyles.TextOne}>ButtonThree</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ButtonStyles.ButtonOne}
                >
                    <Text style={ButtonStyles.TextOne}>ButtonFour</Text>
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
        backgroundColor: "#47ff97",
        width: wp("100%"),
        height: hp("12%"),
        borderBottomRightRadius: 75,
        borderBottomLeftRadius: 75,
        justifyContent: "center",
        alignItems: "center"
    },
    HeaderText: {
        color: "#000",
        fontSize: hp("3%"),
        fontWeight: "bold"
    }
})

const MainHomePageStyles = StyleSheet.create({
    MainContainer: {
        backgroundColor: "#474eff",
        width: wp("100%"),
        height: hp("100%"),
    },
    ButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: wp("10%")
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
    TextOne: {
        color: "#000",
        fontSize: hp("2%"),
        fontWeight: "bold"

    }
})
export default MainHomePage