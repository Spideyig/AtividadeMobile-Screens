import React from 'react';
import { View, Text, Button } from 'react-native';

function Tela6({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela 6</Text>
        <Button title="Proxima" onPress={() => navigation.navigate('Tela7')} />
        <Button title="Anterior" onPress={() => navigation.navigate('Tela5')} />
        <Button title="Principal" onPress={() => navigation.navigate('PaginaPrincipal')} />
    </View>
  );
}

export default Tela6;