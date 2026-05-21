import React from "react";
import { ActivityIndicator, Text, TouchableHighlightProps, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { style } from "./styles";

type Props = TouchableHighlightProps & {
    text: string;
    loading?: boolean;
}

export function Button({text, loading, ...rest}:Props) {
    return (
        <TouchableOpacity
            style={style.button}
            activeOpacity={0.6}
            disabled={loading}
            {...(rest as TouchableOpacityProps)}
        >
            {loading?<ActivityIndicator/> : <Text style={style.textButton}>{text}</Text> 
        }
        </TouchableOpacity>
    )

}