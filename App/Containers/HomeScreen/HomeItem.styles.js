import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 4,
    paddingVertical: 16
  },
  card: {
    flex: 1,
    borderRadius: Metrics.borderRadius,
    marginHorizontal: Metrics.marginHorizontal,
    overflow: 'hidden',
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    paddingLeft: 0
  },
  icon: {
    lineHeight: 36
  },
  iconContainer: {
    height: 72,
    width: 72,
    borderRadius: 36,
    marginTop: 9,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginHorizontal: Metrics.marginHorizontal
  }
})
