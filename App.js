import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import CriarConta from "./src/screens/CriarConta";
import RecuperarSenha from "./src/screens/RecuperarSenha"
import Home from "./src/screens/Home";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerTintColor: 'white', headerStyle: {backgroundColor: 'black'}}}>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="CriarConta" component={CriarConta} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;