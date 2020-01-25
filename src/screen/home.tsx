import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Toolbar } from '../components/toolbar';
import { Fab } from '../components/fab';

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
      <View style={styles.container}>
          <Toolbar titulo="Home" navigation={this.props.navigation} menu={true} />
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
  