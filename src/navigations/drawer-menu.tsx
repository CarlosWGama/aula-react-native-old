import React from 'react';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import LoginScreen from '../screen/login';
import TarefaNavigation from './tarefa'
import ConfigNavigation from './configuracoes'
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';

export default createDrawerNavigator({
    home: {
        screen: TarefaNavigation,
        navigationOptions: {
            title: 'Home',
            drawerIcon: <Icon name="home"/>
        }
    },
    config: {
        screen: ConfigNavigation, 
        navigationOptions: {
            title: 'Configuração',
            drawerIcon: <Icon name="settings"/> 
        }
    },
    login: {
        screen: LoginScreen, 
        navigationOptions: {
            title: 'Sair',
            drawerLockMode: 'locked-closed',
            drawerIcon: <Icon name="exit-to-app"/> 
        }
    }
}, {
    contentComponent: (props) => (
        <View style={{marginTop:20}}>
	        <Text style={{marginLeft:15}}>Bem Vindo usuário</Text>
	        <DrawerItems {...props} />
	    </View>
    )
});




