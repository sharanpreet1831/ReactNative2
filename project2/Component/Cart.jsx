import { View, Text, SafeAreaView, Image, StyleSheet, Button, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'

const Cart = () => {
    const [count , setCount] = useState(2);
    const [loader , setLoader] = useState(false)
    const animationLoad = () =>{
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 3000);

        
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.Header} >
                <Text style={styles.HeaderText}> Cart </Text>
                
               
            </View>



            <ScrollView>
            {/* <ActivityIndicator size='large' color='grey' animating ={loader} /> */}
            <View style={{ flex: 6 }}>
                <View style={styles.Component1}>
                    <View style={styles.ImageView}>
                        <Image source={require('./Images/polotshirt.jpeg')} style={styles.ImageStyle} />
                    </View>
                    <View style={styles.TextView} >
                        <Text style={styles.text}> Polo Shirt For Men </Text>
                        <Text style={styles.Descripiton} >Tshirt </Text>
                        <Text style={styles.prices} > $30 </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Button title='+'  onPress={() => setCount (count +1 )}></Button>
                            <Text>{count}</Text>
                            <Button title='-' onPress={() => setCount(count-1)} ></Button>
                        </View>
                    </View>
                </View>
                <View style={styles.Component1}>
                    <View style={styles.ImageView}>
                        <Image source={require('./Images/shoes.jpeg')} style={styles.ImageStyle} />
                    </View>
                    <View style={styles.TextView} >
                        <Text style={styles.text}> Polo Shirt For Men </Text>
                        <Text style={styles.Descripiton} >Tshirt </Text>
                        <Text style={styles.prices} > $30 </Text>
                        <Text style={styles.Add}> + 1 - </Text>
                    </View>
                </View>
                <View style={styles.Component1}>
                    <View style={styles.ImageView}>
                        <Image source={require('./Images/headphones.jpeg')} style={styles.ImageStyle} />
                    </View>
                    <View style={styles.TextView} >
                        <Text style={styles.text}> Polo Shirt For Men </Text>
                        <Text style={styles.Descripiton} >Tshirt </Text>
                        <Text style={styles.prices} > $30 </Text>
                        <Text style={styles.Add}> + 1 - </Text>
                    </View>
                </View>

                <View style={styles.Component1}>
                    <View style={styles.ImageView}>
                        <Image source={require('./Images/polotshirt.jpeg')} style={styles.ImageStyle} />
                    </View>
                    <View style={styles.TextView} >
                        <Text style={styles.text}> Polo Shirt For Men </Text>
                        <Text style={styles.Descripiton} >Tshirt </Text>
                        <Text style={styles.prices} > $30 </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Button title='+'  onPress={() => setCount (count +1 )}></Button>
                            <Text>{count}</Text>
                            <Button title='-' onPress={() => setCount(count-1)} ></Button>
                        </View>
                    </View>
                </View>
                <View style={styles.Component1}>
                    <View style={styles.ImageView}>
                        <Image source={require('./Images/polotshirt.jpeg')} style={styles.ImageStyle} />
                    </View>
                    <View style={styles.TextView} >
                        <Text style={styles.text}> Polo Shirt For Men </Text>
                        <Text style={styles.Descripiton} >Tshirt </Text>
                        <Text style={styles.prices} > $30 </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Button title='+'  onPress={() => setCount (count +1 )}></Button>
                            <Text>{count}</Text>
                            <Button title='-' onPress={() => setCount(count-1)} ></Button>
                        </View>
                    </View>
                </View>
                <View style={styles.Component1}>
                    <View style={styles.ImageView}>
                        <Image source={require('./Images/polotshirt.jpeg')} style={styles.ImageStyle} />
                    </View>
                    <View style={styles.TextView} >
                        <Text style={styles.text}> Polo Shirt For Men </Text>
                        <Text style={styles.Descripiton} >Tshirt </Text>
                        <Text style={styles.prices} > $30 </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Button title='+'  onPress={() => setCount (count +1 )}></Button>
                            <Text>{count}</Text>
                            <Button title='-' onPress={() => setCount(count-1)} ></Button>
                        </View>
                    </View>
                </View>

            </View>
            </ScrollView>



            <View style={styles.Footer} >
                <View style={styles.FooterItem}>
                    <View style={styles.FooterText} >
                        <Text style={styles.FooterText}>Total</Text>
                    </View>
                    <View style={styles.FooterPrices}>
                        <Text style={styles.FooterPrices}>$320</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Order Now</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

    Header: {
        alignItems: 'center',
        backgroundColor: '',
        
       

    },
    HeaderText: {
        fontSize: 30 ,
        justifyContent : 'center'
    }
    , ImageStyle: {

    },
    Component1: {
        flexDirection: 'row',
        margin: 10,
        padding: 5,
        
        
        borderRadius: 20,
        borderWidth: 5,
        borderColor: '#ddd',
        backgroundColor: 'white',
        shadowColor: 'grey',
        shadowOffset: { height: 10 },
        shadowOpacity: 0.9,
        shadowRadius: 10,

    },
    Add: {
        marginTop: 10,
        fontSize: 20

    },
    ImageView: {
        flex: 1,
        // borderColor: 'Black',

    },
    ImageStyle: {
        width: 100,
        height: 65,

        // borderColor: 'red',
    },
    TextView: {
        flex: 2,

        // borderColor: 'blue',
    },
    text: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: '500'
    },
    prices: {
        fontSize: 18,
        fontWeight: '700',
        opacity: 1,
        marginTop: 5

    },
    Descripiton: {
        fontSize: '14',
        marginTop: 5
    },


    Footer: {
        justifyContent: 'flex-end',
        // borderColor: 'blue',
        // borderWidth: 5,
        flex: 1,
        margin: 15,

    },
    FooterItem: {
        // flex: 1,
        flexDirection: 'row',
        margin: 10,

    },
    FooterText: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },
    FooterPrices: {

        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',

    },
    container: {
        flex: 1,
        padding: 10
    },
    button: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default Cart