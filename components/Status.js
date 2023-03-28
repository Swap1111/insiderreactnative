import React from 'react'
import { View,Image,Text } from 'react-native';
export default function Status() {
    const status = [
  {
   title: "Today",
    desc: "Sun,26 Mar",
  },
  {
   title: "Tomorrow",
    desc: "Mon,27 Mar",
  },
  {
    title: "Weekend",
    desc: "25-26 Mar",
  },
];
  return (
    <View style={{flexDirection:'row',flexWrap:'wrap',flex:1,marginLeft:5,marginBottom:30}}>
        {
        status.map((item)=>(
            <View key={item.id} style={{marginLeft:25}}>
            <View style={{borderWidth:1,marginRight:1,alignItems:'center',width:90,height:50,borderRadius:10,borderColor:"#e3e5e7"}}>
            <Text style={{fontSize:12,fontWeight:'bold',color:'red',padding:5}}>{item.title}</Text>
            <Text style={{marginBottom:10,fontSize:12,color: "#444"}}>{item.desc}</Text>
            </View>
            </View>        
        ))
    }
    </View>
  )
}
