import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Touchable } from 'react-native'
import { heightPercentageToDP, heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

function Singup() {
    const navigation = useNavigation()
    const [UserPhoneNumber, setUserPhoneNumber] = useState("")
    const [user, setUser] = useState([])
    return (
        <View style={styles.Background}>
              <View style={styles.head}>
                <Text style={styles.headt}>Login</Text>
            </View>
            <TextInput
                style={styles.Input}
                keyboardType="number-pad"
                placeholder="EnterPhoneNumber"
                placeholderTextColor="#00000060"
                onChangeText={(result) => setUserPhoneNumber(result)}
                onSubmitEditing={async () => {
                    const Result = await axios.get("http:192.168.1.4/ReadUsersApi?userPhonenumber="
                         + UserPhoneNumber + "").catch((err)=>console.log(err))
                    setUser(Result.data)
                }}
            />
            <TouchableOpacity
                style={styles.Button}
                onPress={() => navigation.navigate("HomePage")}>
                <Text style={styles.Texts}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    Background: {
        backgroundColor: "#feb444",
        height: hp('100')
    },
    head: {
        backgroundColor: "#a02ab8",
        height: hp('20'),
        justifyContent:"center",
        alignItems:"center"
    },
    Input: {
        width: wp("75"),
        marginTop: hp("40"),
        marginLeft: wp("12.5"),
        borderWidth: 0.8,
        borderColor: "#000",
        borderRadius: 25,
        backgroundColor: "#55ff6655",

    },
    Ok: {
        marginTop: 50,
        marginLeft: 170
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
    },
    headt:{
        color:"#000",
        fontSize:hp('5')
    }
})
export default Singup