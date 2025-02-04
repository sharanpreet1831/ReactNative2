import { View, Text, SafeAreaView , ActivityIndicator, Button } from 'react-native'
import React, { useState } from 'react'

const Loader = () => {
    const [startReloader , setStartReloader] = useState(false);
     const display =() =>{
        setStartReloader(true)
        setTimeout(() => {
            setStartReloader(false)
        }, 3000);
    }
  return (
    <SafeAreaView>
      <Text style = {{ fontSize : 30 }}>Loader</Text>

      <ActivityIndicator  size = 'large' color = 'grey' animating = {startReloader} />
      <Button title='Click to reload' onPress={display}></Button>
    </SafeAreaView>
  )
}

export default Loader