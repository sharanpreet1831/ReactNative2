import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Pressable1 = () => {
  return (
    <SafeAreaView style = {styles.main}>
        <Pressable 
        // onPress={() => console.log('normal on press')}
        // onLongPress={() => console.log('long press ')}
        onPressIn={() => console.log("press in ")}
        onPressOut={() => console.warn('press out ')}
        >
            <Text style = {styles.pressableBtn}>Pressable </Text>
        </Pressable>
    </SafeAreaView>
  )
}

export default Pressable1

const styles = StyleSheet.create({
    main :{
        flex : 1 ,
        justifyContent : 'center'
        
    },
    pressableBtn :{
        backgroundColor : 'blue',
        color : 'white',
        padding : 10 ,
        margin :10 , 
        borderRadius :10 ,
        fontSize : 20 ,
        textAlign : 'center',
        shadowColor :'black',
        elevation : 5 ,


    }
})