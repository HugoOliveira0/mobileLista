import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { AntDesign, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { style } from './styles';
import { themas } from '../../global/themes';

const CustomTabBar: React.FC<BottomTabBarProps> = (props) => {
    const {state, descriptors, navigation} = props;

    const go = (screenName: string) => {
        navigation.navigate(screenName);
    }

    return(
        <View style={style.tabBar}>
            {/* 1° item da lista */}
            <TouchableOpacity onPress={() => go('List')} style={style.tabItem}>
        
                <AntDesign 
                    name = 'bars'
                    size = {24}
                    style = {{opacity:state.index === 0 ? 1 : 0.2, color: themas.colors.primary, fontSize: 32}}
                />
            </TouchableOpacity>


            {/* Botão Central */}
            <View style={style.centerWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate('Middle')} style={style.centerButtonContainer}>

                    <View style={style.iconRow}>
                        <Entypo 
                            name='plus'
                            size={22}
                            color='#fff'                            
                        />

                        <MaterialIcons 
                            name='edit'
                            size={22}
                            color='#fff'           
                        />
                    </View>


                </TouchableOpacity>
            </View>


            {/* Último item da nossa tab */}
            <TouchableOpacity onPress={() => go('User')} style={style.tabItem}>

                <FontAwesome
                    name='user'
                    size={24}
                    style = {{opacity:state.index === 1 ? 1 : 0.2, color: themas.colors.primary, fontSize: 32}}
                />
            </TouchableOpacity>
        </View>
    )
}

export default CustomTabBar;