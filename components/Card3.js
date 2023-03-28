import React from 'react'
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
const Card3 = () => {
    const data = [
        {
            id:1,
            title: "Mastercard Series 1st ODI: India vs Australia, Mumbai",
            image:
              "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1588942599%2Fjvekb96nwypnsn2yyiiy.jpg"
          },
          {
            id:2,
            title: "Arijit Singh - One Night Only Tour, Bangalore 2023",
            
            image:
              "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1678780283%2Fmivedfrpuksf5nmojnj9.png"},
          {
            id:3,
            title: "Under 25 Summit  One Night Only Tour 2023",
            
            image:
              "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_400/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1662137209%2Fiotnxrqify1lutuosxc6.jpg"
          },
          {
            id:4,
            title: "Arijit Singh - One Night Only Tour, Bangalore 2023",
            
            image:
              "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_420/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1679385331%2Fykdieggw0irgxryekylr.jpg"
            },
          {
            id:5,
            title: "Under 25 Summit  One Night Only Tour 2023",
            
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
      height: 200,

      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: '#fff',
    },
    cardImage: {
      width: '100%',
      height: 200,
    },
    cardText: {
      padding: 10,
    },
    cardTitle: {
      marginLeft:10,
      position:'absolute',
      bottom:-1,
      fontSize: 13,
      padding:10,
      fontWeight: 'bold',
      marginBottom: 5,
      color:'white',
      position:'absolute',
    },
    cardDescription: {
      fontSize: 14,
      color: '#444',
    },
  });
  
  export default Card3;

  