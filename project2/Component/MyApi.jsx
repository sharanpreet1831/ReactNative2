import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const MyApi =   ()  => {

    const [data, setData] = useState([])
 
    const getApi = async () =>{
        const url = 'http://localhost:3000/user'
        let result = await fetch(url);
        result =  await result.json();
        setData(result)
    }

    useEffect(() => {
        getApi()
    },[])


  return (
    <SafeAreaView>
      <Text>MyApi</Text>
      {
        data.length  ?  data.map((item) => <View> <Text> {item.name}</Text></View>) : null 
      }
    </SafeAreaView>
  )
}

export default MyApi

const styles = StyleSheet.create({})