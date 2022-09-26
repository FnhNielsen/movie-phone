import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import 'react-native-gesture-handler';
import Home from './components/Home.js'
import MovieInfo from "./components/MovieInfo";

const StackNav = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StackNav.Navigator>
        <StackNav.Screen name="Home" component={Home}/>
        <StackNav.Screen name="Info" component={MovieInfo}/>
      </StackNav.Navigator>
    </NavigationContainer>
  );
}