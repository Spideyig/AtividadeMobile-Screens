import React from 'react';
import { View, Text, Button } from 'react-native';

function Screen7({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela 7</Text>
        <Button title="Proxima" onPress={() => navigation.navigate('PaginaPrincipal')} />
        <Button title="Anterior" onPress={() => navigation.navigate('Tela6')} />
        <Button title="Principal" onPress={() => navigation.navigate('PaginaPrincipal')} />
    </View>
  );
}

export default Screen7;