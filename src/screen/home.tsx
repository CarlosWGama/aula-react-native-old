import * as React from 'react';
import { View, Text, Button } from 'react-native';

export interface AppProps {
    navigation: any; 
}

export interface AppState { }

/**
 * Tela principal quando o usuário estiver logado
 * Essa tela irá listar todas tarefas cadastradas pelo usuário
 */
export default class HomeScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { };
  }

  /** Rederiza a tela */
  public render() {
    return (
      <View>
         <Text>Email:{this.props.navigation.getParam('email')}</Text>
         <Button onPress={() => this.props.navigation.goBack()} title="Voltar" />
      </View>
    );
  }
}

