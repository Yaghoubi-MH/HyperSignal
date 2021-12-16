import React, { useState, useEffect, use } from "react";
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Image, ImageBackground, StatusBar } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPageMainContainer = (props) => {
    return (
        <View style={LoginPageMainContainerStyles.MainContainer}>
            <Text style={LoginPageMainContainerStyles.PhoneNumberText}>شماره همراه خود را وارد کنید</Text>
            <TextInput
                {...props}
                style={LoginPageMainContainerStyles.UserInput}
                placeholder="e.g. 09120000000"
                keyboardType="numeric"
            />
            <TouchableOpacity
                {...props}
                style={LoginPageMainContainerStyles.ConfirmButton}
            >
                <Text style={LoginPageMainContainerStyles.ConfirmText}>ارسال</Text>
            </TouchableOpacity>
        </View>
    )
}

const LoginPageHeader = () => {
    return (
        <ImageBackground style={LoginPageHeaderStyles.ImageHeader}
            source={require("../Images/LoginShape.png")}>
            <View style={LoginPageHeaderStyles.HeaderContainer}>
                <Image style={LoginPageHeaderStyles.Logo} source={require("../Images/LOGO.png")} />
                <Text style={LoginPageHeaderStyles.LogoText}>های‍‍‍پر سیگنال</Text>
            </View>
        </ImageBackground>
    )
}

const Login = () => {
    const navigation = useNavigation()
    const [UserPhoneNumber, setUserPhoneNumber] = useState("")
    const [user, setUser] = useState()
    const onChangeTextHandler = (UserNumber) => {
        setUserPhoneNumber(UserNumber)
    }
    console.log(UserPhoneNumber)

    const OnPressHandler = async () => {
        try {
            await AsyncStorage.setItem("@user", UserPhoneNumber)
            axios.get("http:192.168.1.8/NewUserApi?userPhonenumber=" + UserPhoneNumber + "")
            navigation.navigate("HomePage")
        } catch (e) {
            
        }
    }

    return (

        < View style={{ backgroundColor: "#EFEED3" }}>
            <StatusBar hidden />
            <LoginPageHeader />
            <LoginPageMainContainer
                onChangeText={onChangeTextHandler}
                onPress={OnPressHandler}
                onSubmitEditing={OnPressHandler} />
        </View >

    )


}
const LoginPageHeaderStyles = StyleSheet.create({
    ImageHeader: {
        width: wp(100),
        height: hp(34.75),
    },
    HeaderContainer: {
        flexDirection: "row"
    },
    Logo: {
        // width: wp(17.86),
        // height: hp(10.04),
        marginTop: wp(5),
        marginLeft: hp(3),
    },
    LogoText: {
        color: "#000",
        fontSize: hp(3.74),
        fontWeight: "bold",
        marginLeft: wp(20),
        marginTop: hp(4)
    },
})
const LoginPageMainContainerStyles = StyleSheet.create({
    MainContainer: {
        backgroundColor: "#2DB4B4",
        width: wp(100),
        height: hp(59.62),
        marginTop: hp(6),
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: "center"
    },
    PhoneNumberText: {
        color: "#000",
        fontSize: hp(2.69),
        marginTop: hp(2),
        fontWeight: "bold"
    },
    UserInput: {
        backgroundColor: "#fff",
        width: wp(69.86),
        marginTop: hp(1.94),
        color: "#000",
        borderWidth: 2,
        borderRadius: 25,
        borderColor: "#0D1C47",
        textAlign: "center",
    },
    ConfirmButton: {
        backgroundColor: "#36D571",
        width: wp(42.4),
        height: hp(6.74),
        marginTop: hp(10.09),
        borderRadius: 25,
        borderColor: "#0D1C47",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    ConfirmText: {
        color: "#000",
        fontSize: hp(2.99)
    }
})
export default Login