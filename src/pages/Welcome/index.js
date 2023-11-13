import React from "react";

import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import {useNavigation} from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
               <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/Logo.png')}
                    style={{width: '100%'}}
                    resizeMode="contain"
               /> 
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Organize suas compras de quelquer lugar!</Text>
                <Text style={styles.text}> Faca o login</Text>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={ () =>  navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
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
    containerLogo:{
        flex:2,
        backgroundColor:'#3498',
        justifyContent:'center',
        alignItems:'Center'

    },
    containerForm:{
        flex:1,
        backgroundColor:'#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'
        
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

    button:{
        position:'absolute',
        backgroundColor:'#3498DA',
        borderRadius: 50,
        paddingVertical:8,
        width: '100%',
        alignSelf:'Center',
        bottom: '15%',
        alignItems:'center',
        justifyContent:'center',
        borderWidth: 1, 
        borderColor: '#FFFC00'
       
    },

    buttonText:{
        fontSize:18,
        color:'#FFF',
        fontWeight:'bold'
       
    }

});