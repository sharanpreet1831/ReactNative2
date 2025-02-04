import { StyleSheet, Text, View, Button, ScrollView, Touchable, TouchableOpacity, Image, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();


const MyHome = (props) => {
  // const { name, password } = props.route.params
  return (
    <ScrollView>

      <Card text = "Length" image = {require('../Images/scale.png')} />
      <Card  text = "Weight"  image = {require('../Images/weight2.jpg')}  />
      <Card text = "Temperature"  image = {require('../Images/temp.jpg')}/>
      <Card text = "Volume"  image = {require('../Images/volume.jpg')}/>
      <Card text = "Area" image = {require('../Images/area.jpg')} />
      

    </ScrollView>
  )
}

const Card = ({text ,image}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <ImageBackground
        source = {image}
        style={styles.backgroundImage}
        imageStyle={{ borderRadius: 20, }}
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>{text}</Text>
          <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', width: '100%', height: '100%', paddingBottom: 10, marginLeft: 10  ,  }}>
            <Button title='Move to '></Button>
          </View>
        </View>
      </ImageBackground>
      </TouchableOpacity>
    </View>
  )

}

export default MyHome

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white'


  },
  backgroundImage: {
    width: 300,
    height: 200,


  },
  overlay: {

    padding: 20,
    borderRadius: 20,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    
    
    

  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }

})