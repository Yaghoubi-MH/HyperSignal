import React from "react";
import { View, Text, StyleSheet, StatusBar, Button, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import axios from "axios";

function GetDataFromMarketWatch(){
    axios.get("http://192.168.1.4:80/MarketWatchApi")
    .then((res)=>alert(JSON.stringify(res))).catch((err)=>alert(err))
}

function Search(){
    return ( 
        <View>
            <TouchableOpacity style={StyleSheet.create({
                width :200,
                height : 100,
                backgroundColor: "red"
            })}
            onPress={GetDataFromMarketWatch}
            >

            </TouchableOpacity>
        </View>
    )
}

export default Search