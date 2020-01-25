import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Input, Button } from 'react-native-elements';
import InputRound from './../components/input-round';

export interface AppProps {
    navigation: any;
}

//Interface que define quais valores o state pode receber
export interface AppState {
    email:string;
    senha:string;
  }
export default class LoginScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {email:'', senha:''}
  }

  /**Função responsável por fazer o login do usuário */
  public logar() {
    if(this.state.email.trim() == 'teste@teste.com' && this.state.senha == '123456')
        this.props.navigation.navigate('home', {email: this.state.email});
    else 
      console.log ('Email ou senha incorreta!');
  }

  public render() {

    return (<ImageBackground source={require('./../../assets/imgs/background.png')}
                style={styles.background}>

            <View style={styles.container}>
                <Text style={styles.logo}>APP</Text>

                <InputRound placeholder="Digite seu email" icone="person" onChangeText={(email) => this.setState({email})} />
                <InputRound placeholder="Digite sua senha" icone="lock" onChangeText={(senha) => this.setState({senha})} isPassword/>

                <Button title="Logar" onPress={() => this.logar()}  buttonStyle={{borderRadius:30}} raised={true} />

                <Text style={styles.cadastrar}>Não possui conta? Clique aqui para se cadastrar</Text>

            </View>

            </ImageBackground>)       
    }
}
    
const styles = StyleSheet.create({
    background: { width: '100%', height: '100%'},
    container: {
        flex:1,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    btnRound: { borderRadius:30 },
    logo: { color: 'white', fontSize: 50, textAlign: 'center' },
    cadastrar: {
        color: 'white',
        fontSize: 20,
        textDecorationLine: 'underline',
        margin: 30,
        textAlign: 'center'
    }
});
    