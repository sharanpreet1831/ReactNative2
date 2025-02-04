import { View, Text, FlatList , SectionList } from 'react-native'
import React from 'react'

const Sectionlist = () => {

    const user = [ {
        id : 1 ,
        name : "sharan",
        data : ["1","C++", "java" , "python" , "PHP" ]
    },
    {
        id : 2 ,
        name : "preet ",
        data : ["2","C++", "java" , "python" , "PHP"]
    },
    {
        id : 3 ,
        name : "pannu",
        data : ["3","C++", "java" , "python" , "PHP"]
    },
    {
        id : 4 ,
        name : "raman ",
        data : [ "4", "C++", "java" , "python" , "PHP"]
    },
    {
        id : 5 ,
        name : "daman",
        data : [ "5", "C++", "java" , "python" , "PHP"]
    }
    ];
    return (
        <View>
            <Text>SectionList</Text>
            <SectionList 
            sections = {user}
            
            renderItem = { ({item}) => <Text style = {{fontSize : 20 , marginLeft : 20  } }>{item}</Text>}
            renderSectionHeader={({section : {name}}) => (<Text style = {{fontSize : 25 , color: 'red'}}>{name}</Text>)}
            />
        </View>
    )
} 

export default Sectionlist