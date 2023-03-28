import React from 'react'
import  { useState } from 'react';
import Title from './components/Title';
import { View,Text ,Image,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import Card1 from './components/Card1';
// import Verify from './Verify';

export default function Page2() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  }
  return (
    <View>
      
      <ScrollView>
      {/* <Verify/> */}
        <Image source={{uri: 'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1677325824%2Fwsvnekmmtjeijbutoaoa.png' }} 
        style={styles.cardImage} />
        <View style={{marginLeft:25,marginTop:20,marginRight:25}}>
        <Text style={{fontWeight:'bold',fontSize:20,textDecorationLine: 'underline'}}>About</Text>
        <Text style={styles.cardTitle}>Arijit Singh - One Night Only Tour, Bangalore 2023</Text>
            <Text style={styles.cardDescription}>March 4 | Gates Open: 5PM</Text>
            <Text style={styles.cardDescription}>Show Begin:6 NICE Ground, Bengarulu</Text>
            <Text style={{fontWeight: 'bold',margin:10}}>4500 Onwards</Text>
            <View style={{ backgroundColor: "#F5FCFE", padding: 10 }}>
            <Text style={{ color: "#31C0F0", margin: 0 }}>Step out and enjoy this event</Text>
    </View>
    <Text style={{fontWeight:'bold',marginTop:30,fontSize:25}}>About the Event</Text>
    <Text style={{marginTop:20,fontSize:15}}>Grammy & Oscar winner A R Rahman to perform his full-fledged Live Concert for Feeding Smiles in Pune!
</Text>
<Text style={{marginTop:10,fontSize:15}}>
AR Rahman is a name that needs no introduction to Indian music fans. To call him just a musician or composer would do his impact and legacy no justice. Experience the Maestro’s Live Concert for Feeding Smiles in Pune on 30th April 2023.</Text>
    
    <Text style={{marginTop:10,fontWeight:'bold',fontSize:17}}>Official Offline Ticketing Partner</Text>
    <Text style={{marginTop:10,fontWeight:'bold',fontSize:17}}>LiveFiesta</Text>
    <Text style={{marginTop:10,fontWeight:'bold',fontSize:17}}>Mob: 9821261553 , 9833070733 , 9619272555</Text>
    <Text style={{marginTop:20,fontSize:15}}>Throughout his illustrious career, Rahman has composed music for some of the biggest names in the Hollywood, Bollywood and Tamil film industry, and with some of the best singers and musicians. He has several international collaborations as well - including English, Chinese and Iranian films. He has worked with Ranjit Barot, Shivamani, Clinton Cerejo, and international stars like Michael Jackson, Mick Jagger, Kylie Minogue and Zayn Malik.</Text>
    <Text style={{marginTop:10,fontWeight:'bold',fontSize:22}}>Venue</Text>
    <Text style={{marginTop:20,fontSize:15}}>The Mills
5, Raja Bahadur Mill Rd, Behind Hotel Grand Sheraton, Sangamvadi, Pune, Maharashtra 411001, India</Text>
<View>
      <TouchableOpacity onPress={toggleDetails}>
        <Text style={{fontWeight: 'bold', fontSize: 22, marginBottom: 10,marginTop:20}}>
        Terms and Conditions 
          {showDetails ? "-" : "+"}
        </Text>
      </TouchableOpacity>
      {showDetails && (
        <Text style={{fontSize:15,marginBottom:20}}>Please carry a valid ID proof along with you.No refunds on purchased ticket are possible, even in case of any rescheduling.
        Security procedures, including frisking remain the right of the management.
        No dangerous or potentially hazardous objects including but not limited to weapons, knives, guns, fireworks, helmets, lazer devices, bottles, musical instruments will be allowed in the venue and may be ejected with or without the owner from the venue.
        The sponsors/performers/organizers are not responsible for any injury or damage occurring due to the event. Any claims regarding the same would be settled in courts in Mumbai.
        People in an inebriated state may not be allowed entry.
        Organizers hold the right to deny late entry to the event.
        Venue rules apply.
        </Text>
      )}
       <View
      style={{
        borderBottomColor: '#e3e5e7',
        borderBottomWidth: 2,
      }}
    />
    </View>
    <Text style={{marginTop:10,fontWeight:'bold',fontSize:22}}>YOU MAY LOVE THIS TO</Text>
    <Card1/>
    </View>
    </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
     cardImage: {
      width: '100%',
      height: 210,
    },
    cardText: {
      padding: 10,
    },
    cardTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop:30
    },
    cardDescription: {
      fontSize: 13,
      marginTop:10,
      color: '#444',
    },
})