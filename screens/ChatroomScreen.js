import { StyleSheet, Text, View,TouchableWithoutFeedback,KeyboardAvoidingView,Keyboard,ScrollView,TouchableOpacity } from 'react-native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import { auth, firestore } from '../firebase';
import { useNavigation, useRoute } from '@react-navigation/core';
import CustomListItem from './components/CustomListItem';
import {Ionicons, MaterialIcons, FontAwesome5} from '@expo/vector-icons';


const ChatroomScreen = () => {
  const [chats, setChats] = useState([]);
    
  const navigation = useNavigation();
  const route = useRoute();

  const email = auth.currentUser.email;
  const [username, setUsername] = useState("");

  useEffect(()=>{
    const unsubscribe = firestore.collection('Chats').onSnapshot(snap => (
        setChats(snap.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
        })))
    ))

    return unsubscribe;
  },[])

  useEffect(async ()=>{
    console.log('The email is '+ email)
    await firestore.collection('Users')
                    .doc(email)
                    .get()
                    .then(documentSnapshot => {
                    console.log('User exists: ', documentSnapshot.exists);
                
                    if (documentSnapshot.exists) {
                        console.log('User data: ', documentSnapshot.data());
                        const user = documentSnapshot.data()
                        setUsername(user.username)
                    }
                    });
  },[])

  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
        console.log('User signed out!');
        navigation.replace("Login");
    });
  }

  const enterChat = (id, chatName) => {
      navigation.navigate('Chat', {
          id,
          chatName,
      })
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight: ()=>(
            <View style={{flexDirection: 'row', width: 80, justifyContent: 'space-evenly'}}>
                <TouchableOpacity>
                    <FontAwesome5 name="camera" size={24} color={'#402218'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate("AddChat")}>
                    <FontAwesome5 name="pen" size={24} color={'#402218'} />
                </TouchableOpacity>
            </View>
        ),
    })
})

  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? "padding" : 'height'}
    >
      <ScrollView >
        {chats.map(({ id, data: { chatName } }) => (
            <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat}/>
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
  )
}

export default ChatroomScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FBF8F1'
  },
})