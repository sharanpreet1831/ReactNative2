import { View, Text, Button, TextInput } from 'react-native'
import React, { Component } from 'react'
import Component2 from './Component2'

class Classcomponent1 extends Component {
    fruit = () => {
        console.warn("Apple")
    }

    constructor() {
        super();
        this.state = {
            name: "sharan",
            age: 20,
        }
    }
    updatename(val) {
        this.setState({ name:val})
    }
    render() {

        return (
            <View>
                <Text style={{ fontSize: 30, color: "red" }}>Class Component 1 Raect Native</Text>
                
                <Button title='press me '
                    onPress={this.fruit}>
                </Button>
                <Text style={{ fontSize: 30, color: "purple" }}> {this.state.name}   </Text>
                <TextInput
                    placeholder='Enter your name '
                    onChange={(text) => this.updatename(text)}
                />


            </View>
        )
    }
}

export default Classcomponent1