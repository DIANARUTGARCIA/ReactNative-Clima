import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Animated,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {
  const {pais, ciudad} = busqueda;

  const consultarClima = () => {
    if (pais.trim() === '' || ciudad.trim() === '') {
      mostrarAlerta();
      return;
    }

    // consultar la api
    guardarConsultar(true);
  };

  const mostrarAlerta = () => {
    Alert.alert('Error', 'Todos los campos son obligatorios', [
      {text: 'Entendido'},
    ]);
  };
  const [animacionboton] = useState(new Animated.Value(1));

  const animacionEntrada = () => {
    Animated.spring(animacionboton, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };

  const animacionSalida = () => {
    Animated.spring(animacionboton, {
      toValue: 1,
      friction: 4,
      tension: 30,
      useNativeDriver: true,
    }).start();
  };

  const estiloAnimacion = {
    transform: [{scale: animacionboton}],
  };

  return (
    <>
      <View style={styles.formulario}>
        <View>
          <TextInput
            value={ciudad}
            style={styles.input}
            onChangeText={ciudad => guardarBusqueda({...busqueda, ciudad})}
            placeholder="Ciudad"
            placeholderTextColor={'#666'}
          />
          <View>
            <Picker
              selectedValue={pais}
              onValueChange={pais => guardarBusqueda({...busqueda, pais})}
              style={{height: 115, backgroundColor: '#fff', borderRadius: 7}}
            >
              <Picker.Item label="-- Seleccione un país --" value="" />
              <Picker.Item label="Estados Unidos" value="US" />
              <Picker.Item label="Honduras" value="HN" />
              <Picker.Item label="México" value="MX" />
              <Picker.Item label="Argentina" value="AR" />
              <Picker.Item label="Colombia" value="CO" />
              <Picker.Item label="Costa Rica" value="CR" />
              <Picker.Item label="España" value="ES" />
              <Picker.Item label="Perú" value="PE" />
            </Picker>
          </View>
          <TouchableWithoutFeedback
            onPressIn={() => animacionEntrada()}
            onPressOut={() => animacionSalida()}
            onPress={() => consultarClima()}
          >
            <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
              <Text style={styles.textoBuscar}>Buscar Clima </Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formulario: {},
  input: {
    padding: 10,
    height: 50,
    backgroundColor: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    borderRadius: 7,
  },
  btnBuscar: {
    marginTop: 50,
    backgroundColor: '#000',
    justifyContent: 'center',
    borderRadius: 50,
  },
  textoBuscar: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
  },
});
export default Formulario;
