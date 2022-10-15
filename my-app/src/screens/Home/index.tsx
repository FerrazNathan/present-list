import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import Participant from '../../components/Participant';

import { styles } from './styles';

export default function Home() {

  const [member, setMember] = useState<string[]>([])
  const [memberName, setMemberName] = useState<string>('')

  function handleParticipantAdd() {
    if (member.includes(memberName)) {
      return Alert.alert('Membro já existe', 'Já existe um membro cadastrado com esse nome')
    }
    setMember(prev => [...prev, memberName])
    setMemberName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover membro', `Deseja realmente remover ${name}?`, [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      {
        text: 'Confirmar',
        onPress: () => setMember(prev => prev.filter(member => member !== name))
        // onPress: () => Alert.alert(`${name} removido com sucesso`)
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Célula 17</Text>
      <Text style={styles.eventDate}>Sábado 15 de outubro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do membro ou visitante'
          placeholderTextColor='#6B6B6B'
          onChangeText={setMemberName}
          value={memberName}
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
        data={member}
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
