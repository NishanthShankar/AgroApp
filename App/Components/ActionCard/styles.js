import { StyleSheet } from 'react-native'
import { Colors } from '@Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snow,
    zIndex: 2,
    margin: 24,
    borderRadius: 16,
    overflow: 'hidden'
  },
  headerContainer: {
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginHorizontal: 16
  },
  buttonContainer: {
    height: 56,
    backgroundColor: Colors.primary,
    borderRadius: 16,
    margin: 12
  }
})
