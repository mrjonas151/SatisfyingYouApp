import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import CriarConta from "./src/screens/CriarConta";
import RecuperarSenha from "./src/screens/RecuperarSenha"
import Home from "./src/screens/Home";
import 'react-native-gesture-handler';
import AgradecimentoParticipacao from "./src/screens/AgradecimentoParticipacao";
import ModificarPesquisa from "./src/screens/ModificarPesquisa";
import NovaPesquisa from "./src/screens/NovaPesquisa";
import AcoesPesquisa from "./src/screens/AcoesPesquisa";
import Coleta from "./src/screens/Coleta";
import Relatorio from "./src/screens/Relatorio";
const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerTintColor: '#573FBA', headerStyle: {backgroundColor: '#2B1D62', height: 80}, headerTitleStyle: { fontSize: 28, fontFamily: "AveriaLibre-Regular", color: 'white' }}}>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="CriarConta" component={CriarConta} options={{ title: 'Nova Conta' }}/>
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{ title: 'Recuperação de senha' }} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="NovaPesquisa" component={NovaPesquisa} options={{ title: 'Nova pesquisa' }} />        
        <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa} options={{headerShown:true, title: 'Modificar Pesquisa'}} />
        <Stack.Screen name="AcoesPesquisa" component={AcoesPesquisa} options={{headerShown:true, title: 'AcoesPesquisa'}} />
        <Stack.Screen name="Coleta" component={Coleta} options={{headerShown:false, title: 'Coleta'}} />
        <Stack.Screen name="Relatorio" component={Relatorio} options={{headerShown:true, title: 'Relatorio'}} />
        <Stack.Screen name="AgradecimentoParticipacao" component={AgradecimentoParticipacao} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;