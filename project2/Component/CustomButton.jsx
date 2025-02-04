import { View, Text, SafeAreaView, TouchableHighlight, Button, StyleSheet ,elevation } from 'react-native'
import React from 'react'

const CustomButton = () => {
  return (
    <SafeAreaView style = {styles.main}>
      <Text style  = {{ fontSize : 20 }}>CustomButton with TouchableHighlight </Text>
      <TouchableHighlight> 
         <Text style = {[styles.button,styles.sucess]}> Sucess</Text>
      </TouchableHighlight>
      <TouchableHighlight> 
         <Text style = {[styles.button,styles.primary]}> Primary </Text>
      </TouchableHighlight>
      <TouchableHighlight> 
         <Text style = {styles.button}> Button</Text>
      </TouchableHighlight>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create( {
    main:{
        flex : 1
    },
    button: {
        backgroundColor : '#bbb',
        color:'#fff',
        fontSize :24 ,
        textAlign : 'center',
        padding: 10 ,
        margin : 10 ,
        borderRadius : 10 ,
        shadowColor : 'black' ,
        elevation: 10,
        shadowOpacity :1   

    },
    sucess: {backgroundColor : 'green'},
    primary :{
        backgroundColor : 'red'
    }
})

export default CustomButton