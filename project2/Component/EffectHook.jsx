import { View, Text  , Button} from 'react-native'
import React, { useEffect, useState } from 'react'

const  EffectHook = () => {
    const [count , setCount] = useState(0)
    useEffect(() => {
        console.warn("hello");
    },[])
  return (
    <View>
      <Text style = {{fontSize : 30 , color:'green'}}> Life Cycle with use effect {count}</Text>
      <Button  title='UpdateColor'  onPress={() => setCount(count+1 )}></Button>
    </View>
  )
}

export default  EffectHook