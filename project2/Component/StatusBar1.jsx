import { SafeAreaView, StyleSheet, Text, View , StatusBar , Button} from 'react-native'
import React, { useState } from 'react'

const StatusBar1 = () => {
  const [hide , setHide] = useState(false)
  const [barStyle , setBarStyle] = useState("default")
  return (
    <SafeAreaView style = {styles.main }>
      <Text>StatusBar</Text>
      <StatusBar 
      backgroundColor= "orange"
      barStyle= {barStyle}
      hidden = {hide}
      />
      <View style = {styles.content}>
      <Button title='TOGLE STATUS BAR ' onPress={() => setHide(!hide)} ></Button>
      <Button title='UPDATE STYLE ' onPress={ () => setBarStyle('light-content')}></Button>
      </View>
      
    </SafeAreaView>
  )
}

export default StatusBar1

const styles = StyleSheet.create({
  main : {
    flex :1 , 
    backgroundColor : 'orange'
  },
  content:{
    flex : 1,
    backgroundColor : 'blue',
   
    justifyContent :'center',
    color : '#fff'
  }
})