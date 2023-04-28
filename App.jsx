import React from 'react';

import {Keyboard, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import Formulario from './components/Formulario';

function App() {

  const ocultarTeclado =()=>{
      Keyboard.dismiss();
  }
  return (
    <TouchableWithoutFeedback onPress={()=> ocultarTeclado()}>
    <View style={styles.app}>
      <View style={styles.contenido}>
        <Formulario />
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#BCE5FF',
    justifyContent: 'center',
  },
  contenido: {
    marginHorizontal: '3%',
  },
});

export default App;
