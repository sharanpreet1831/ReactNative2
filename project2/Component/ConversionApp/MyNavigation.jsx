import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyHome from './MyHome'


const Stack = createNativeStackNavigator();


const MyNavigation = () => {
   
    return (
        <NavigationContainer>
            <Stack.Navigator

                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerTitleStyle: {
                        fontSize: 24
                    },
                    headerTintColor: 'black'
                }}

            >
                <Stack.Screen name='Login' component={Login} />
                 <Stack.Screen name='Home' component={MyHome} />
                
               
                
                
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const Login = (props) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState(0);

    return (

        
        <View style={styles.Loginmain}>

            <TextInput
                placeholder="Enter name"
                placeholderTextColor="#aaa"
                style={styles.textInput}
                onChangeText={(text) => setName(text)}

            />
            <TextInput placeholder='Enter password' style={styles.textInput}
                onChangeText={(text) => setPassword(text)}
            />
            <View  style  = {styles.buttonContainer}>
            <Button   title='Go to home' onPress={() => props.navigation.navigate("Home", { name, password }) } ></Button>
            </View>
           
        </View>
    )
}



export default MyNavigation


const styles = StyleSheet.create({

    main:{
        backgroundColor: '#0A192F',
        flex : 1,
        
       

    },

    Loginmain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A192F',
        shadowColor: '#64FFDA', // Neon teal shadow
        shadowOpacity: 0.8,
        shadowRadius: 10,

    },
    textInput: {
        width: '80%',
        height: 50,


        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#fff',

        shadowOpacity: 0.9,
        shadowRadius: 5,
        margin: 10

    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
        
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    
})