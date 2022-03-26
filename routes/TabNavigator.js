import React from "react";
import 'react-native-gesture-handler';
import {View, Text, TouchableOpacity} from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreens from "../screens/HomeScreens";
import ChatroomScreen from "../screens/ChatroomScreen";
import {Ionicons,MaterialCommunityIcons,Feather} from '@expo/vector-icons';
import { globalstyles } from "../styles/global";
import TipsScreens from "../screens/TipsScreens";
import TimerScreen from "../screens/TimerScreen";
import FlashCardScreen from "../screens/FlashCardScreen";
import ChatScreen from "../screens/ChatScreen";
import SettingScreen from "../screens/SettingScreen";


const Tab = createBottomTabNavigator();

const screenOptionStyle = ({ route, navigation}) => ( {
    title:'MONMENT',
    headerStyle: {
        backgroundColor: '#E1D9CC',
    },
    headerTintColor: '#402218',
    headerTitleAlign: 'center',
    headerTitleStyle: {
        fontFamily:'Core_Deco_B6',
        fontSize: 30,
    },
    headerLeft: () => (
      <Ionicons name="menu" size={24} color={'#402218'} onPress={()=> {navigation.toggleDrawer()}} style={globalstyles.menuIcon}/>),
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'Home') {
        iconName = focused
          ? 'ios-home'
          : 'ios-home-outline';
      } else if (route.name === 'About') {
        iconName = focused ? 'ios-list' : 'ios-list';
      } else if (route.name === 'Schedule') {
        iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
      }
  
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#1B6464',
    tabBarInactiveTintColor: 'gray',
  });

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator initialRouteName="Timer" screenOptions={screenOptionStyle} tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name='Home' component={HomeScreens} />
        <Tab.Screen name="Chatroom" component={ChatroomScreen}/>
        <Tab.Screen name="Tips" component={TipsScreens} />
        <Tab.Screen name="Timer" component={TimerScreen} />
        <Tab.Screen name="Flash" component={FlashCardScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
        <Tab.Screen name="Chat" component={ChatScreen}/>
      </Tab.Navigator>
    );
  };
  
  export default BottomTabNavigator;

  function MyTabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
  
    if (focusedOptions.tabBarVisible === false) {
      return null;
    }
  
    return (
      <View style={{ 
          flexDirection: 'row',
          backgroundColor:"#E1D9CC",
          height: Platform.OS === 'ios' ? 65 : 55,
          justifyContent:"center",
          alignItems:"flex-end",
          paddingBottom: Platform.OS === 'ios' ? 15: 0
        }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = //For the Text in Tab Bar
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? route.name
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          if (label == 'Home' || label == 'Chat'){
            return null;
          }else {
            return (
              <TouchableOpacity
                key={Math.random().toString(36)}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ flex: 1,alignItems:"center",}}
              > 
                { label == "Home" ?
                    isFocused ? 
                      <Ionicons name='ios-home' size={20} color={'#402218'} />
                      : 
                      <Ionicons name='ios-home-outline' size={20} color={'#402218'} />
                  : label == "Chatroom" ?
                    isFocused ? 
                      <Ionicons name="chatbubble" size={20} color='#402218' />
                      : 
                      <Ionicons name="chatbubble-outline" size={20} color='#402218' />
                  : label == "Timer" ?
                    isFocused ? 
                      <Ionicons name="ios-alarm" size={30} color='#402218' />
                      : 
                      <Ionicons name="ios-alarm-outline" size={30} color='#402218' />
                  : label == "Flash" ?
                    isFocused ? 
                      <MaterialCommunityIcons name="card-text" size={20} color="#402218" />
                      : 
                      <MaterialCommunityIcons name="card-text-outline" size={20} color="#402218" />
                  : label == "Tips" ?
                    isFocused ? 
                      <Feather name="paperclip" size={20} color="#402218" />
                      : 
                      <Feather name="paperclip" size={20} color="#402218" />
                  : label == "Setting" ?
                    isFocused ? 
                      <Ionicons name="settings" size={20} color='#402218' />
                      : 
                      <Ionicons name="settings-outline" size={20} color='#402218' />
                  : <View></View>
                }
                <Text style={{ color: isFocused ? '#402218' : '#402218' }}>
                  {label}
                </Text>
              </TouchableOpacity>
            );
          }
          
        })}
      </View>
    );
  }