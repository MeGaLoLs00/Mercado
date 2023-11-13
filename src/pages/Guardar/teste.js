import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const cadastrarUsuario = async () => {
        try {
            const response = await axios.post('http://seu-endereco-da-api/criar-usuario', {
                NM_Cliente: nome,
                email,
                senha,
            });

            // Verifica se a resposta da API indica sucesso
            if (response.status === 200) {
                Alert.alert('Cadastro bem-sucedido', 'Seu cadastro foi realizado com sucesso!');
                // Navega para a próxima tela ou realiza outra ação desejada
            } else {
                Alert.alert('Erro', 'Erro ao cadastrar usuário. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            Alert.alert('Erro', 'Erro ao cadastrar usuário. Tente novamente.');
        }
    };

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Cadastre-se</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm} >
                <Text style={styles.title}>Nome</Text>
                <TextInput
                    placeholder="Nome Completo "
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                />

                <Text style={styles.title}>Nome de usuário</Text>
                <TextInput
                    placeholder="Digite um nome de Usuário  "
                    style={styles.input}
                    value={nomeUsuario}
                    onChangeText={setNomeUsuario}
                />

                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite um Email "
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite uma Senha "
                    style={styles.input}
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={setSenha}
                />

                <Text style={styles.title}>Confirmar Senha</Text>
                <TextInput
                    placeholder="Repita a senha acima  "
                    style={styles.input}
                    secureTextEntry={true}
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={cadastrarUsuario}
                >
                    <Text style={styles.buttonText}>Criar Conta</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498DA'
    },

    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },

    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },

    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },

    title: {
        fontSize: 20,
        marginTop: 28
    },

    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },

    button: {
        backgroundColor: '#3498DA',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
});
