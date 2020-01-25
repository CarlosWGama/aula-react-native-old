import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';

export interface AppProps {}

export interface AppState {}

export default class LoginScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
        <ImageBackground source={require('./../../assets/imgs/background.png')} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.logo}>Tela de Login</Text>
            </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    background: { width: '100%', height: '100%' },
    container: {
        flex:1,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    logo: { color: 'white', fontSize: 50, textAlign:'center'}
});
