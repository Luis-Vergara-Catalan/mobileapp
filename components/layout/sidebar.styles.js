import {StyleSheet} from 'react-native';

export default StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
  },
  ruedita: {
    position: 'absolute',
    bottom: 35,
    left: 30,
    right: 30,
    flexDirection: 'row',
  }
})