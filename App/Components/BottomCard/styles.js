import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '@Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: Metrics.headerHeight
  },
  allHeading: {
    ...Fonts.style.h4,
    color: Colors.snow,
    marginBottom: 12,
    marginTop: 8,
    marginLeft: 8
  },
  cardContainer: {
    position: 'absolute',
    zIndex: 5
  },

  listCard: {
    elevation: 5,
    borderRadius: 16,
    backgroundColor: Colors.snow,
    overflow: 'hidden'
  }
})