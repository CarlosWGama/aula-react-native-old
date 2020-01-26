import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Toolbar } from '../components/toolbar';
import { Button, Input, Image } from 'react-native-elements';
// import DatePicker from 'react-native-datepicker'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
import Tarefa from '../models/tarefa';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { TarefasProvider } from '../providers/tarefa';

export interface AppProps {
    navigation:any;
}

export interface AppState { 
    exibirCalendario: boolean;
    data:Date;
    tarefa:Tarefa;
}

/**
 * Tela responsável cadastrar e editar tarefas cadastradas pelo usuário
 */
export default class TarefaEdicaoScreen extends React.Component<AppProps, AppState> {

  private tarefaProvider = new TarefasProvider();

  constructor(props: AppProps) {
    super(props);
    const tarefa = this.props.navigation.getParam('tarefa', new Tarefa('', ''))
    this.state = { 
        exibirCalendario: false,
        data: moment(tarefa.data ? tarefa.data : new Date(), 'DD/MM/YYYY').toDate(),
        tarefa:tarefa
    };
  }

  /** Função responsável por tirar foto do Celular */
  async abrirCamera() {
    
    let permissao = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (permissao.status == 'granted') {
      //Tenho permissão de usar camera
      //launchImageLibraryAsync() para buscar da galeria
      let foto:any = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4,3],
        base64: true,
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 0.3
      });

      if (!foto.cancelled) { 
        //Altera os dados de tarefa
        let {tarefa} = this.state;
        
        // Salva a Foto como Base64 (String) 
        tarefa.imagem = 'data:image/jpeg;base64,'+foto.base64;
        
        //Salva o Caminho a Foto no Smartphone
        // tarefa.imagem = foto.uri; //Busca o caminho temporario da foto 
        
        //Opcional
        //CameraRoll.saveToCameraRoll(foto.uri); //Salva a foto na galeria

        this.setState({tarefa});
      }
    }
  }

  /** Função responsável por salvar as modificações na tarefa */
  salvar() {
    //Cadastrando
    if (!this.state.tarefa.id) 
      this.tarefaProvider.cadastrar(this.state.tarefa)
    else
      this.tarefaProvider.editar(this.state.tarefa);

    this.props.navigation.goBack();
  }
  
  /** Recupera a data do calendário e salva no estado */
  guardaData(event, date) {

    if (date != undefined) {
      let {tarefa} = this.state
      tarefa.data = moment(date).format('DD/MM/YYYY')
      this.setState({
          data:date,
          tarefa,
          exibirCalendario: false
      })
    }
  }

  public render() {
    //Define se o titulo será de Cadastro (Caso não receba ID) ou de Edição (caso receba o id de uma tarefa para editar)
    const titulo = (this.state.tarefa.id == null ? 'Cadastrar ' : 'Editar ') + "Tarefa"; 
    return (
        <View style={styles.container}>
            <Toolbar titulo={titulo} navigation={this.props.navigation} back />
            
            <View style={{padding:5}}>

              <Text>Descrição</Text>
              <TouchableOpacity onPress={() => this.setState({exibirCalendario:true})}>
                  <Input placeholder="Digite uma descrição" value={this.state.tarefa.descricao} onChangeText={(descricao) => this.setState({tarefa:{...this.state.tarefa, descricao}})}></Input>
              </TouchableOpacity>

              <Text>Data</Text>
              {/* Documentação: https://github.com/react-native-community/react-native-datetimepicker */}
              {/* Para usar o Moment use: npm install moment */}
              {/* Para usar o date use o import DateTimePicker from '@react-native-community/datetimepicker'; */}
              <TouchableOpacity onPress={() => this.setState({exibirCalendario:true})}>
                    <Input disabled value={moment(this.state.data).format('DD/MM/YYYY')}></Input>
              </TouchableOpacity>
              { this.state.exibirCalendario && <DateTimePicker value={this.state.data}
                    mode={'date'}
                    maximumDate={new Date(2030, 11, 31)}
                    minimumDate={new Date(2020, 0, 1)}
                    display="default"
                    onChange={this.guardaData.bind(this)} /> }
           
              {/* Imagem usada para tirar Foto */}
              <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={this.abrirCamera.bind(this)}>
                  <Image source={(this.state.tarefa.imagem ? {uri:this.state.tarefa.imagem} :
	      		                      require('./../../assets/imgs/camera_on.png'))} style={[styles.img]}/>
                </TouchableOpacity>
              </View>

              <Button title="Salvar" onPress={this.salvar.bind(this)} />
            </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1
  },
  img: {
    height: 300,
    width: 300
  }
});