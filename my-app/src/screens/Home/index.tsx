import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export default function Home() {

  function handleParticipantAdd() {
    console.log('Clicou')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Célula</Text>
      <Text style={styles.eventDate}>Sábado 16 de outubro de 2022</Text>
      <StatusBar style="auto" />

      <TextInput
        style={styles.input}
        placeholder='Nome do participante'
        placeholderTextColor='#6B6B6B'
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleParticipantAdd}
      >
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
}
