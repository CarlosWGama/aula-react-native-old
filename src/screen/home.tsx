import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Toolbar } from '../components/toolbar';
import { Fab } from '../components/fab';
import Tarefa from '../models/tarefa';
import { ItemTarefa } from '../components/item-tarefa';
import { FlatList } from 'react-native-gesture-handler';

export interface AppProps {
    navigation: any; 
}

export interface AppState { 
  tarefas:Tarefa[];
}


/**
 * Tela principal quando o usuário estiver logado
 * Essa tela irá listar todas tarefas cadastradas pelo usuário
 */
export default class HomeScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { 
      tarefas: [new Tarefa('Tarefa 1', '07/07/2019', '1'),
               new Tarefa('Tarefa 2', '07/07/2019', '2'),
               new Tarefa('Tarefa 3', '07/07/2019', '3')
              ]
    };
  }

  /** Rederiza a tela */
  public render() {
    return (
      <View style={styles.container}>
          <Toolbar titulo="Home" navigation={this.props.navigation} menu={true} />
          
          {/* LISTA DE TAREFAS */}
            <FlatList 
                data={this.state.tarefas}
                extraData={this.state.tarefas}
                keyExtractor={(t) => t.id}
                renderItem={({item}) => (
                    <ItemTarefa tarefa={item} onEditar={(tarefa)=>this.props.navigation.navigate('tarefaEdicao', {tarefa})} onExcluir={(id)=>console.log(id)}/>
                )}    
              /> 
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
  