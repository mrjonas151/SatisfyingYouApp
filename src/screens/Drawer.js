import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./Login";
import Home from "./Home";
import CustomDrawer from "../components/CustomDrawer";

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
    return(
        <DrawerNavigator.Navigator 
            screenOptions={{ drawerActiveTintColor: 'red', drawerLabelStyle: {color: 'blue'}} }
            drawerContent={(props) => <CustomDrawer {...props} />}
        >

            <DrawerNavigator.Screen name="Home" component={Home}/>
        </DrawerNavigator.Navigator>
    );
}

export default Drawer;