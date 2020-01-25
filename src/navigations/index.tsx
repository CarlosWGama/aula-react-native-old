import { createAppContainer, createSwitchNavigator  } from 'react-navigation'
import DrawerMenu from './drawer-menu';
import LoginScreen from '../screen/login';

const navigation = createSwitchNavigator({
    login: LoginScreen, home: DrawerMenu 
}, { initialRouteName: 'home'})

export default createAppContainer(navigation);
