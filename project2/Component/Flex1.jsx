import { View, Text, SafeAreaView , StyleSheet} from 'react-native';
import React from 'react';

const Flex1 = () => {
  return (
    
    <SafeAreaView style={{ flex: 1}}>
      <View style = {{backgroundColor :'red' , flex : 2.5 , flexDirection :'row',  }}>
        {/* <View style = {{backgroundColor : 'lightblue' , flex : 1 , margin :5 }} ></View>
        <View style = {{backgroundColor : 'lightgrey' , flex : 1, margin :5  }} ></View>
        <View style = {{backgroundColor : 'lightpink' , flex : 1 , margin :5 }} ></View> */}
      </View>

      <View style={styles.item}></View>
      <View style={{backgroundColor: 'yellow', flex: 1}}></View>
      
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  item : {
    flex:.5,
    backgroundColor: 'blue',
  }
})

export default Flex1;