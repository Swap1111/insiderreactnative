import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card1 = () => {
  const data = [
    {
        id:1,
        title: "Mastercard Series 1st ODI: India vs Australia, Mumbai",
        disp1: "March 17 | 1:30 PM ",
        disp2: "Wankhede Stadium, Mumbai",
        price: "800 onwards",
        subpart: "Step out and enjoy this event",
        image:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1678814867%2Fxlibkv7tl3wqlvhkoiih.png"
          
      },
      {
        id:2,
        title: "Arijit Singh - One Night Only Tour, Bangalore 2023",
        disp1: "March 4 | Gates Open: 5PM ",
        disp2: "Show Begin:6 NICE Ground, Bengarulu",
        price: "4500 Onwards",
        subpart: "Step out and enjoy this event",
        image:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1679561309%2Fyfqlxwgx8zpvtuwhwycd.png"
          
        },
      {
        id:3,
        title: "Under 25 Summit  One Night Only Tour 2023",
        disp1: "March4 & 5 | 9AM - 10 PM ",
        disp2: "Embassy International Riding School",
        price: "2655 Onwards",
        subpart: "Step out and enjoy this event",
        image:
          "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1679642483%2Filyznbsjtbgos9zpl3wt.png"
      },
  ];

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor:'white'}}>
      {data.map((item) => (
        <View 
        key={item.id} style={styles.card}
        >
          <Image source={{ uri: item.image }} style={styles.cardImage} />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.disp1}</Text>
            <Text style={styles.cardDescription}>{item.disp2}</Text>
            <Text style={{fontWeight: 'bold',margin:10}}>{item.price}</Text>
            <View style={{ backgroundColor: "#F5FCFE", padding: 10 }}>
            <Text style={{ color: "#31C0F0", margin: 0 }}>{item.subpart}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
     borderColor:"#e3e5e7",
     borderWidth:1,
    marginLeft:20,
    marginTop:15,
    marginBottom:20,
    width: 300,
    height: 340,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardText: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 13,
    color: '#444',
  },
});

export default Card1;

