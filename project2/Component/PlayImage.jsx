import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Button } from 'react-native'
import React from 'react'

const PlayImage = () => {

    return (
        <View style={styles.container}>


            {/* Image with Text Overlay */}
            <View style={styles.imageWrapper} >
                <ImageBackground
                    source={require('./Images/scale.png')} // Replace with your image URL or local image
                    style={styles.imageBackground}
                >
                    <Text style={styles.textOverlay}>Hello, React Native!</Text>
                    <Button title='Move to ' ></Button>
                </ImageBackground>
            </View>

            <View style={{ paddingHorizontal: 40, paddingVertical: 20 }}>
                <View style={{ width: '100%', height: 'auto', borderRadius: 10, backgroundColor: '#dadada', paddingHorizontal: 20, paddingVertical: 5 }}>
                    <Text style={{ fontSize: 25 }}>Shoes</Text>
                    <View style={{ height: 150, width: '100%', }}>
                        <ImageBackground style={{ width: '100%', height: '100%' }} source={require("./Images/scale.png")} > </ImageBackground>
                    </View>
                    <TouchableOpacity style={{ marginTop: 5, padding: 3, alignItems: 'flex-end' }}>
                        <Text style={{ width: 70, textAlign: 'center', paddingVertical: 5, backgroundColor: 'blue', color: '#fff' }}>Move to</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.main}>
                <View style={styles.Box1Conatiner}>
                    <Text style={styles.Box1}></Text>
                    <View style={styles.ButtonConatiner}>
                        <TouchableOpacity>
                            <Text style={[styles.button, styles.Move]}>Move to </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Image as a Button */}
            <TouchableOpacity onPress={() => alert("Button Clicked!")}>
                <Image
                    source={require('./Images/Scale2.png')} // Replace with your button image URL or local image
                    style={styles.buttonImage}
                />
            </TouchableOpacity>
        </View>
    )
}

export default PlayImage

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imageBackground: {
        width: 300,
        height: 200,

        marginBottom: 20,
    },
    textOverlay: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
        padding: 10,
    },
    buttonImage: {
        width: 100,
        height: 100,
    },
    imageWrapper: {
        borderRadius: 100,
        backgroundColor: 'red'
    }
})