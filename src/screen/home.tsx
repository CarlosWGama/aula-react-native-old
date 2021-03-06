import * as React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { Toolbar } from '../components/toolbar';
import { Fab } from '../components/fab';
import Tarefa from '../models/tarefa';
import { ItemTarefa } from '../components/item-tarefa';
import { FlatList } from 'react-native-gesture-handler';
import { TarefasProvider } from '../providers/tarefas';

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

  private tarefasProvider = new TarefasProvider();

  constructor(props: AppProps) {
    super(props);
    this.state = { 
      tarefas: []
    };
  }

  /** Função chamada assim que a página é criadda pela primeira vez */
  componentDidMount() {
    //Listener que é chamado sempre que a página sendo exibida
    this.props.navigation.addListener('didFocus', () => {
      this.tarefasProvider.buscarTodos().then(tarefas => this.setState({tarefas}));
    })
  }

  /**
   * Função que Exclui um item da lista
   * @param id 
  */
  public excluir(id) {
    Alert.alert('Excluir Tarefa', 'Deseja realmente excluir essa tarefa?', [
      {text:'Sim', onPress:() => {
        console.log(id);
        this.tarefasProvider.excluir(id);
        this.tarefasProvider.buscarTodos().then(tarefas => this.setState({tarefas}));
      }},
      {text: 'Não'}
    ]);
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
                keyExtractor={(t) => t.id.toString()}
                renderItem={({item}) => (
                    <ItemTarefa tarefa={item} onEditar={(tarefa)=>this.props.navigation.navigate('tarefaEdicao', {tarefa})} onExcluir={(id)=>this.excluir(id)}/>
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
  