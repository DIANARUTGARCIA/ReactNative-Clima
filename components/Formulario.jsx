import React, { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Animated,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Formulario = () => {

 const [animacionboton] = useState(new Animated.Value(1));

 const animacionEntrada =()=>{
   Animated.spring(animacionboton,{
    toValue:.9,
     useNativeDriver: true
   }).start();
 }

 const animacionSalida =()=>{

 }
  
 const estiloAnimacion ={
    transform: [{scale:animacionboton}]
 }

  return (
    <>
      <View style={styles.formulario}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Ciudad"
            placeholderTextColor={'#666'}
          />
          <View>
            <Picker
              style={{height: 115, backgroundColor: '#fff', borderRadius: 7}}
            >
              <Picker.Item label="-Seleccione un País-" value={''} />
              <Picker.Item label="Estados Unidos" value={'US'} />
              <Picker.Item label="Mexico" value={'MX'} />
              <Picker.Item label="Argentina" value={'AR'} />
              <Picker.Item label="Colombia" value={'CO'} />
              <Picker.Item label="Costa Rica" value={'CR'} />
              <Picker.Item label="Honduras" value={'HN'} />
              <Picker.Item label="Peru" value={'PE'} />
            </Picker>
          </View>
          <TouchableWithoutFeedback
           onPress={()=>animacionEntrada()}
           onPressOut={()=>animacionSalida()}
          >
            <Animated.View style={[styles.btnBuscar,estiloAnimacion]}>
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
