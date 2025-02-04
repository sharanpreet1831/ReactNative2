import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const LoopWithFlatlist = () => {
    const user = [
        {
            id: 1,
            name: "sharan ",
            mail: "abc@gmail.com"
        },
        {
            id: 2,
            name: "preet ",
            mail: "abc@gmail.com"
        },
        {
            id: 3,
            name: "pannu",
            mail: "abc@gmail.com"
        },
        {
            id: 4,
            name: "raman ",
            mail: "abc@gmail.com"
        }, {
            id: 5,
            name: "raman ",
            mail: "abc@gmail.com"
        },
        {
            id: 6,
            name: "ram ",
            mail: "abc@gmail.com"
        },
        {
            id: 7,
            name: "aman ",
            mail: "abc@gmail.com"
        },
        {
            id: 8,
            name: "daman ",
            mail: "abc@gmail.com"
        },
        {
            id: 9,
            name: "saman ",
            mail: "abc@gmail.com"
        }

    ]

    return (
        <View  >
            <Text style={{ fontSize: 30 }}>LoopWithFlatlist</Text>
            <FlatList
                data={user}
                renderItem={({ item }) => <UserData item = {item}/>}
            />
        </View>
    )
}
const UserData = (props) => {
    const item = props.item;
    return (
        <View style={styles.Box}>
            
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.mail}</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    item: {
        fontSize: 25,
        color: 'orange',
        flex: 1,
        margin: 2,
        textAlign: 'center'

    },
    Box: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'blue',
        marginBottom: 10,



    }
})

export default LoopWithFlatlist