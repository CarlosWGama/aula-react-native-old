import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ConfigGeralScreen from '../screen/config/geral';
import ConfigInfoScreen from '../screen/config/info';
import { Icon } from 'react-native-elements';

export default createBottomTabNavigator({
    config: {
        screen:ConfigGeralScreen,
        navigationOptions: {
            title: 'Geral',
            tabBarIcon: () => <Icon name="settings"/>
        }
    },
    configInfo: {
        screen:ConfigInfoScreen,
        navigationOptions: {
            title: 'Informações',
            tabBarIcon: () => <Icon name="info"/>
        }
    }
})