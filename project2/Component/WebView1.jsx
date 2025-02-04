import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {WebView} from 'react-native-webview'

const WebView1 = () => {
  return (
 
     <WebView  source={{uri:'https://www.Google.com'}}/>
  
  )
}

export default WebView1

const styles = StyleSheet.create({})