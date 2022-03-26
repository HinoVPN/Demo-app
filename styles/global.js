import { StyleSheet } from 'react-native';

export const globalstyles = StyleSheet.create({
    menuIcon: {
        position: 'absolute',
        left: 16,
        color: '#402218'
    },
    card:{
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
    },
    cardContent:{
        marginHorizontal: 18,
        marginVertical: 10
    },
    formContainer:{
        marginTop: '20%',
        marginHorizontal:"10%"
    },
    formInput:{
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#bbb',
        padding: 12,
        minHeight: 50,
        fontSize: 14,
        fontFamily: 'Nunito-Regular',
        marginVertical: 10

    },
    formSubmitBtn:{
        backgroundColor: '#1B6464',
        borderRadius: 10,
        padding: 10,
        alignItems:'center',
        marginVertical: 10

    },
    formSubmitBtnContent:{
        fontSize: 18,
        fontFamily: 'Nunito-Bold',
        color: 'white',
    },
    errorText:{
        color: 'crimson',
        fontWeight: 'bold',
        marginVertical: 5,
        textAlign: 'center'
    },
    modalOpenToggle:{
        borderRadius: 6,
        alignSelf: "center",
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        padding: 10
    },
    modalCloseToggle:{
        borderRadius: 6,
        alignSelf: "center",
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        marginTop: Platform.OS === 'ios' ? 60 : 10,
        padding: 10
    },
    modalContent:{
        flex: 1
    }
  });