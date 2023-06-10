import React from 'react';
import { View, Text, Button } from 'react-native';

function Tela3({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela 3</Text>
        <Button title="Proxima" onPress={() => navigation.navigate('Tela4')} />
        <Button title="Anterior" onPress={() => navigation.navigate('Tela2')} />
        <Button title="Principal" onPress={() => navigation.navigate('PaginaPrincipal')} />
    </View>
  );
}

export default Tela3;