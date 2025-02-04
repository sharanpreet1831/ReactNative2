import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const grid = () => {
    const user = [
        {
          id: 1,
          name: "sharan "
        },
        {
          id: 2,
          name: "preet "
        },
        {
          id: 3,
          name: "pannu"
        },
        {
          id: 4,
          name: "raman "
        }, {
          id: 5,
          name: "raman "
        },
        {
          id: 6,
          name: "ram "
        },
        {
          id: 7,
          name: "aman "
        },
        {
          id: 8,
          name: "daman "
        },
        {
          id: 9,
          name: "saman "
        }
    
      ]
    
    return (
        <View>
            <Text style={{ fontSize: 31 }}> Grid with Dynamic Data</Text>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>

                {
                    user.map((item) => <Text style={styles.item2}>{item.name}</Text>)
                }

            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    item2 :{
        fontSize : 25 ,
        backgroundColor : "blue",
        color : "#fff" ,
        margin : 5 , 
        padding : 5 ,
        width : 120 ,
        height : 120 ,
        textAlign : 'center',
        textAlignVertical: 'center',
        lineHeight : 120 , 
      }
})

export default grid