import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const ConversionPage = () => {
    return (
        <SafeAreaView>
            <View style={styles.container} >
                <ImageBackground
                    source={require('../Images/scale3.jpg')}
                    style={{ width: '100%', height: '100%', }}
                    imageStyle={{ opacity: 1 }}
                >

                    <View style={styles.overlay} >
                         <TextInput placeholder='name' style={{backgroundColor : 'red'}} ></TextInput>
                    </View>
                </ImageBackground>

            </View>
        </SafeAreaView >
    )
}

export default ConversionPage

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    overlay: {

        padding: 20,
        borderRadius: 20,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    }
})