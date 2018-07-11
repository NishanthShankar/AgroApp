import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

// Styles
import I18n from '@I18n'
import styles from './styles'

const ActivitiesScreen = props => {
  return (
    <View pointerEvents='box-none' style={StyleSheet.absoluteFill}>
      <View
        {...props.handlers}
        style={[
          styles.cardContainer,
          { top: props.aTop, left: props.aHor, right: props.aHor }
        ]}
      >
        <Text style={styles.allHeading}>
          {I18n.t('allActivites')}
        </Text>
        <View style={styles.listCard} >
          {props.children}
        </View>
      </View>
      <View
        pointerEvents='none'
        style={{
          ...StyleSheet.absoluteFillObject,
          zIndex: 3,
          backgroundColor: props.aColor
        }}
      />
    </View>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesScreen)
