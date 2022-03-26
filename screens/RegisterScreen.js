import { StyleSheet, Text, View, TextInput, Image,TouchableWithoutFeedback ,KeyboardAvoidingView,TouchableOpacity,Keyboard,Alert} from 'react-native'
import React from 'react'
import { useState, useEffect} from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { auth, firestore} from '../firebase';



const RegisterScreen = () => {

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  
  const navigation = useNavigation();
  const route = useRoute();

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
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            user.updateProfile({
                displayName: username,
            });
            const email = user.email;
          console.log('Register Email:  '+ email);

          firestore
          .collection('Users')
          .doc(email)
          .set({
              username: username,
              email: email.toLowerCase(),
              password: password
          })
          .then((res) => {
              console.log('User ' +res.username+ ' added!');
          });
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            Alert.alert(
                "Error",
                'Email already in use',
              );
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            Alert.alert(
                "Error",
                'Invalid Email',
              );
          }
      
          console.error(error);
        });
  }

  const handleSignUp = () =>{
    navigation.replace("Login")
  }
  
  return (
     <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? "padding" : 'padding'}
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
              placeholder='Username'
              value={username}
              onChangeText={text => {setUsername(text)}}
            />

            <TextInput
              style={styles.inputField}
              placeholder='Email'
              value={email}
              onChangeText={text => {setEmail(text)}}
            />

            <TextInput
              style={styles.inputField}
              placeholder='Password'
              value={password}
              onChangeText={text => {setPassword(text)}}
              secureTextEntry
            />
          
          <View style={styles.buttonSection}>
              <TouchableOpacity 
              style={styles.button}
              onPress={handleSignIn}
              >
                  <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={handleSignUp}
              >
                  <Text style={styles.SignUpText}>Sign In</Text>
              </TouchableOpacity>
          </View>
        </View>
        
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default RegisterScreen

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
    flex: 3,
    justifyContent: 'center',
  },
  inputSection:{
    width: '80%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 4
  },
  inputField:{
    width: '100%',
    textAlign: 'center',
    color: '#938A78',
    backgroundColor: '#D4C7B5',
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 15 : 5,
    borderRadius: 50,
    marginBottom: Platform.OS === 'ios' ? 25 : 15,
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