
import 'expo-dev-client';
import {  ScrollView, View } from 'react-native';
import ImageCarousel from './components/ImageCarousel';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import ColorCard from './components/ColorCard';
import Icon from './components/Icon';
import Status from './components/Status';
import CircleCard from './components/CircleCard';

import Card3 from './components/Card3';

import {useNavigation} from '@react-navigation/native';
  import { TouchableHighlight } from 'react-native';



const Main1=()=> {

    const navigation=useNavigation();
    const handleCardPress=()=>{
        navigation.navigate('Page2');
    };

  return (
    <ScrollView>
    <View >    
    <Navbar/>
    <ImageCarousel/>
    <Title title="STEP OUT"
    desc1="mumbai is opening up again."
    desc2="Find safe and exiting events around you."/>
    <TouchableHighlight onPress={handleCardPress}>
    <Card1 style={{marginTop:20}}/>
    </TouchableHighlight>
    <Title title="FEATURED EVENTS"/>
    <Card2 />
    <Title title="DISCOVER DIGITAL EVENTS"
    desc1="join a live online event-learn, interact and be entertained."/>
    <ColorCard/>
    <Title title="BROWSE EVENTS BY GENRE"/>
    <Icon/>
    <Title title="EVENTS THIS WEEK"/>
    <Status/>
    <Title title="INSIDER MAGAZINE"/>
    <Card3/>
    <Title title="ARTISTS"/>
    <CircleCard/>
    </View>
    </ScrollView>
  );
}


export default Main1;
