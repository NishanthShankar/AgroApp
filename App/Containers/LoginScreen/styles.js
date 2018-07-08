import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  logo: {
    height: 156,
    width: 156,
    borderRadius: 88,
    backgroundColor: 'gray',
    marginVertical: 88
  },
  input: {
    width: 240,
    backgroundColor: 'gray',
    borderRadius: 28,
    height: 56,
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 20
  },
  button: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: 'gray',
    marginVertical: 56
  }
})
