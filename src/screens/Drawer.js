import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./Login";
import Home from "./Home";
import CustomDrawer from "../components/CustomDrawer";

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
    return(
        <DrawerNavigator.Navigator 
            screenOptions={{ drawerActiveTintColor: '#2B1D62', drawerLabelStyle: {color: 'white', fontFamily: "AveriaLibre-Regular", fontSize: 22, marginLeft: 10}} }
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <DrawerNavigator.Screen name="Pesquisas" component={Home}/>
        </DrawerNavigator.Navigator>
    );
}

export default Drawer;