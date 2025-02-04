import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ApiPost = () => {

    const SaveApiData = async () =>{
        const data = {

            name : "sam",
            age : 34

        }
        const url = 'http://localhost:3000/user'
        let result = await fetch(url, {
            method :"POST",
            headers:{ "Content-Type" : "application/json"},
            body:JSON.stringify(data)
        })
        result = await result.json() ;
        console.warn(result)

    }
  return (
    <SafeAreaView>
      <Text>ApiPost</Text>
      <Button title='Save Data'  onPress={SaveApiData}></Button>
    </SafeAreaView>
  )
}

export default ApiPost

const styles = StyleSheet.create({})