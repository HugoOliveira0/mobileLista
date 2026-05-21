import React from "react";
import { useState } from "react";
import {
    Image,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo_etec.png';
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/button";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    async function getLogin() {
        try {
            setLoading(true);
            if (!email || !password) {
                setTimeout(() => {
                    Alert.alert('Atenção', 'Digite os campos obrigatórios');
                    setLoading(false);
                }, 3000);
                return;
            }

            setTimeout(() => {
                if (email === 'mauricioaneves@terra.com.br' && password === '1234') {
                    Alert.alert('Sucesso', 'Logado com Sucesso');
                } else {
                    Alert.alert('Erro', 'Usuário não encontrado');
                }
                setLoading(false);
            }, 3000);

        } catch (error) {
            Alert.alert('Erro', 'Erro ao Logar');
            setLoading(false);
        }

    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                {/* <Text>Top</Text> */}
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta</Text>
            </View>


            <View style={style.boxMid}>

                <Input 
                    title="ENDEREÇO DE EMAIL"
                    value={email}
                    onChangeText={setEmail}

                    IconRight={MaterialIcons}
                    iconRightName="email"
                   
                />

                <Input
                    title="SENHA"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    onIconRightPress={() => setShowPassword(!showPassword)}

                    IconRight={Octicons}
                    iconRightName={showPassword ? "eye" : "eye-closed"}
                />

            </View>

            <View style={style.boxBottom}>
                <Button 
                    text="Entrar"
                    loading={loading}
                    onPress={getLogin}
                />
            </View>
            <Text style={style.textBottom}>Não tem conta?
                <Text style={{ color: themas.colors.primary }}>Crie Agora</Text>
            </Text>
        </View>
    )
}

