import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  card: {
    width: 260,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    paddingVertical: 18,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 4,
    maxHeight: 100,
  },
  team: {
    alignItems: 'center',
    width: 60,
  },
  teamText: {
    marginTop: 6,
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  vs: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#777',
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
