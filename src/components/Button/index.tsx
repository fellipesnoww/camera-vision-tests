import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps{
    message: string;
}

export default function Button({message, ...rest}: ButtonProps){
    return (
        <TouchableOpacity style={styles.button} {...rest}>
            <Text style={styles.message}>{message}</Text>
        </TouchableOpacity>
    )
}