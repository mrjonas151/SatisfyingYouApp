
import { createDrawerNavigator } from "@react-navigation/drawer";
import Pesquisas from "./Pesquisas";
import CustomDrawer from "../components/CustomDrawer";


const Home = () => {

    const DrawerNavigator = createDrawerNavigator()

    return(
        <DrawerNavigator.Navigator 
            drawerContent={(props) => <CustomDrawer{...props} />}>
            <DrawerNavigator.Screen name="Home" component={Pesquisas} 
            options={{title:'', headerStyle:{backgroundColor: '#2B1D62'}, 
            headerTintColor: 'white'}} 
            />
        </DrawerNavigator.Navigator>
    )
}



export default Home;

