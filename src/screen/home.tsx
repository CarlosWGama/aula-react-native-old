import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Toolbar } from '../components/toolbar';
import { Fab } from '../components/fab';
import Tarefa from '../models/tarefa';
import { ItemTarefa } from '../components/item-tarefa';

export interface AppProps {
    navigation: any; 
}

export interface AppState { 
  tarefa:Tarefa;
}


/**
 * Tela principal quando o usuário estiver logado
 * Essa tela irá listar todas tarefas cadastradas pelo usuário
 */
export default class HomeScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { 
      tarefa: new Tarefa('Teste', '20/10/2000')
    };
  }

  /** Rederiza a tela */
  public render() {
    return (
      <View style={styles.container}>
          <Toolbar titulo="Home" navigation={this.props.navigation} menu={true} />
          
          {/* LISTA DE TAREFAS */}
          <ItemTarefa tarefa={this.state.tarefa} onEditar={(tarefa)=>this.props.navigation.navigate('tarefaEdicao', {tarefa})} onExcluir={(id)=>console.log(id)}/>
          <ItemTarefa tarefa={this.state.tarefa} onEditar={(tarefa)=>this.props.navigation.navigate('tarefaEdicao', {tarefa})} onExcluir={(id)=>console.log(id)}/>
          <ItemTarefa tarefa={this.state.tarefa} onEditar={(tarefa)=>this.props.navigation.navigate('tarefaEdicao', {tarefa})} onExcluir={(id)=>console.log(id)}/>
          {/* LISTA DE TAREFAS [FIM] */}
          
          <Fab onPress={() => this.props.navigation.navigate('tarefaEdicao')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1
    }
  });
  