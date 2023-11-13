import React from "react";

import { View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';

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
                    style={styles.logo}
                    resizeMode="contain"
               /> 
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
               
                <TouchableOpacity 
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Criar Lista</Text>

                </TouchableOpacity>

                

                <TouchableOpacity 
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Minhas Listas</Text>
                    
                </TouchableOpacity>
                
                


                <TouchableOpacity 
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Histórico</Text>
                    
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
        width: '80%',
        height: '100%'
        
    },


    containerLogo:{
        flex:2,
        backgroundColor:'#3498',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        padding: 16

    },
    containerForm:{
        flex:15,
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

    button: {
        backgroundColor: '#3498DA',
        borderRadius: 25,
        paddingVertical: 20,
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2, 
        borderColor: '#FFFC00'

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