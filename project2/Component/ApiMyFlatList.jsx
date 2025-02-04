import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const ApiMyFlatList = () => {
    const [data, setData] = useState([])
    const getApi = async () => {
        const url = 'http://localhost:3000/user/'
        let result = await fetch(url)
        result = await result.json();
        console.warn(result)
        setData(result)

    }

    useEffect(() => {
        getApi()
    }, [])
    return (
        <SafeAreaView style={styles.main}>
            <Text>ApiMyFlatList</Text>
            {
                data.length ?
                    <FlatList
                        data={data}
                        renderItem={({ item }) =>
                            <View style={styles.list}>
                               <View>  <Text> Name : {item.name} </Text></View>
                               <View> <Text> Age :  {item.age} </Text> </View>
                               <View><Button title='Delete' /></View>
                               <View> <Button title='Update' /></View>

                            </View>
                        }
                    /> : null


            }
        </SafeAreaView>
    )
}

export default ApiMyFlatList

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    list: {
        height: 100,
        borderWidth: 2,
        padding: 10,
        margin: 10,
        flexDirection :'row'
      
    }
})

