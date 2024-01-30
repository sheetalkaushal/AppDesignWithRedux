import {View, Text} from 'react-native';
import React from 'react';
import Route from './src/Navigations/Route';
import LoginScreen from './src/Screen/LoginScreen/LoginScreen';
import SignUpScreen from './src/Screen/SignUpScreen/SignUpScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
const App = () => {
  return (
    <View style={{flex: 1}}>
        <Provider store={store}>
        <Route/>
      </Provider>
    </View>
    

  );
};

export default App;
