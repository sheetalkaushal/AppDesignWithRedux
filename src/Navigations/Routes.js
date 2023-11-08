import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GetAsync } from '../utilis/utilis';
const Stack = createNativeStackNavigator();
export default function Routes() {
const Status=useSelector((state)=>state.status.Status)
// const data=GetAsync('Suggestions')
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animation: 'slide_from_right'}}>
        {Status? MainStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
