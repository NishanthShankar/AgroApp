import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    marginVertical: Metrics.marginHorizontal,
    paddingHorizontal: 4,
    alignItems: 'center'
  },
  card: {
    flex: 1,
    height: 104,
    borderRadius: Metrics.borderRadius,
    marginHorizontal: Metrics.marginHorizontal,
    backgroundColor: Colors.snow,
    elevation: 4,
    overflow: 'hidden'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  iconContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
    paddingLeft: 2,
    paddingBottom: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: Metrics.marginHorizontal
  }
})
