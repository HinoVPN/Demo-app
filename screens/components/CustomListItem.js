import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'


const CustomListItem = ({id, chatName, enterChat}) => {
  return (
    <TouchableOpacity  onPress={()=> enterChat(id, chatName)}>
        <View style={styles.listContainer} key={id}>
            <Image
              style={styles.tinyLogo}
              source={require('../../assets/icon.png')}
            />
            <View style={styles.info}>
                <Text style={styles.Title}>{chatName}</Text>
                <Text style={styles.Content}>CustomListItem</Text>
            </View>

        </View>
    </TouchableOpacity>
    
  )
}

export default CustomListItem

const styles = StyleSheet.create({
    listContainer:{
        flex: 1,
        width: '100%',
        backgroundColor: '#FBF8F1',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    info:{
        marginStart: 20,
    },
    Title:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    Content:{
        fontSize: 15,
    }
})