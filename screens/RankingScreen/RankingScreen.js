import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import {DATA} from '../../data/ranking';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './RankingScreen.styles';

export default function RankingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ranking</Text>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text style={styles.position}>{index + 1}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.points}>{item.points} pts</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

