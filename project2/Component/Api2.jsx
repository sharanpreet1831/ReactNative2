import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const Api2 = () => {

    const [data, setData] = useState([]);
    const GetApi = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        let result = await fetch(url);
        let result1 = await result.json();
        setData(result1);

    }

    useEffect(() => {
        GetApi()
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>


                <Text> hello </Text>
                {
                    data.length ?  data.map((item) => <View >
                         <Text> id : {item.id} </Text> 
                         <Text> title : {item.title} </Text>
                         </View>) : null
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Api2