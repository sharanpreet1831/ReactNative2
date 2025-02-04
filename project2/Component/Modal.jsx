import { View, Text, SafeAreaView, Button, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Modal1 = () => {
    const [showModal, setShowModal] = useState (false );
    return (
        <SafeAreaView style={style.main}>
            <Text>Modal</Text>
            <Modal  
            transparent = {true}
            visible = {showModal}
            animationType='fade'
            >
                <View style = {style.centeredView}>
                    <View style = {style.ModalView}>
                        <Text style = {style.moadltext}> Hello code step by step </Text>
                        <Button title='Close Modal'  onPress={() => setShowModal(false)}></Button>
                    </View>
                </View>
            </Modal>
            <View style={style.button}>
                <Button title='Open Modal '  onPress={() => setShowModal(true)} > </Button>
            </View>
        </SafeAreaView >
    )
}
const style = StyleSheet.create({
    main: {
        flex: 1
    },
    button: {
        flex: 1,
        justifyContent: 'flex-end'

    },
    centeredView :{
        flex : 1 ,
        justifyContent : 'center',
        alignItems:'center',
       
    },
    ModalView:{
        backgroundColor : 'lightgrey',
        padding : 40 ,
        borderRadius : 20 ,
        shadowColor : 'black',
        elevation : 5,

    },
    moadltext :{
        fontSize : 30,
        marginBottom : 20  
    }
})
export default Modal1