import React from 'react';
import { View, FlatList } from 'react-native';
import RankingTable from '../../components/friends/RankingTable';
import MatchCard from '../../components/match/MatchCard';
import { MATCHES } from '../../data/matches';
import styles from './homeScreen.styles';


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <RankingTable />

      <FlatList
        data={MATCHES}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MatchCard match={item} navigation={navigation} />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.matchesList}
      />
    </View>
  );
}
