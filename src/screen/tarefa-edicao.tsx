import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface AppProps {
    navigation:any;
}

export interface AppState { }

/**
 * Tela responsável cadastrar e editar tarefas cadastradas pelo usuário
 */
export default class TarefaEdicaoScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { };
  }

  public render() {
    const titulo = (this.props.navigation.getParam('id', null) == null ? 'Cadastrar ' : 'Editar ') + "Tarefa"; 
    return (
        <View>
            <Text>{titulo}</Text>
        </View>
    );
  }
}
