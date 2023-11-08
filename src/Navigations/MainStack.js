import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from '../Screens/HomesScreen/HomeScreen';
import ServicesProvide from '../Screens/ServicesProvide/ServicesProvide';
import CardData from '../Screens/CartData/CardData';
export default function MainStack(Stack) {
  return (
    <>
      <Stack.Screen
        name="HomesScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ServicesProvide"
        component={ServicesProvide}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CartData"
        component={CardData}
        options={{headerShown: false}}
      />
    </>
  );
}
