import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./src/components/HomeScreen";
import App1 from "./src/components/Content";
import App2 from "./src/components/RawData";

const Stack = createNativeStackNavigator();



function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Polling_API_App" component={Home}
          options={{
            headerStyle: {
            backgroundColor: '#4682b4',
            
            },
            headerTintColor: '#dcdcdc',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }}/>
        <Stack.Screen name="Content" component={App1}
          options={{
            title: 'Home',
            headerStyle: {
            backgroundColor: '#4682b4',

            },
            headerTintColor: '#dcdcdc',
            headerTitleStyle: {
            fontWeight: 'bold',
            
            },
        }} />
        <Stack.Screen name="RawData" component={App2}
          options={{
            title: 'Raw JSON',
            headerStyle: {
            backgroundColor: '#4682b4',

            },
            headerTintColor: '#dcdcdc',
            headerTitleStyle: {
            fontWeight: 'bold',
            
            },
        }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;