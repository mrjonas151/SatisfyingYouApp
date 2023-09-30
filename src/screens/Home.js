import { View, Text } from "react-native"
import { createDrawerNavigator } from "@react-navigation/drawer";
import Pesquisas from "./Pesquisas";
import CustomDrawer from "../components/CustomDrawer";

const DrawerNavigator = createDrawerNavigator()

const Home = () => {
    return(
        <DrawerNavigator.Navigator 
        drawerContent={(props) => <CustomDrawer{...props} />}>

            <DrawerNavigator.Screen name="HOME" component={Pesquisas}/>
        </DrawerNavigator.Navigator>
    )
}


export default Home;

