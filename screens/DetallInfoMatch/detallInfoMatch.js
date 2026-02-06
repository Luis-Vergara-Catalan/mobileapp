import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './detallInfoMatch.styles';


export default function DetallInfoMatch({ route, navigation }) {
  const { match } = route.params || {};

  return (
    <View style={styles.container}>
      {/* Título del partido */}
      <Text style={styles.title}>
        {match?.home} VS {match?.away}
      </Text>

      <Text style={styles.subtitle}>Detalle del partido</Text>

      {/* Botón volver */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Inicio')}
      >
        <Ionicons name="arrow-back-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>Volver a Inicio</Text>
      </TouchableOpacity>
    </View>
  );
}
