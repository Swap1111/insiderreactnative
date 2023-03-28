import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View ,Image} from 'react-native';

export default function Navbar() {


  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/insiderlogo.png")} 
      style={{width:150,height:40,marginTop:0,marginLeft:20}} />
      <Image source={require("../assets/bell.png")} 
      style={{width:30,height:30,marginTop:10,marginRight:20}} />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection:'row',
      marginBottom:10,
      justifyContent:'space-between',
    },
  });

