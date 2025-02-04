import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const ApiUsingFlatlist = () => {

    const [data, setData] = useState([]);

    const GetApi =   async () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        
        let result = await fetch(url);
      
        
        result = await result.json();
        console.warn("hiii " + result)
        setData(result);
    }

    useEffect(() => {
        GetApi()
    }, [])
    return (
        <SafeAreaView>
            <Text>ApiUsingFlatlist</Text>
            {
                data.length ? <FlatList
                    data={data}
                    renderItem={({ item }) => <View style ={{borderBottomColor : 'orange' ,borderWidth : 2 , padding : 20   }}>
                        <Text> ID : {item.id} </Text>
                        <Text> Title : {item.title} </Text>

                    </View>} />
                    : null
            }
            <Text style = {{fontSize : 24 }}> sharan </Text>

        </SafeAreaView>
    )
}

export default ApiUsingFlatlist