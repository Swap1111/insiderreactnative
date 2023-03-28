import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';
const Card1 = () => {
    const data = [
        {
            id:1,
            title: "Mastercard Series 1st ODI: India vs Australia, Mumbai",
            disp1: "March 17 | 1:30 PM ",
            disp2: "Wankhede Stadium, Mumbai",
            price: "800 onwards",
            
            image:
              "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_280/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1677327606%2Frupttslqzluyunfzsr9j.png"
          },
          {
            id:2,
            title: "Arijit Singh - One Night Only Tour, Bangalore 2023",
            disp1: "March 4 | Gates Open: 5PM ",
            disp2: "Show Begin:6 NICE Ground, Bengarulu",
            price: "4500 Onwards",
            
            image:
              "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_220/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1679563927%2Fa1mxk3qdu9h3jbcpgq9s.png"
            },
          {
            id:3,
            title: "Under 25 Summit  One Night Only Tour 2023",
            disp1: "March4 & 5 | 9AM - 10 PM ",
            disp2: "Embassy International Riding School",
            price: "2655 Onwards",
            
            image:
              "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_220/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1679644956%2Fhxe4nizoj1zatipalumx.jpg"
          },
          {
            id:4,
            title: "Arijit Singh - One Night Only Tour, Bangalore 2023",
            disp1: "March 4 | Gates Open: 5PM ",
            disp2: "Show Begin:6 NICE Ground, Bengarulu",
            price: "4500 Onwards",
            
            image:
              "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_420/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1679385331%2Fykdieggw0irgxryekylr.jpg"
            },
          {
            id:5,
            title: "Under 25 Summit  One Night Only Tour 2023",
            disp1: "March4 & 5 | 9AM - 10 PM ",
            disp2: "Embassy International Riding School",
            price: "2655 Onwards",
            
            image:
              "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_420/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1679667070%2Fzp3eica5652ruh4d404p.png"
          },
      ];
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {data.map((item) => (
        <View key={item.id} style={styles.card}>
          <ImageBackground source={{ uri: item.image }} style={styles.cardImage} >
            
          <Text style={styles.cardTitle}>{item.title}</Text>
          </ImageBackground>
          
          
          <View style={styles.cardText}>
          
            <Text style={styles.cardDescription}>{item.disp1}</Text>
            <Text style={styles.cardDescription}>{item.disp2}</Text>
            <Text style={{fontWeight: 'bold'}}>{item.price}</Text>
          </View>
        </View>
      ))}
    </ScrollView>

  )
}
const styles = StyleSheet.create({
    card: {
      borderWidth:1,
      borderColor:"#e3e5e7",
      marginLeft: 20,
      marginTop:0,
      marginBottom:0,
      width: 230,
      height: 350,
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: '#fff',
    },
    cardImage: {
      width: '100%',
      height: 250,
    },
    cardText: {
      padding: 10,
    },
    cardTitle: {
      marginLeft:10,
      position:'absolute',
      bottom:-1,
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 5,
      color:'white',
      position:'absolute',
    },
    cardDescription: {
      fontSize: 13,
      color: '#444',
    },
  });
  
  export default Card1;

  