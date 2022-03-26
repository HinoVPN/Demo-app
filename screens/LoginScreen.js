import { StyleSheet, Text, View, TextInput, Image,TouchableWithoutFeedback ,KeyboardAvoidingView,TouchableOpacity,Keyboard,Alert} from 'react-native'
import React from 'react'
import { useState, useEffect} from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { auth } from '../firebase';

const LoginScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user => {
        if(user){
            navigation.replace("Drawer")
        }
    })
    return unsubscribe
},[])

  const handleSignIn = () =>{
    auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            const email = user.email;
          console.log('Login with '+ email);
        })
        .catch(error => {
            if (error.code === 'auth/internal-error') {
                console.log('Please enter your email or password');
                Alert.alert(
                    "Error",
                    'Please enter your email or password',
                  );
            }
        
            if (error.code === 'auth/wrong-password') {
                console.log('Wrong password');
                Alert.alert(
                    "Error",
                    'Wrong password',
                  );
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                Alert.alert(
                    "Error",
                    'Invalid Email',
                  );
            }

            if (error.code === 'auth/user-not-found') {
                console.log('user-not-found');
                Alert.alert(
                    "Error",
                    'Please Sign up',
                  );
            }

          console.error(error);
        });

  }

  const handleSignUp = () =>{
    navigation.replace("Register")
  }
  
  const navigation = useNavigation();
  const route = useRoute();



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? "padding" : 'height'}
    >
        <View style={styles.imageSection}>
          <Image
              style={styles.tinyLogo}
              source={require('../assets/icon.png')}
            />
        </View>
        
        <View style={styles.inputSection}>
          <TextInput
              style={styles.inputField}
              placeholder='EMAIL'
              value={email}
              onChangeText={text => {setEmail(text)}}
              />
          <TextInput
              style={styles.inputField}
              placeholder='PASSWORD'
              value={password}
              onChangeText={text => {setPassword(text)}}
              secureTextEntry
          />
          
          <View style={styles.buttonSection}>
              <TouchableOpacity 
              style={styles.button}
              onPress={handleSignIn}
              >
                  <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={handleSignUp}
              >
                  <Text style={styles.SignUpText}>Sign Up</Text>
              </TouchableOpacity>
          </View>
        </View>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F0E2D2'
  },
  tinyLogo:{
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  imageSection:{
    flex: 2,
    justifyContent: 'center',
  },
  inputSection:{
    width: '80%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 3
  },
  inputField:{
    width: '100%',
    textAlign: 'center',
    color: '#938A78',
    backgroundColor: '#D4C7B5',
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 15 : 5,
    borderRadius: 50,
    marginBottom: Platform.OS === 'ios' ? 30 : 10,
    fontSize: Platform.OS === 'ios' ? 20 : 15,
  },
  buttonSection:{
    width: "100%",
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  },
  button:{
    width: "60%",
    backgroundColor: '#938A78',
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 15 : 10,
    marginVertical: 2,
    alignSelf: 'center',
    borderRadius: 50,
  },
  buttonText:{
      color: 'white', 
      textAlign: 'center',
      fontSize: Platform.OS === 'ios' ? 20 : 15,
  },
  SignUpText:{
      color: '#938A78', 
      textAlign: 'center',
      alignSelf: 'center',
      fontSize: 16,
      marginBottom: 50,
      textDecorationLine: 'underline'
  }
})