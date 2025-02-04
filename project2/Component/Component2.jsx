import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Component2 extends Component {
  render() {
    return (
      <View>
        <Text style = {{fontSize : 30 , color : "green"}}> Imported component  </Text>
      </View>
    )
  }
}

export default Component2
