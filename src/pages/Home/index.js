import React from "react";

import { View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable';

import {useNavigation} from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image
                    source={require('../../assets/Logo.png')}
                    style={styles.logo}
            />

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>

                <View style={styles.space} />
               
                <TouchableOpacity 
                    style={styles.button}
                    onPress={ () =>  navigation.navigate('ShoppingList')}
                >
                    <Text style={styles.buttonText}>Criar Lista</Text>

                </TouchableOpacity>

                <View style={styles.space} />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={ () =>  navigation.navigate('MyList')}
                >
                    <Text style={styles.buttonText}>Minhas Listas</Text>
                    
                </TouchableOpacity>
            
                
            </Animatable.View>

           

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#3498DA',

    },

    logo:{
        width: 120,
        height: 120,
        resizeMode: 'contain',
        position: 'absolute',
        top: 30,
        left: 10,
    },

    containerForm:{
        flex:1,
        backgroundColor:'#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%',
        bottom: 5,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#FFFC00',
        marginRight: 5,
        marginLeft: 5,
        position: 'absolute',
        height: '50%',
        width: '100%'
        
    },

    title:{
       fontSize:25,
       fontWeight:'bold',
       marginTop:28,
       marginBottom:12

    },

    text:{
       color:'#a1a1a1',
       fontSize:15


    },

    button: {
        backgroundColor: '#3498DA',
        borderRadius: 25,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2, 
        borderColor: '#FFFC00'

    },

    space: {
        height: 25,
    },

    buttonText:{
        fontSize:25,
        color:'#FFF',
        fontWeight:'bold'
       
    },

    separator: {
        height: 2, 
        backgroundColor: 'black', 
        marginBottom: 16, 
    }

});