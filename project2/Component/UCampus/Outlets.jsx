import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Outlets = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <Card1 />
                    <Card1 />
                </View>
            </View>
        </View>
    )
}

const Card1 = () => {
    return (
        <View style={styles.cardStyle}>
            <View>
                <Text style={{ fontSize: 14, marginLeft: 15 }}>Gym</Text>
                <Text style={{ fontSize: 12, marginLeft: 10 }} > Get Membership</Text>
            </View>
            <View >
                <Image source={require('./Photos/gym2.png')}
                style ={{width : 80 , height : "100%" }}
                 />
            </View>
        </View>
    )
}

export default Outlets

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    cardStyle: {
        backgroundColor: 'white',
        height: 100,
        flex: 1,
        borderRadius: 20,

        margin: 10,
        shadowColor: 'grey',
        shadowOpacity: 0.9,
        shadowOffset: { height: 5 },
        paddingTop: 10,
        flexDirection : 'row',
        overflow :'hidden'
    }
})