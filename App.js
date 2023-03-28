
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main1 from './Main1';
import Page2 from './Page2';




const Stack = createStackNavigator();



const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen name=" " component={Main1} />
        <Stack.Screen name="Page2" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App