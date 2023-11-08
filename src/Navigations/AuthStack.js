import loginScreen from "../Screens/LoginScreen/LoginScreen";
import SignUpScreens from "../Screens/SignupScreens/SignUpScreens";
export default function AuthStack(Stack) {
  return (
    <>
      <Stack.Screen
        name={'LoginScreen'}
        component={loginScreen}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name={'SignUpScreens'}
        component={SignUpScreens}
        options={{headerShown: false}}
      />
    </>
  );
}
