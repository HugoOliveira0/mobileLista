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
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { themas } from "../../global/themes";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function getLogin() {
        try {
            setLoading(true);
            if (!email || !password) {
                return Alert.alert('Atenção', 'Digite os campos obrigatórios');
            }

            setTimeout(() => {
                if (email == 'mauricioaneves@terra.com.br' && password == '1234') {
                    Alert.alert('Sucesso', 'Logado com Suceso');
                } else {
                    Alert.alert('Erro', 'Usuário não encontrado');
                }
                setLoading(false);
            }, 3000);

        } catch (error) {
            Alert.alert('Erro', 'Erro ao Logar');
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

                <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <MaterialIcons
                        name="email"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <Entypo
                        name="eye"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>

            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={() => getLogin()}>
                    {loading ? <ActivityIndicator color={'#ffff'} size={'small'} />
                        :
                        <Text style={style.textButton}>Entrar</Text>
                    }

                </TouchableOpacity>
            </View>
            <Text style={style.textBottom}>Não tem conta?
                <Text style={{ color: themas.colors.primary }}>Crie Agora</Text>
            </Text>
        </View>
    )
}

