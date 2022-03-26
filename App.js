import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './routes/StackNavigator';

export default function App() {

  const [fontLoad] = useFonts({
    'Core_Deco_B6': require('./assets/fonts/core-deco-b6.ttf'),
    'Din_Condensed_Bold': require('./assets/fonts/DINCondensed-Bold.ttf'),
    'Apple_Symbols': require('./assets/fonts/Apple-Symbols.ttf')
  })
  
  if(!fontLoad){
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
