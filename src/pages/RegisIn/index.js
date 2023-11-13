import React, {useState} from "react";
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

import {useForm,Controller} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    username:yup.string().required("Informe seu nome completo"),
    nickname:yup.string().required("informe seu Apelido"),
    email:yup.string().email("Email Invalido").required("Informe seu email"),
    password:yup.string().min(6,"A sua senha deve pelo menos ter 6 digitos").required("Informe sua senha")


})

export default function RegisIn() {
   const{ control, handleSubmit, formStates:{errors}} = useForm({
        resolver: yupResolver(schema)

   })

   function handleSignIn(data){
    console.log(data)
   }
   
   
   
    return(
        <View style={styles.container}>
             <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
                <Text style={styles.message}>Cadastro</Text>

            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm} >
                <Controller
                    control={control}
                    name="username"
                    render={({field: { onChange, onBlur, value} }) => (
                        <TextInput
                            style={styles.input}
                            onChangeText={onChange}
                            onBlur={onBlur}// Chamado quando o textInput é Tocado.
                            value={value}
                            placeholder="Digite seu nome completo"
                        />
                    )}                      
                />

                

                 

                
                    

            </Animatable.View>

        </View>

    );
    

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#3498DA',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:18

    },

    containerHeader:{
        marginTop:'14%',
        marginBottom:'8%',
        paddingStart:'5%'

    },

    message:{
        fontSize: 34,
        fontWeight:'bold',
        color:'#FFF'

    },
    
    containerForm:{
        backgroundColor:'#FFF',
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'

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
        

    },

    buttonText:{
        color:'#FFF',
        fontSize:18,
        fontWeight:'bold'

    },

    buttonRegister:{
        marginTop:14,
        alignSelf:'center'
    },

    registerText:{
        color:'#a1a1a1'
    },

    labelError:{
        alignSelf:'flex-start',
        color:'#fff375b',
        marginBottom:8,
    }


})