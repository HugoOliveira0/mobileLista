import React, { forwardRef, Fragment, LegacyRef } from "react";
import { TextInput, TextInputProps, View, Text } from "react-native";
import { MaterialIcons, FontAwesome, Octicons } from "@expo/vector-icons";
import { style } from "./styles";
import { themas } from "../../global/themes";



type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> | 
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;     

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    iconLeftName?: string,
    iconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void
}

export const Input = forwardRef((Props: Props, ref: LegacyRef<TextInput> | null) => {
    
    const { IconLeft, IconRight, iconLeftName, iconRightName, title, onIconLeftPress, onIconRightPress, ...rest } = Props;

    return (
        
        <Fragment> 
            <Text style={style.titleInput}>{title}</Text>
            <View style={style.boxInput}>
                <TextInput
                    style={style.input}
                />

                <MaterialIcons
                    name="email"
                    size={20}
                    color={themas.colors.gray}
                />
            </View>
        </Fragment>
    );
});