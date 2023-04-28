import React from 'react';
import {TextInput, View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Formulario = () => {
  return (
    <>
      <View style={styles.formulario}>
        <View>
          <TextInput placeholder="Ciudad" placeholderTextColor={'#666'} />
          <View>
            <Picker>
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
          <TouchableWithoutFeedback>
            <View>
                <Text>Buscar Clima </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formulario: {
    marginTop: 100,
  },
});
export default Formulario;
