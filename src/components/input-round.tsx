import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input } from 'react-native-elements';

//Define os valores de entrada do componente
export interface AppProps {
    texto?:string;
    icone:string;
    placeholder:string;
    onChangeText?(texto:string);
}

/**
 * Função que retorna um InputRound
 * @function InputRound
 * @param props retorna as propriedades que são passadas para o componente
 */
export default (props: AppProps) => (
    <View>
        {props.texto != null && <Text style={styles.labelInput}>{props.texto}</Text>}
        <Input placeholder={props.placeholder}  
            leftIcon={{name:props.icone, color:'white'}}
            inputContainerStyle={styles.containerInput}
            onChangeText={(texto) => props.onChangeText(texto)}
            inputStyle={{color:'white'}} />
    </View>
)

/** Cria o estilo usado no componente */
const styles = StyleSheet.create({
    containerInput: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 30,
        padding: 5,
        marginBottom: 5,
    },
    labelInput: {
        color: 'white',
        fontSize: 20
    }

});