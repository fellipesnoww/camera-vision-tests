import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Button from "../../components/Button";

export default function Home(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escolha uma opção</Text>
            <View style={styles.optionsArea}>
                <Button message="GO"/>
            </View>
        </View>
    )
}