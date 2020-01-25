import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screen/home';
import TarefaEdicaoScreen from '../screen/tarefa-edicao';

/** Navegação em formato de pilha para a listagem e edição de tarefa */
export default createStackNavigator({
    home: {
        screen: HomeScreen,
        navigationOptions: { headerShown: false}
    },
    tarefaEdicao: {
        screen: TarefaEdicaoScreen,
        navigationOptions: { headerShown: false }
    }
})