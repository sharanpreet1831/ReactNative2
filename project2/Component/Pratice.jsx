import { SafeAreaView, StyleSheet, Text, View , useWindowDimensions } from 'react-native'
import React from 'react'


const Pratice = () => {
    const {width , height} = useWindowDimensions()
    return (
        <SafeAreaView style={styles.main}>

            <Text style={[styles.box1 , {width : "40%" , height : "30%"}]}></Text>
            <View style = {styles.boxcontainer}>
                <Text style={[styles.box2 , {width : "50%" , height : "60%" }]}></Text>
            </View>

        </SafeAreaView>
    )
}

export default Pratice

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width : "100%",
        height : "100%"
       
    },
    box1: {
       
        backgroundColor: 'red'
    },
    boxcontainer:{
        flex  : 1,
        justifyContent : 'flex-end',
        alignItems : 'flex-end',
        padding: 8 
    },
    box2: {
       
        backgroundColor: 'blue',

    }
})