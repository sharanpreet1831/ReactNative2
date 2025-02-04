import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'

const Api1 = () => {
    const [data,setData] =useState(undefined)

    const GetApicall = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts/1";
        let  result =  await fetch(url);
        let result1 = await result.json();
        setData(result1);
       
    }

    useEffect(() => {
        GetApicall()
    }, [])
    


  return (
    
    <SafeAreaView>
        <Text> hello world   </Text>
        {
            data ? <View> <Text >  {data.title} </Text> </View> : null
        }
        
    </SafeAreaView>
  )
}

export default Api1