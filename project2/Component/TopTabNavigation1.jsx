import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation1 = () => {
    return (

        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='Login' component={Login} />

            </Tab.Navigator>
        </NavigationContainer>

    )
}

const Login = () => {
    return (
        <View>
            <Text> Login Screen </Text>
        </View>
    )
}
const Home = () => {
    return (
        <View>
            <Text> Home Screen </Text>
        </View>
    )

}

export default TopTabNavigation1

const styles = StyleSheet.create({})