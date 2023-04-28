import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Formulario from './components/Formulario';

function App() {
  return (
    <View style={styles.app}>
      <View style={styles.contenido}>
        <Formulario />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {},
  contenido: {},
});

export default App;
