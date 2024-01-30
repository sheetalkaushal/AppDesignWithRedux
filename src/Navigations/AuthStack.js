import LoginScreen from '../Screen/LoginScreen/LoginScreen';
import SignUpScreen from '../Screen/SignUpScreen/SignUpScreen';

export default function AuthStack(Stack) {
  return (
    <>
      <Stack.Screen
        name={'LoginScreen'}
        component={LoginScreen}
        options={{headerShown: false}}
      />
         <Stack.Screen
        name={'SignUpScreen'}
        component={SignUpScreen}
        options={{headerShown: false}}
      />
    </>
  );
}
