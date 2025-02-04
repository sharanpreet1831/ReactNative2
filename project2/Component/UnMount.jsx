import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const UnMount = () => {
    const [show ,setShow] = useState(true) 
    return (
        <View>
            <Text style={{ fontSize: 30 }} >USeEffect for Unmount Component</Text>
            <Button title='Toggle' onPress={ () => setShow(!show)} ></Button>
            {
                show ? <Student /> : null 
            }
        </View>
    )
}

const Student = () => {
    let Timer = setInterval ( () => {console.log ("Timmer called ")},2000)

    useEffect ( () => {
        // console.warn("useEffect called ") //use only when we want show useeffect on mounting phase
        
        

        // for unmounting phase :
        return () => clearInterval(Timer)
    })
    return (
        <View>
            <Text style={{ fontSize: 20 , color : "purple" }} >Unmount Component</Text>
            
        </View>
    )
}

export default UnMount