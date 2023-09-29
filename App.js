import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import CriarConta from "./src/screens/CriarConta";
import RecuperarSenha from "./src/screens/RecuperarSenha"
import Home from "./src/screens/Home";
import 'react-native-gesture-handler';
import AgradecimentoParticipacao from "./src/screens/AgradecimentoParticipacao";

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerTintColor: 'white', headerStyle: {backgroundColor: '#2B1D62', height: 80}, headerTitleStyle: { fontSize: 28, fontFamily: "AveriaLibre-Regular" }}}>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="CriarConta" component={CriarConta} options={{ title: 'Nova Conta' }}/>
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{ title: 'Recuperação de senha' }} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:true}} />
        <Stack.Screen name="AgradecimentoParticipacao" component={AgradecimentoParticipacao} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;