import React from 'react'
import { View,Image} from 'react-native'

export default function ColorCard() {
    const colors=[
        
            
        'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_320/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1671187157%2Fz8nydm5tr0wtrtvwzyrq.png',
        'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_320/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1623313209%2Fwjapklp7hrnalamjkvad.png',
        'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_320/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1625122458%2Fzi16tkrn0qqs84d92hah.png',
        'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_320/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1671187953%2Fputphvcf3eqajqcrchn8.png',
        'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_320/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1671484417%2Ffm0y9xe0ozzxylrip9ew.png',
        'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_320/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1671110194%2Fmy9sn0elwrdiga0bdaft.png',
        
    ]
  return (
    <View style={{flexDirection:'row',flexWrap:'wrap',flex:1,marginLeft:10}}>
        {
        colors.map((image,index)=>(
            <Image 
             key={index} 
             source={{uri:image}}
             style={{width:100,height:60,marginLeft:18,marginBottom:15,borderRadius:10}}></Image> 
        ))
    }
    </View>
  )
}
