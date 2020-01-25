import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface AppProps { }

export interface AppState { }

export default class AppComponent extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View style={styles.container}>
         <Text>Tela de Configurações - Informações</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    }
});