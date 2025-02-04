import { View, Text, SafeAreaView, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const RadioButton = () => {
    const [show, setShow] = useState(1)

    return (
        <SafeAreaView style={styles.main}>
            <Text style = {{ fontSize : 30 }}>RadioButton</Text>
            <TouchableOpacity onPress={() => setShow(1)}>
                <View style={styles.radioWrapper}>
                    <View style={styles.radio}>
                        {
                            show ===1 ? <View style={styles.radioBg}> </View> : null
                        }
                    </View>
                    <Text style={styles.radiostyle}>Radio 1</Text>
                </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShow(2)}>
                <View style={styles.radioWrapper}>
                    <View style={styles.radio}>
                        {
                            show ===2 ? <View style={styles.radioBg}> </View> : null
                        }
                    </View>
                    <Text style={styles.radiostyle}>Radio 2</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    radiostyle: {
        fontSize: 20
    },
    radio: {
        height: 40,
        width: 40,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        margin: 10,

    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    radioBg: {
        backgroundColor: 'black',
        height: 28,
        width: 28,
        borderRadius: 20,
        margin: 4,



    }
})

export default RadioButton