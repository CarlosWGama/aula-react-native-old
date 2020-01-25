import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, ToastAndroid, Platform, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import InputRound from './../components/input-round';
import { AlertCustom } from '../components/alert-custom';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UsuariosProviders } from '../providers/usuarios';

export interface AppProps {
    navigation: any;
}

//Interface que define quais valores o state pode receber
export interface AppState {
    email:string;
    senha:string;
    modalEstaAberto:boolean;
    cadastro:{nome:string, email:string, senha:string};
}

export default class LoginScreen extends React.Component<AppProps, AppState> {

  private usuario = new UsuariosProviders();

  constructor(props: AppProps) {
    super(props);
    this.state = {
      email:'',
      senha:'',
      modalEstaAberto:false,
      cadastro: {
        nome: '',
        email:'',
        senha:''
      }
    }
  }

  /**Função responsável por fazer o login do usuário */
  public async logar() {
    let resposta = await this.usuario.logar(this.state.email, this.state.senha);

    if (resposta)
      this.props.navigation.navigate('home', {email: this.state.email});
    else {
      if (Platform.OS == 'android')
        ToastAndroid.show('Email ou senha incorreta', 3000)
      else
        Alert.alert('Erro', 'Email ou senha incorreta');
        //Se não informar botão, é adicionado um botão 'OK'
    }
  }


  /** Função que permite cadastrar novos usuarios */
  public async cadastrar() {
    //Fecha o Modal
    this.setState({modalEstaAberto:false});

    //Tenta cadastrar o usuário
    let resposta = await this.usuario.cadastrar(this.state.cadastro);
    if (resposta)
      ToastAndroid.show('Cadastrado com sucesso', ToastAndroid.SHORT);
    else
      ToastAndroid.show('Não foi possível cadastrar usuário', ToastAndroid.SHORT)
  }

  public render() {

    return (<ImageBackground source={require('./../../assets/imgs/background.png')}
                style={styles.background}>

            <View style={styles.container}>
                <Text style={styles.logo}>APP</Text>

                <InputRound placeholder="Digite seu email" icone="person" onChangeText={(email) => this.setState({email})} />
                <InputRound placeholder="Digite sua senha" icone="lock" onChangeText={(senha) => this.setState({senha})} isPassword/>

                <Button title="Logar" onPress={() => this.logar()}  buttonStyle={{borderRadius:30}} raised={true} />

                <TouchableOpacity onPress={()=> this.setState({modalEstaAberto:true})}>
                  <Text style={styles.cadastrar}>Não possui conta? Clique aqui para se cadastrar</Text>
                </TouchableOpacity>
            </View>

            {/* Exibe o MODAL de Cadastrar Tarefa */}
            <AlertCustom 
              titulo="Novo usuário"
              visivel={this.state.modalEstaAberto}
              onCancelar={()=> this.setState({modalEstaAberto:false})}
              onConfirmar={()=> this.cadastrar()}>
                <Text>Criar nova conta</Text>
                <Input placeholder="Digite um nome" onChangeText={(nome) => this.setState({cadastro: {...this.state.cadastro, nome}})}/>
                <Input placeholder="Digite um email" onChangeText={(email) => this.setState({cadastro: {...this.state.cadastro, email}})}/>
                <Input placeholder="Digite uma senha" secureTextEntry onChangeText={(senha) => this.setState({cadastro: {...this.state.cadastro, senha}})}/>
            </AlertCustom>

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
    