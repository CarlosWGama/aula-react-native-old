import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Toolbar } from '../components/toolbar';
import { Button, Input, Image } from 'react-native-elements';
// import DatePicker from 'react-native-datepicker'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'

export interface AppProps {
    navigation:any;
}

export interface AppState { 
    exibirCalendario: boolean,
    data:Date
}

/**
 * Tela responsável cadastrar e editar tarefas cadastradas pelo usuário
 */
export default class TarefaEdicaoScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { 
        exibirCalendario: false,
        data: new Date()
    };
  }

  /** Função responsável por tirar foto do Celular */
  abrirCamera() {
  }

  /** Função responsável por salvar as modificações na tarefa */
  salvar() {
    this.props.navigation.goBack();
  }
  /** Recupera a data do calendário e salva no estado */
  guardaData(event, date) {

    if (date != undefined) {
        this.setState({
            data:date,
            exibirCalendario: false
        })
    }
  }

  public render() {
    //Define se o titulo será de Cadastro (Caso não receba ID) ou de Edição (caso receba o id de uma tarefa para editar)
    const titulo = (this.props.navigation.getParam('id', null) == null ? 'Cadastrar ' : 'Editar ') + "Tarefa"; 
    return (
        <View style={styles.container}>
            <Toolbar titulo={titulo} navigation={this.props.navigation} back />
            
            <View style={{padding:5}}>

              <Text>Descrição</Text>
              <TouchableOpacity onPress={() => this.setState({exibirCalendario:true})}>
                  <Input placeholder="Digite uma descrição" onChangeText={(descricao) => console.log(descricao)}></Input>
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
                  <Image source={require('./../../assets/imgs/camera_on.png')} style={[styles.img]}/>
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