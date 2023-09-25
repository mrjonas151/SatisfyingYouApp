import { View, Image, Text} from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props) => {
    return (
        //para caso os elementos drawer ultrapassem a tela, ele pode ser scrollavel
        <DrawerContentScrollView {...props} > 
            <View>
                <Image style = { { height: 100, width: 100, alignSelf: 'center'}} source={{uri: "https://www.imagensempng.com.br/wp-content/uploads/2021/09/Icone-pessoa-Png-1024x1024.png"}}/>
                <Text style = { { fontSize:12, color: 'blue', alignSelf: 'center' } }>teste@gmail.com</Text>
            </View>

            <DrawerItemList {...props} />
            <DrawerItem labelStyle = {{color: 'brown', fontFamily: "AveriaLibre-Regular" , fontSize: 20}} label="Sair" onPress={() => {props.navigation.popToTop()}} />
        </DrawerContentScrollView>
    )
}

export default CustomDrawer;