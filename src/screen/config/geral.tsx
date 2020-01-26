import * as React from 'react';
import { View, StyleSheet, Text, ToastAndroid, Button } from 'react-native';
import { Toolbar } from '../../components/toolbar';
import * as firebase from 'firebase';
import { Input } from 'react-native-elements';

export interface AppProps { 
    navigation:any;
}

export interface AppState {
  email: string;
  senha?: string;
  nome?:string;
} 

export default class ConfigGeralScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      email: firebase.auth().currentUser.displayName
    };
  }
  /** Altera os dados da conta */
  alterarPerfil() {
    console.log(this.state.nome);
    firebase.auth().currentUser.updateProfile({
      displayName: this.state.nome
    }).then(() => {
      ToastAndroid.show('Nome alterado', 2000);
      this.setState({nome: firebase.auth().currentUser.displayName})
    }).catch(erro => {
      console.log(erro)
      ToastAndroid.show('Nao foi possível realizar a ação', 2000);
    })
    
  }

  /** Altera a senha */
  alterarSenha() {
    console.log(this.state.senha);
    
    firebase.auth().currentUser.updatePassword(this.state.senha)
    .then(() => {
      ToastAndroid.show('Senha alterada', 2000);
    })
    .catch(erro => {
      console.log(erro)
      ToastAndroid.show('Nao foi possível realizar a ação', 2000);
    })

  }

  public render() {
    return (
      <View>
         <Toolbar titulo="Config - Geral" navigation={this.props.navigation} menu /> 
         <Text style={{textAlign:'center', fontSize:20}}>Olá {this.state.email}</Text>
         <Input label="Nome" placeholder="Digite seu novo nome" onChangeText={(nome) => this.setState({nome})} />
         <Button title="Alterar nome" onPress={() => this.alterarPerfil()} />
         <Input label="Senha" secureTextEntry placeholder="Digite sua nova senha" onChangeText={(senha) => this.setState({senha})} />
         <Button title="Alterar nome" onPress={() => this.alterarSenha()} />

      </View>
    );
  }
}

