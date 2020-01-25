import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import Tarefa from '../models/tarefa';
import { SwipeRow } from 'react-native-swipe-list-view';

export interface AppProps {
    tarefa:Tarefa;
    onEditar(tarefa:Tarefa);
    onExcluir(id:string);
}

export function ItemTarefa (props: AppProps) {
    return (
        <SwipeRow disableRightSwipe  rightOpenValue={-120} stopRightSwipe={-120}>
            <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
                <Button title="Editar" buttonStyle={styles.btnEditar} titleStyle={styles.btn} onPress={()=>props.onEditar(props.tarefa)}/>
                <Button title="Excluir" buttonStyle={styles.btnExcluir} titleStyle={styles.btn} onPress={()=>props.onExcluir(props.tarefa.id)}/>
            </View>
            <View style={styles.container}>
                <Text>{props.tarefa.descricao}</Text>
                <Text>{props.tarefa.data}</Text>
            </View>
        </SwipeRow>
    );
}

const styles = StyleSheet.create({
   container: {
       flexDirection: 'row',
       justifyContent:'space-between',
       backgroundColor:'white',
       padding:10,
   },
   btn: { color: 'white' },
   btnEditar: {backgroundColor: 'blue', width:60, borderRadius:0},
   btnExcluir: {backgroundColor: 'red', width:60, borderRadius:0},
});