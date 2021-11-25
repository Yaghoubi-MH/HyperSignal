import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, FlatList } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SearchBar } from "react-native-elements";
import axios from "axios";

function SearchPage() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [abcd,setAbcd] = useState([])
    async function GetDataFromMarketWatchApi() {

        useEffect(() => {
            const fetchData = async () => {
                const result = await axios.get("http://192.168.1.4:80/MarketWatchApi")
                setData(result.data)
            }
            fetchData()
        }, [])
    }
    GetDataFromMarketWatchApi()


    
        const abc =data.filter(x=>x.namad == search)
        
  
    return (
        <View style={SearchPageStyles.SearchPageContainer}>
            <SearchBar
                onChangeText={(result) => setSearch(search + result)} />
            <Text >{search}</Text>
            <Text >{abcd.nam}</Text>
            <TouchableOpacity
                onPress={() => { setSearch("") }}>
                <Text>reset</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                    
                    setAbcd(abc[0])
                    console.log("lll",abcd)
                    }}>
                <Text>ok</Text>
            </TouchableOpacity>
        </View>
    )
}

const SearchPageStyles = StyleSheet.create({
    SearchPageContainer: {
        backgroundColor: "#5eff94",
        width: wp("100%"),
        height: hp("100%")
    }
})

export default SearchPage