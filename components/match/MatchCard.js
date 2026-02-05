import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './matchCard.styles';


export default function MatchCard({ match, navigation }) {
  const { home, away, resultHome, resultVisit } = match;

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Detalle', { match })}>
      

      <View style={styles.team}>
        <Ionicons name="football-outline" size={32} color="#1E88E5" />
        <Text style={styles.teamText}>{home}</Text>
      </View>

      
      <Text style={styles.result}>{resultHome}</Text>

      <Text style={styles.vs}>VS</Text>

      <Text style={styles.result}>{resultVisit}</Text>

      <View style={styles.team}>
        <Ionicons name="football-outline" size={32} color="#E53935" />
        <Text style={styles.teamText}>{away}</Text>
      </View>
    </TouchableOpacity>
  );
}
