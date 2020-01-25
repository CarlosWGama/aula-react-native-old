import * as React from 'react';
import { Header, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface AppProps {
    titulo:string; //Titulo a ser exibido
    navigation?:any; //Controlador da navegação
    menu?:boolean; //Adiciona botão de abrir o Drawer Menu
    back?:boolean; //Adiciona botão de voltar
}

/**
 * Toolbar para as telas com o botão de Menu e Voltar
 * @param props 
 */
export function Toolbar (props: AppProps) {

    //destructuring
    const { navigation } = props;
    
    //Adição do icone a esquerda
    let leftComponent = null;
    if (props.menu)
        leftComponent = <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Icon name="menu" color="white"/>
                        </TouchableOpacity>
                        
    if (props.back)
        leftComponent = <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon name="arrow-back" color="white"/>
                        </TouchableOpacity>
                        
    return <Header leftComponent={leftComponent} centerComponent={{text:props.titulo, style:{color:'white'}}} containerStyle={{backgroundColor:'darkcyan'}} />;
}



