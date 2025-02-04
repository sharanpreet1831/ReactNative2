import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Outlets from './Outlets'
import Orders from './Orders'
import uMoney from './uMoney'
import Profile from './Profile'



const Tab = createBottomTabNavigator();
const Home = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerStyle :{
                    backgroundColor : 'red',
                    // height : 120
                },
                headerTitleStyle :{
                    fontSize : 24
                },
                headerTintColor : 'white'
            }}>
                <Tab.Screen name='Outlets' component={Outlets}

              
                />
                <Tab.Screen  name ='Orders' component={Orders} />
                <Tab.Screen name ='uMoney' component={uMoney} />
                <Tab.Screen name ='Profile' component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}



export default Home

const styles = StyleSheet.create({})