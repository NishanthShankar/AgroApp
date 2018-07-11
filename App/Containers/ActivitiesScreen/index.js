import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

// Styles
import { ActionCard, BottomCard } from '@Components'
// import I18n from '@I18n'
import styles from './styles'

const ActivitiesScreen = props => {
  return (
    <View style={styles.container}>
      <ActionCard />
      <View style={{height: 96}}></View>
      <BottomCard >
        <View style={{flex: 1, padding: 24, backgroundColor: 'pink'}}>
          <Text>JELLO</Text>
          <Text>JELLO</Text>
          <Text>JELLO</Text>
          <Text>JELLO</Text>
          <Text>JELLO</Text>
        </View>
        
      </BottomCard >
      
      {/* <Text style={styles.allHeading}>
        {I18n.t('allActivites')}
      </Text>
      <View
        {...props.handlers}
        style={[
          styles.listCard,
          { top: props.aTop, left: props.aHor, right: props.aHor }
        ]}
      />
      <View pointerEvents='none' style={{
        ...StyleSheet.absoluteFillObject,
        zIndex: 3,
        backgroundColor: props.aColor
      }} /> */}
    </View>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesScreen)
