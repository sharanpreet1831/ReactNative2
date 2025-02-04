import { View, Text , Button, SafeAreaView} from 'react-native'
import React, { useState } from 'react'

const HideCom = () => {
    const [show ,setShow] = useState(true);
  return (
    <SafeAreaView style={{

    }}>
      <Text style = {{fontSize: 30 }}>Show / Hide Component </Text>
      
      <Button  title='Hide Component '  onPress={() => setShow(false)}> </Button>
      
      <Button title='show component ' onPress={ () => setShow(true)} ></Button>
      {
        show  ? <User /> : null
      }
      
    </SafeAreaView>
  )
}
const User = () => {
    return(
        <View> 
            <Text style = {{fontSize:25 , color:"green"}}> User component </Text>
        </View>
    )
}

export default HideCom