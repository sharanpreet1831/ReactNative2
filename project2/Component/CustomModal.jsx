import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const CustomModal = () => {
    const [show, setShow] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
            {
                show ?
                    <View style={styles.modal}>
                        < View style={styles.body}>
                            <Text style={styles.content}> Some Text </Text>
                            <Button title='close' onPress={() => setShow(false)}> </Button>

                        </View>
                    </View> : null
            }

            <Button title='open dialog' onPress={() => setShow(true)}></Button>

        </SafeAreaView>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'

    },
    modal: {
        flex: 1,
        backgroundColor: "rgba(50,50,50,.5)",
        justifyContent: 'center',
        alignItems: 'center'

    },
    body: {

        height: 100,
        width: 200,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,
        borderRadius: 20

    },
    content: {

    }
})