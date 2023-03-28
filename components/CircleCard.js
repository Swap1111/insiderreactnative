import React from 'react'
import { View,Image,Text } from 'react-native';
import { ScrollView } from 'react-native';
export default function CircleCard() {
    const icon = [
  {
    id:1,
    imageurl: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_200/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1674139055%2Fcmdmy3gvs0vwm7bspew7.jpg",
    title: "Ashish Bagrecha",
    desc: "1 event",
  },
  {
    id:2,
    imageurl: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_200/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1639638337%2Fzh9ij0xtw1itzqg83bqc.png",
    title: "Peter Cat",
    desc: "1 event",
  },
  {
    id:3,
    imageurl: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_200/https%3A%2F%2Feventimages.insider.in%2Fimage%2Fmain%2FAUwGCiDTVGqH2Yq7kkfu_Kunal_Rao.jpg",
    title: "Anish Baheti",

  },
  {
    id:4,
    imageurl: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_200/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1645107988%2Ffg7273yiajnzcrurz0u3.jpg",
    title: "Pradeep Kumar",
  },
  {
    id:5,
    imageurl: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_200/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1678538328%2Fv9yw0rykb7byc6u4mvwq.jpg",
    title: "Kunal Rao",
  },
];
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View style={{flexDirection:'row',flex:1,marginLeft:15,marginBottom:30}}>
        {
        icon.map((item)=>(
            <View key={item.id} style={{marginLeft:10,marginRight:0,marginTop:0}}>
                
            <Image
             source={{uri:item.imageurl}}
             style={{width:80,height:80,borderRadius:50,borderColor:'black'}}></Image> 
            
            <View style={{alignItems:'center',marginTop:10}}>
            <Text style={{fontSize:12,fontWeight:'bold'}}>{item.title}</Text>
            <Text style={{marginBottom:10,fontSize:12,color: "#444"}}>{item.desc}</Text>
            </View>
            </View>  
                  
        ))
    }
    </View>
    </ScrollView>
  );
}

