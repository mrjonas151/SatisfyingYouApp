
import { createDrawerNavigator } from "@react-navigation/drawer";
import Pesquisas from "./Pesquisas";
import CustomDrawer from "../components/CustomDrawer";
import { useSelector } from 'react-redux'


const Home = () => {

    const DrawerNavigator = createDrawerNavigator()

    const email = useSelector((state) => state.login.email)
    const password = useSelector((state) => state.login.password)

    return(
        <DrawerNavigator.Navigator 
            drawerContent={(props) => <CustomDrawer{...props} />}>
            <DrawerNavigator.Screen name="Pesquisas" component={Pesquisas} 
            options={{title:'', headerStyle:{backgroundColor: '#2B1D62'}, 
            headerTintColor: 'white'}} initialRouteName={null}
            />
        </DrawerNavigator.Navigator>
    )
}



export default Home;

