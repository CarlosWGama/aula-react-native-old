import React from 'react';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import LoginScreen from '../screen/login';
import TarefaNavigation from './tarefa'
import ConfigNavigation from './configuracoes'
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';

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
    }
}, {
    contentComponent: (props) => (
        <View style={{marginTop:25}}>
	        <Text style={{marginLeft:15}}>Bem Vindo {firebase.auth().currentUser.email}</Text>
	        <DrawerItems {...props} />
            <TouchableOpacity onPress={() => {
                console.log('Saiu');
                firebase.auth().signOut();
                props.navigation.navigate('login');
            }}>
                <View style={{flexDirection:'row', marginLeft:15}}>
                    <Icon name="exit-to-app"/> 
                    <Text style={{marginLeft:30}}>Sair</Text>
                </View>
            </TouchableOpacity>
	    </View>
    )
});




