import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import { Ionicons,Entypo } from '@expo/vector-icons'; 
import { auth } from '../firebase';

export function DrawerContent(props){

    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            console.log('User signed out!');
            props.navigation.replace("Login");
        });
    }

    return(
        <View style={{flex: 1, paddingHorizontal: 20,paddingVertical: 50, backgroundColor:'#E1D9CC'}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.profileSection}>
                    <View style={styles.iconBackGround}>
                        <Image
                            style={styles.icon}
                            source={require("../assets/icon.png")}
                        />
                    </View>
                    <View style={styles.nameTag}>
                            <Text style={{color: '#402218', fontFamily: 'Din_Condensed_Bold',alignSelf: 'center',fontSize: 20}}>Team Papaya</Text>
                            <Text style={{color: '#402218',fontFamily: 'Din_Condensed_Bold',alignSelf: 'center'}}>UX Design Course</Text>
                    </View>
                </View>
                <Drawer.Section>
                    <DrawerItem icon={({color,size})=>(
                        <Ionicons name="ios-home-outline" size={24} color={"#402218"} />
                        )}
                        label="Home"
                        labelStyle={{color: '#402218'}}
                        onPress={()=>{props.navigation.navigate('Home');}}
                    />
                </Drawer.Section>

            </DrawerContentScrollView>
            <View style={{alignItems: 'center'}}>
                <Entypo name="log-out" size={24} color="#402218" onPress={handleSignOut}/>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    profileSection:{
        flexDirection: 'row',
    },
    icon:{
        width: 60,
        height: 60,
        borderRadius: 90,
    },
    iconBackGround:{
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
    },
    nameTag:{
        alignSelf: 'center'
    },
    aboutMeSection:{
        marginVertical: 20,
        marginHorizontal: 20,
    },
    aboutMeTitle:{
        fontFamily: 'Din_Condensed_Bold',
        fontSize: 15,
        color: 'white'
    },
    aboutMeContent:{
        fontFamily: 'Din_Condensed_Bold',
        fontSize: 12,
        color: 'white',
        textAlign: 'justify'
    },
    socialSection:{
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
        width: 120,
    },
    contactSection:{
        marginVertical: 10
    },
    contactTitle:{
        fontFamily: 'Din_Condensed_Bold',
        fontSize: 15,
        color: 'white',
        textAlign: "center",
        marginBottom: 5
    },
    contactContent:{
        fontFamily: 'Din_Condensed_Bold',
        fontSize: 13,
        color: 'white',
        textAlign: "center",
    }
  });