import React from 'react'
import { View,Image,Text } from 'react-native';
export default function Icon() {
    const icon = [
  {
    id:1,
    imageurl: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634728929%2Flydoux72oktn1z3cnje6.png",
    title: "Work",
    desc: "99 events",
  },
  {
    id:2,
    imageurl: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634727837%2Fgzh9ycfs8lmk2rzng7ep.png",
    title: "Comedy",
    desc: "59 events",
  },
  {
    id:3,
    imageurl: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634729595%2Fwqznop375nmlmttljqfy.png",
    title: "Courses",
    desc: "48 events",
  },
  {
    id:4,
    imageurl: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634728411%2Fm2atnkiwoz0fidmsbso0.png",
    title: "Music",
    desc: "42 events",
  },
  {
    id:5,
    imageurl: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634728594%2Ffmp33llb6xv1fwgf6uws.png",
    title: "Arts",
    desc: "38 events",
  },
  {
    id:6,
    imageurl: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634730202%2Fh1xu8qybujyyyo0e7pb8.png",
    title: "Theatre",
    desc: "30 events",
  },
  {
    id:7,
    imageurl: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634729369%2Fowpjhi6cboyqkajbtsdy.png",
    title: "Health",
    desc: "25 events",
  },
  {
    id:8,
    imageurl: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634729280%2Fzf917vk36z0ni6k3lquj.png",
    title: "Camping",
    desc: "22 events",
  },
];
  return (
    <View style={{flexDirection:'row',flexWrap:'wrap',flex:1,marginLeft:5,marginBottom:30}}>
        {
        icon.map((item)=>(
            <View key={item.id} style={{marginLeft:25,}}>
                <View style={{borderRadius:10,borderColor:'#e3e5e7',borderWidth:1,padding:10}}>
            <Image
             source={{uri:item.imageurl}}
             style={{width:40,height:40,borderRadius:10,borderColor:'black'}}></Image> 
            </View>
            <View style={{alignItems:'center'}}>
            <Text style={{fontSize:12,fontWeight:'bold',padding:5}}>{item.title}</Text>
            <Text style={{marginBottom:10,fontSize:12,color: "#444"}}>{item.desc}</Text>
            </View>
            </View>        
        ))
    }
    </View>
  )
}
