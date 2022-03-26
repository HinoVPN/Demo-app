import React from "react";
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import BottomTabNavigator from "./TabNavigator";
import { DrawerContent } from "../screens/drawerContent";

const Drawer = createDrawerNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: '#1B6464',
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitleStyle: {
        fontFamily:'Core_Deco_B6',
        fontSize: 30,
    },
    headerShown: false,
  };

const DrawerNavigator = () => {
    return (
      <Drawer.Navigator 
      initialRouteName="BottomTab" 
      screenOptions={screenOptionStyle}
      drawerContent={props => <DrawerContent {...props}/>}
      >
          <Drawer.Screen name="BottomTab" component={BottomTabNavigator} options={{title: "BottomTab"}}/>
      </Drawer.Navigator>
    );
  }
  
export default DrawerNavigator;