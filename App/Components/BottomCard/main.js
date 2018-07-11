import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import I18n from '@I18n'
import styles from './styles'
import { Touchable } from '@Components'

const ActivitiesScreen = props => {
  return (
    <View pointerEvents='box-none' style={StyleSheet.absoluteFill}>
      <View
        pointerEvents='none'
        style={{
          ...StyleSheet.absoluteFillObject,
          zIndex: 3,
          backgroundColor: props.aColor
        }}
      />
      <View
        {...props.handlers}
        style={[
          styles.cardContainer,
          { top: props.aTop, left: props.aHor, right: props.aHor, bottom: 0 }
        ]}
      >
        <Text style={styles.allHeading}>
          {I18n.t('allActivites')}
        </Text>
        <ScrollView style={{flex: 1}} scrollEnabled={props.scroll} >
          <Touchable onPress={props.onOpen} style={styles.listCard}>
            {props.children}
          </Touchable>
        </ScrollView>
      </View>
    </View>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesScreen)
