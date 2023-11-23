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
            
               <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/Logo.png')}style={styles.logo}
               /> 

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>O diferencial para sua lista de compras!</Text>
                <Text style={styles.text}> Faça o login</Text>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={ () =>  navigation.navigate('Login')}
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
    logo:{
        flex:5,
        backgroundColor:'#3498DA',
        justifyContent:'center',
        width: '100%',
        resizeMode:"contain",
    },
    containerForm:{
        flex:2,
        backgroundColor:'#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius:25,
        marginRight: 10,
        marginLeft: 10,
        bottom: 10,
        paddingStart:'5%',
        paddingEnd:'5%',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#FFFC00'
        
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
        position: 'absolute',
        backgroundColor:'#3498DA',
        borderRadius: 50,
        paddingVertical:8,
        width: '100%',
        alignSelf:'center', //botão
        bottom: '25%', //botão
        alignItems:'center', //texto do botão
        justifyContent:'center', // texto do botão
        borderWidth: 2, 
        borderColor: '#FFFC00'
       
    },

    buttonText:{
        fontSize:18,
        color:'#FFF',
        fontWeight:'bold'
       
    }

});