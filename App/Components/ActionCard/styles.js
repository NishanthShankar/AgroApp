import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '@Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snow,
    zIndex: 2,
    margin: Metrics.actionCardMargin,
    borderRadius: 16
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 16,
    margin: 12
  },
  buttonText: {
    ...Fonts.style.h4,
    color: Colors.snow
  }
})
