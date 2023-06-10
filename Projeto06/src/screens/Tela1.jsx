import React from 'react';
import { View, Text, Button } from 'react-native';

function Tela1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela 1</Text>
        <Button title="Proxima" onPress={() => navigation.navigate('Tela2')} />
        <Button title="Anterior" onPress={() => navigation.navigate('PaginaPrincipal')} />
        <Button title="Principal" onPress={() => navigation.navigate('PaginaPrincipal')} />
    </View>
  );
}

export default Tela1;