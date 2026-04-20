import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './DetailInfoMatch.styles';

export default function DetailInfoMatch({ route, navigation }) {
  const { match } = route.params || {};

  return (
    <View style={styles.container}>
      {match ? (
        <Text style={styles.title}>
          {match.home} VS {match.away}
        </Text>
      ) : (
        <Text style={styles.title}>Partido no disponible</Text>
      )}

      <Text style={styles.subtitle}>Detalle del partido</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
}
