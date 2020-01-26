import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import DrawerMenu from './drawer-menu';
import LoginScreen from '../screen/login';
import * as firebase from 'firebase';
import { View } from 'react-native';

//Componente Inicial
function IndexScreen(props) {
    firebase.auth().onAuthStateChanged(user => {
       props.navigation.navigate((user ? 'home' : 'login'));
    })
    return (<View/>)
}

//Navegação inicial e básica entre login e home
const navigation = createSwitchNavigator({
    index: IndexScreen,
    login: LoginScreen,
    home: DrawerMenu //Chama a Drawer Navigation com o HomeScreen
}, {
    initialRouteName: 'index' //Campo opcional que define qual é a  tela inicial da navegação
})

export default createAppContainer(navigation);
