import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator() ;
const TabNavigation1 = () => {
  return (
   <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name = 'Login' component={Login} />
        <Tab.Screen name = 'SignUp' component={Signup} />
    </Tab.Navigator>
   </NavigationContainer>
  )
};

const Login =() =>{
    return (
        <View style = {styles .LoginContent}>
            <Text> Login </Text>
        </View>
    )
}
const Signup =() =>{
    return (
        <View style = {styles .SignUpContent}>
            <Text> Signup </Text>
        </View>
    )
}
export default TabNavigation1

const styles = StyleSheet.create({
    LoginContent:{
        flex : 1 ,
        justifyContent : 'center',
        alignItems : 'center',
       

    },
    SignUpContent : {
        flex : 1 ,
        justifyContent : 'center',
        alignItems : 'center',
       
    }

})