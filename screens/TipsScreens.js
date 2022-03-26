import { StyleSheet, Text, View,TouchableWithoutFeedback,KeyboardAvoidingView,Keyboard } from 'react-native'
import React from 'react'

const TipsScreens = () => {
  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? "padding" : 'height'}
    >
    <Text>Hello</Text>
    </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
  )
}

export default TipsScreens

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#FBF8F1'
  },
})