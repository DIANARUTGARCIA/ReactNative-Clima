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
  const [bgcolor, guardarBgcolor] = useState('#B9E1FF');

  const {ciudad, pais} = busqueda;

  useEffect(() => {
    const consultarClima = async () => {
      if (consultar) {
        const appId = 'bf240c930cbd36f2a51624ef0ac9c7e6';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
                    console.log(url)
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          guardarResultado(resultado);
          guardarConsultar(false);

          const kelvin = 273.15;
          const {main} = resultado;
          const actual = main.temp - kelvin;

          if (actual < 10) {
            guardarBgcolor('rgb( 105, 108, 149 )');
          } else if (actual >= 10 && actual < 25) {
            guardarBgcolor('rgb(71, 149, 212)');
          } else {
            guardarBgcolor('rgb( 178, 28, 61)');
          }
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

  const bgColorApp = {
    backgroundColor: bgcolor,
  };
  return (
    <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
      <View style={[styles.app, bgColorApp]}>
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
