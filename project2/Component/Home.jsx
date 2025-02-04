import { View, Text , Button } from 'react-native'
import React from 'react'
import Login from './ConversionApp/Login'


const Home = (props) => {
    const {name , age} = props.route.params
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}> Home Screen   </Text>
            <Text style={{ fontSize: 30 }}> Name : {props.route.params.name}   </Text>
            <Text style={{ fontSize: 30 }}> Age : {props.route.params.age}  </Text>
        </View>
    )
}

export default Home