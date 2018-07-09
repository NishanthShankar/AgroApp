import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  logoContainer: {
    height: 88,
    width: 88,
    borderRadius: 44,
    backgroundColor: Colors.snow
  },
  label: {
    marginTop: 4,
    color: Colors.snow
  },
  topIcon: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
