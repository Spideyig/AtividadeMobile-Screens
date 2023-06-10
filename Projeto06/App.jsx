import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tela1 from './src/screens/Tela1';
import Tela2 from './src/screens/Tela2';
import Tela3 from './src/screens/Tela3';
import Tela4 from './src/screens/Tela4';
import Tela5 from './src/screens/Tela5';
import Tela6 from './src/screens/Tela6';
import Tela7 from './src/screens/Tela7';
import PaginaPrincipal from './src/screens/PaginaPrincipal';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PaginaPrincipal" component={PaginaPrincipal} />
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
        <Stack.Screen name="Tela3" component={Tela3} />
        <Stack.Screen name="Tela4" component={Tela4} />
        <Stack.Screen name="Tela5" component={Tela5} />
        <Stack.Screen name="Tela6" component={Tela6} />
        <Stack.Screen name="Tela7" component={Tela7} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;