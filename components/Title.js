import React from 'react'
import { Text ,View} from 'react-native'

export default function Title(props) {
  return (
    <View style={{marginTop:15}}>
    <Text style={{fontSize:20,fontWeight:'bold',marginLeft:20}}>{props.title}</Text>
    <Text style={{fontSize: 13,color: '#444',marginLeft:20}}>{props.desc1}</Text>
    <Text style={{fontSize: 13,color: '#444',marginLeft:20}}>{props.desc2}</Text>
     </View>
  )
}
