import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import Login from './ConversionApp/Login'
import Home from './Home'

const stack = createNativeStackNavigator()
const Navigation1 = () => {
    
    return (
        <NavigationContainer>
            <stack.Navigator
                screenOptions={{

                    headerStyle: {
                        backgroundColor: 'skyblue',

                    },
                    headerTitleStyle: {
                        fontSize: 25
                    },
                    headerTintColor: 'purple'
                }}

            >
                <stack.Screen name='Login' component={Login}
                    options={{
                        headerTitle: (props) => <Button title='Left'  onPress={() => console.warn("left button press")}/>,
                        headerRight: () => <Header />,

                        headerStyle: {
                            backgroundColor: 'skyblue',

                        },
                        headerTitleStyle: {
                            fontSize: 25
                        },
                        headerTintColor: 'purple'
                    }}


                />
                <stack.Screen name='Home' component={Home}

                    options={{
                        
                        title: "User Home",
                        headerStyle: {
                            backgroundColor: 'pink',

                        },
                        headerTitleStyle: {
                            fontSize: 25
                        },
                        headerTintColor: 'orange'
                    }}

                />

            </stack.Navigator>
        </NavigationContainer>
    )
};

const Header = () =>{
    return (
      <TextInput placeholder='name' />

    );
}

export default Navigation1

// const Home = () => {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text style={{ fontSize: 30 }}> Home Screen </Text>
//         </View>
//     )
// }
// const Login = (props) => {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text style={{ fontSize: 30 }}> Login Screen </Text>
//             <Button title='Go to home page ' onPress={() => props.navigation.navigate("Home")} ></Button>
//         </View>
//     )
// }

