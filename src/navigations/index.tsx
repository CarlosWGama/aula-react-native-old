import { createAppContainer, createSwitchNavigator  } from 'react-navigation'
import { createStackNavigator  } from 'react-navigation-stack'
import HomeScreen from '../screen/home';
import LoginScreen from '../screen/login';

const navigation = createSwitchNavigator({
    login: LoginScreen, home: HomeScreen
}, { initialRouteName: 'login'})

export default createAppContainer(navigation);
