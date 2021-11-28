import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Touchable } from 'react-native'
import { heightPercentageToDP, heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

function Singup() {
    const navigation = useNavigation()
    return (
        <View style={styles.Background}>
            <TouchableOpacity
                style={styles.Button}
                onPress={() => navigation.navigate("Login")}>
                <Text style={styles.Texts}>Login</Text>
            </TouchableOpacity> 
            <TouchableOpacity
                style={styles.Button}
                onPress={() => navigation.navigate("Singup")}>
                <Text style={styles.Texts}>Singup</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Background: {
        backgroundColor: "#feb444",
        height: hp('100')
    },
    Button:{
        backgroundColor:"#552244",
        width:wp("30"),
        height:hp("8"),
        marginTop:hp("10"),
        marginLeft:wp("35"),
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center"
    },
    Texts:{
        color:"#fff"
    }
})
export default Singup