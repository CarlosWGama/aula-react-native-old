import * as React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export interface AppProps {
    children:any;   //Elementos do modal
    titulo?:string; //Possui um titulo
    visivel:boolean; //Exibe ou não Modal
    onConfirmar(); //Função ao clicar no botão Confirmar
    onCancelar(); //Função ao clicar no botão Cancelar
}

/**
 * Cria um Modal customizável 
 * @param props 
 */
export function AlertCustom (props: AppProps) {
    return (
      <Modal visible={props.visivel} animationType="slide" transparent>
          {/* Centraliza o Modal */}
           <View style={styles.modal}> 
            {/* Cria um fundo branco e arrendondado */}
            <View style={styles.container}> 
                {props.titulo != null && <Text style={styles.titulo}>{props.titulo}</Text>}
                
                {/* Exibe os conteúdos passadod externamente */}
                {props.children}

                {/* Ajustar os botões */}
                <View style={styles.btns}>
                    <Button title="Confirmar" onPress={props.onConfirmar} type="clear" />
                    <Button title="Cancelar" onPress={props.onCancelar}  type="clear" />
                </View>
            </View>
          </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'stretch',
        padding: 20,
    },
    titulo: {
        fontSize: 20
    },
    container: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

