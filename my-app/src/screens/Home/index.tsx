import React from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import Participant from '../../components/Participant';

import { styles } from './styles';

export default function Home() {

  const members = [
    'Nathan Ferraz',
    'Mariane Ferraz',
    'Vinícius Ítalo',
    'Beatriz Barbara',
    'Marcelo Moraes',
    'Karina Moraes',
    'Andréa Santos',
    'Rafael Nicácio',
    'Larissa Nicácio'
  ]

  function handleParticipantAdd() {
    console.log('Adicionou')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover membro', `Deseja realmente remover ${name}?`, [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      {
        text: 'Confirmar',
        onPress: () => Alert.alert(`${name} removido com sucesso`)
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Célula 17</Text>
      <Text style={styles.eventDate}>Sábado 16 de outubro de 2022</Text>
      <View style={styles.form}>
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

      <FlatList
        data={members}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Convide pessoas para a célula
          </Text>
        )}
      />

    </View>
  );
}
