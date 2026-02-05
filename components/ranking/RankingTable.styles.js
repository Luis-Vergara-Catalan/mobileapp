import { View, Text, FlatList } from 'react-native';
import { FRIENDS } from '../../data/ranking';
import styles from './RankingTable.styles';

const getMedalla = (index) => {
  if (index === 0) return '🥇';
  if (index === 1) return '🥈';
  if (index === 2) return '🥉';
  return `${index + 1}`;
};


export default function RankingSimpleScreen() {

  const rankingOrdenado = [...FRIENDS].sort(
    (a, b) => b.puntos - a.puntos
  );

  return (
    <View style={styles.container}>
      <View style={styles.table}>
      <View style={styles.header}>
        <Text style={styles.colPuesto}>Puesto</Text>
        <Text style={styles.colNombre}>Nombre</Text>
        <Text style={styles.colPuntos}>Puntos</Text>
      </View>

      <FlatList
        data={rankingOrdenado}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <Text style={styles.colPuesto}>{getMedalla(index)}</Text>
            <Text style={styles.colNombre}>{item.name}</Text>
            <Text style={styles.colPuntos}>{item.puntos}</Text>
          </View>
        )}
      />
      </View>
    </View>
  );
}