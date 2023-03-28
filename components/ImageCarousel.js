import React from 'react'
import { Image,View ,Dimensions,ScrollView} from 'react-native'

export default function ImageCarousel() {
  const {width}=Dimensions.get("window");
  const height =width *0.45;
  
  const images =[
    'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1679561309%2Fyfqlxwgx8zpvtuwhwycd.png',
    'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1679571438%2Fg3cwuw5pztx3wtq54k6g.jpg',
    'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1679644208%2Ftctepmjq2glfblscj8uk.jpg',
    'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1679406411%2Fsd1stgvwudjrvputvmx9.png',
    'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1678365435%2Fed7gmzbh4mrnzq57tdif.jpg',
    
  ]

  return (
    <View>
    <ScrollView horizontal ={true}
    autoplay
    showsHorizontalScrollIndicator={false}
    pagingEnabled style={{width,height}}>
    {
      images.map((image,index)=>(
        <Image
        key={index}
      source={{uri:image}}
      style={{width,height,resizeMode:'contain'}}></Image>

      ))
    }
    </ScrollView>
    </View>
  )
}
