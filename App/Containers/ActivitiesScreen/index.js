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
      <View style={{ height: 96 }} />
      <BottomCard>
        <View style={{ flex: 1, padding: 24 }}>
          <Text>JELLO</Text>
          <Text>JELLO</Text>
          <Text>JELLO</Text>
          <Text>JELLO</Text>
        </View>
      </BottomCard>
    </View>
  )
}
const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesScreen)
