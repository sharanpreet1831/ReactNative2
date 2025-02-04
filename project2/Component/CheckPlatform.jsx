import { SafeAreaView, StyleSheet, Text, View , Platform} from 'react-native'
import React from 'react'

const CheckPlatform = () => {
  return (
    <SafeAreaView>
      <Text style = { styles.content }> {Platform.OS} </Text>
      
      {
        Platform.OS == "android"  ?
        <View style = {styles.view} > </View> 
        :
          <View style = {styles.view2} > </View>
      }

      <Text style = { styles.content2}> hello </Text>
      <Text> {JSON.stringify(Platform.constants.reactNativeVersion.minor)} </Text>
    </SafeAreaView>
  )
}

export default CheckPlatform

const styles = StyleSheet.create({
    content : {
        fontSize : 40
    },
    view : {
        width : 100 ,
        height : 100,
        backgroundColor : 'red'
    },
    view2 : {
        width : 100 ,
        height : 100,
        backgroundColor : 'blue'
    },
    content2 : {
        color : Platform.OS == "ios" ? 'green' : "purple",
        fontSize : 50 
    }
})