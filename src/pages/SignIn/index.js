import React from "react";
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

import {useNavigation} from '@react-navigation/native'




export default function SignIn() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} syle={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>

            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm} >
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite um Email "
                    style={styles.input}
                    
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite uma Senha "
                    style={styles.input}
                    
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={ () =>  navigation.navigate('Home')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>

                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonRegister}
                    onPress={ () =>  navigation.navigate('RegisIn')}
                >
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>

                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonRegister}
                    onPress={ () =>  navigation.navigate('RegisIn')}
                >
                    <Text style={styles.registerText}> Esqueceu a senha? Clique aqui </Text>

                </TouchableOpacity>

            </Animatable.View>


            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#3498DA'
    },

    containerHeader:{
        flex: 1,
    },

    message:{
        paddingStart:'10%',
        fontSize: 40,
        fontWeight:'bold',
        color:'#FFF',
        marginBottom:'20%',
        marginTop:'10%',
    },
    
    containerForm:{
        flex:2,
        backgroundColor:'#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%',
        bottom: 10,
        borderWidth: 2,
        borderRadius: 5,
        marginRight: 5,
        marginLeft: 5,
        borderColor: '#FFFC00',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25

    },

    title:{
        fontSize:20,
        marginTop:28        

    },

    input:{
        borderBottomWidth:1,
        height:40,
        marginBottom:12,
        fontSize:16

    },

    button:{
        backgroundColor:'#3498DA',
        width:'100%',
        borderRadius:4,
        paddingVertical:8,
        marginTop:14,
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 1, 
        borderColor: '#FFFC00' 

    },

    buttonText:{
        color:'#FFF',
        fontSize:18,
        fontWeight:'bold'

    },

    buttonRegister:{
        marginTop:10,
        alignSelf:'center'
    },

    registerText:{
        color:'#a1a1a1'
    }

})