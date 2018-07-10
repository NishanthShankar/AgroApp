import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 4,
    paddingVertical: 16,
    alignItems: 'center'
  },
  card: {
    flex: 1,
    borderRadius: Metrics.borderRadius,
    marginHorizontal: Metrics.marginHorizontal,
    overflow: 'hidden',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    paddingLeft: 0
  },
  icon: {
    lineHeight: 32
  },
  iconContainer: {
    height: 64,
    width: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginHorizontal: Metrics.marginHorizontal
  },
  closeIconContainer: {
    height: 64,
    width: 64,
    borderRadius: 32,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  }
})
