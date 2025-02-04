/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {

  Text,
  StyleSheet,
  TextInput,
  View,
  Button,
  FlatList,
  ScrollView
} from 'react-native';
import Grid from './Component/grid'
import Sectionlist from './Component/Sectionlist'
import LoopWithFlatlist from './Component/LoopWithFlatlist'
import  Classcomponent1 from './Component/Classcomponent1'
import EffectHook from './Component/EffectHook'
import EffectHook2 from './Component/EffectHook2'
import HideCom from './Component/HideCom'
import UnMount from './Component/UnMount'
import Flex1 from './Component/Flex1'
import CustomButton from './Component/CustomButton'
import Login from './Component/ConversionApp/Login'
import RadioButton from './Component/RadioButton'
import DynamicRadioButton from './Component/DynamicRadioButton'
import Loader from './Component/Loader'
import Modal1 from './Component/Modal' 
import Cart from './Component/Cart'
import Pressable1 from './Component/Pressable'
import StatusBar1 from './Component/StatusBar1'
import CheckPlatform from './Component/CheckPlatform'
import WebView1 from './Component/WebView1'
import CustomModal from './Component/CustomModal'
import Navigation1  from './Component/Navigation1'
import Pratice from './Component/Pratice'
import TabNavigation1 from './Component/TabNavigation1'
import TopTabNavigation1 from './Component/TopTabNavigation1'
import MyNavigation from './Component/ConversionApp/MyNavigation'
import PlayImage from './Component/PlayImage'
import Api1 from './Component/Api1'
import Api2 from './Component/Api2'
import ApiUsingFlatlist from './Component/ApiUsingFlatlist'
import ConversionPage from './Component/ConversionApp/ConversionPage'
import MyApi from './Component/MyApi'
import ApiPost from './Component/ApiPost'
import  ApiForm from './Component/ApiForm'
import ApiMyFlatList from './Component/ApiMyFlatList'

import Home from './Component/UCampus/Home'


function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("")
  const [display, setDisplay] = useState(false)
  const [displaypass, setDisplaypass] = useState(true)

  const user = [
    {
      id: 1,
      name: "sharan "
    },
    {
      id: 2,
      name: "preet "
    },
    {
      id: 3,
      name: "pannu"
    },
    {
      id: 4,
      name: "raman "
    }, {
      id: 5,
      name: "raman "
    },
    {
      id: 6,
      name: "ram "
    },
    {
      id: 7,
      name: "aman "
    },
    {
      id: 8,
      name: "daman "
    },
    {
      id: 9,
      name: "saman "
    }

  ]

  return (
  <  >
   
      {/* <Text style={{ fontSize: 40 }}>Handle Text Input  </Text>
      <Text style={{ fontSize: 40 }}>Your name is : {name} </Text>
      <Button title='hello '></Button>
      <TextInput 
      style = {styles.textinput}
       placeholder='Enter your name  '
       value= {name}
       onChangeText={(text) => setName(text)}
       />
      <Button title='clean input ' onPress={() => { setName("") }}></Button>


      <Text style={{ textAlign: 'center', fontSize: 50 }}>Form </Text>
      <Text>Name : </Text>
      <TextInput
        placeholder='Enter your name '
        onChangeText={(text) => setName(text)}
        style={styles.textinput}
        value={name} />
      <Text>Password  : </Text>
      <TextInput
        placeholder='Enter your password '
        onChangeText={(text) => setPassword(text)}
        style={styles.textinput}
        secureTextEntry={displaypass}
        value={password}  
       
        />
      <Text>Mail : </Text>
      <TextInput
        placeholder='Enter your mail '
        onChangeText={(text) => setMail(text)}
        style={styles.textinput}
        value={mail} />
      <Button title='Display password ' onPress={() => {
        setDisplaypass(false)
      }}></Button>
      <Button title='display all deatil ' onPress={() => { setDisplay(true) }} ></Button>
      

      <Button title='clear ' onPress={() => {
        setName(""), setMail(""), setPassword(""), setDisplay(false)
      }}></Button>

      <View>
        {
          display ?
            <View>
              <Text style={{ fontSize: 30 }}>User name : {name}</Text>
              <Text style={{ fontSize: 30 }}>User password  : {password}</Text>
              <Text style={{ fontSize: 30 }}>User mail  : {mail}</Text>
            </View> : null
        }
      </View> */}



      {/* <View> 
        <Text style = {{justifyContent:'center', fontSize:30 }}>List with map function </Text>
        <ScrollView style ={{marginBottom:50}}>
        {
          user.map((item)=> <Text  style ={styles.item}> {item.name}</Text>)
        }
        </ScrollView>
      </View>

      <Text style = {{fontSize:30, alignItems:'center'}}>List with Flat list component </Text>
      <FlatList 
      data = {user} 
      renderItem={({item}) => <Text style ={styles.item}>{item.name}</Text>}
      /> */}


     <Home />
      </>
  );
}

const styles = StyleSheet.create({
  textinput: {
    fontSize: 18, color: 'green',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10
  },
  item: {
    fontSize: 20,
    padding: 5,
    color: "#fff",
    backgroundColor: "blue",
    borderColor: "black ",
    borderWidth: 1,
    margin: 10

  },
  item2 :{
    fontSize : 25 ,
    backgroundColor : "blue",
    color : "#fff" ,
    margin : 5 , 
    padding : 5 ,
    width : 120 ,
    height : 120 ,
    textAlign : 'center',
    textAlignVertical: 'center',
    lineHeight : 120 , 
  }

})


export default App;
