import React, {useEffect, useState} from 'react';

import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Alert,
} from 'react-native';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

function App() {
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: '',
  });
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const {ciudad, pais} = consultar;

  useEffect(() => {
    const consultarClima = async () => {
      if (consultar) {
        const appId = 'bf240c930cbd36f2a51624ef0ac9c7e6';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid={appId}`;
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          guardarResultado(resultado);
          guardarConsultar(false);
        } catch (error) {
          mostrarAlerta();
        }
      }
    };
    consultarClima();
  }, [consultar]);

  const mostrarAlerta = () => {
    Alert.alert('Error', 'No hay resultados,intenta con otra ciudad', [
      {text: 'Ok'},
    ]);
  };
  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
      <View style={styles.app}>
        <View style={styles.contenido}>
          <Clima resultado={resultado} />
          <Formulario
            busqueda={busqueda}
            guardarBusqueda={guardarBusqueda}
            guardarConsultar={guardarConsultar}
          />
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
