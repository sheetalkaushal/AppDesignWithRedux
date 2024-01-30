import {View, Text} from 'react-native';
import React from 'react';
import HomePage from '../Screen/HomePage/HomePage';

export default function MainStack(Stack) {
  return (
    <>
      <Stack.Screen
        name={'HomePage'}
        component={HomePage}
        options={{headerShown: false}}
      />
    </>
  );
}
