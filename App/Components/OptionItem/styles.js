import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '@Themes/'

const optionWidth =
  (Metrics.screenWidth - 88 - Metrics.actionCardMargin * 2) / 3

export default StyleSheet.create({
  option: {
    height: 96,
    width: 96,
    borderRadius: 48,
    backgroundColor: Colors.background
  },
  optionImage: {
    width: optionWidth,
    margin: 12,
    marginBottom: 0,
    height: optionWidth,
    borderRadius: optionWidth / 2,
    backgroundColor: 'blue'
  },
  optionLabel: {
    ...Fonts.style.h3,
    marginTop: 12
  },
  optionHolder: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 0,
    minWidth: 108
  }
})