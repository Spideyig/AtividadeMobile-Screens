import React from 'react';
import { View, Text, Button } from 'react-native';

function Tela2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela 2</Text>
        <Button title="Proxima" onPress={() => navigation.navigate('Tela3')} />
        <Button title="Anterior" onPress={() => navigation.navigate('Tela1')} />
        <Button title="Principal" onPress={() => navigation.navigate('PaginaPrincipal')} />
    </View>
  );
}

export default Tela2;