import React from 'react';
import { View, Text, Button } from 'react-native';

function Tela5({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela 5</Text>
        <Button title="Proxima" onPress={() => navigation.navigate('Tela6')} />
        <Button title="Anterior" onPress={() => navigation.navigate('Tela4')} />
        <Button title="Principal" onPress={() => navigation.navigate('PaginaPrincipal')} />
    </View>
  );
}

export default Tela5;