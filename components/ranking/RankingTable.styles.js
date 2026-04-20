import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF1F4',
    padding: 15,
  },

  table: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 10,

    // sombra
    elevation: 3,
  },

  header: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },

  row: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },

  colPuesto: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  colNombre: {
    flex: 3,
    textAlign: 'left',
    paddingLeft: 10,
  },

  colPuntos: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
