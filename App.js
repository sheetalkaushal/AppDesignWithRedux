import { View, Text } from 'react-native'
import React from 'react'
import Routes from './src/Navigations/Routes'
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import ServicesProvide from './src/Screens/ServicesProvide/ServicesProvide';
const App = () => {
  return (
    <View style={{ flex: 1 }}>
    <Provider store={store}>
      <Routes />
  {/* <ServicesProvide/> */}
    </Provider>
  </View>
  )
}

export default App