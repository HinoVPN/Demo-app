import React from "react";
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from "./DrawerNavigator";
import ChatroomScreen from "../screens/ChatroomScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();


const screenOptionStyle = ({ route, navigation}) => ( {
    headerStyle: {
        backgroundColor: '#1B6464',
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitleStyle: {
        fontFamily:'Core_Deco_B6',
        fontSize: 30,
    },
  });

const MainStackNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Login" screenOptions={screenOptionStyle}>
        <Stack.Screen name="Drawer" component={DrawerNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false, title: "Login"}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false, title: "SignUp"}}/>
      </Stack.Navigator>
    );
}

export default MainStackNavigator;