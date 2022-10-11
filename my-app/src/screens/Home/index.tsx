import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Jesus</Text>
      <Text style={styles.eventDate}>Meu amor maior</Text>
      <StatusBar style="auto" />
    </View>
  );
}
