import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Toolbar } from '../../components/toolbar';

export interface AppProps { 
    navigation:any;
}

export interface AppState { }

export default class AppComponent extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (<View>
                <Toolbar titulo="Informações" navigation={this.props.navigation} menu/>
                <View style={styles.container}>
                    <Text>Tela de Configurações - Informações</Text>
                </View>
            </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        justifyContent:'center',
        alignItems: 'center',
    }
});