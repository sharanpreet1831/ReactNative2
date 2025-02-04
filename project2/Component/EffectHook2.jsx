import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const EffectHook2 = () => {

    const [count , setCount] = useState(0)
    const [age , setAge ] = useState(20);
    useEffect( () => {
        console.warn("do some animation ");
       
    },[count])

    useEffect( () =>{
        console.log("do some api call ")
    },[age ])
  return (
    
    <View>
      <Text style = {{fontSize : 30 , color:"green"}}> {count} UseEffect as componentDidUpdate {age} </Text>
      <Button title='update counter ' onPress={() => setCount(count + 1)  } ></Button>
      <Button title='update age ' onPress={() => setAge(age + 1)  } ></Button>
      <User  info = {{age , count}}/>
    </View>
   
  )
}

const User = (props) =>{
    
    useEffect( () => {
        console.warn("run this code when age prop is updated")
    } , [props.info.age])
    return (
        <View>
          <Text style = {{fontSize : 30 , color:"purple"}}> age : {props.info.age}  </Text>
          
        </View>
      )
}

export default EffectHook2