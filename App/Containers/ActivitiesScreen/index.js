import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

// Styles
import { Colors, Metrics, Fonts } from '@Themes'
import { ActionCard } from '@Components'
import I18n from '@I18n'

class ActivitiesScreen extends Component {
  render () {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.background,
          paddingTop: Metrics.headerHeight
        }}
      >
        <ActionCard />
        <Text
          style={[
            Fonts.style.h4,
            { color: 'white', marginBottom: 54, marginTop: 12, marginLeft: 40 }
          ]}
        >
          {I18n.t('allActivites')}
        </Text>
        <View
          style={{
            position: 'absolute',
            top: Metrics.screenHeight - Metrics.navBarHeight - 44,
            left: 24,
            right: 24,
            elevation: 3,
            borderRadius: 16,
            height: 500,
            backgroundColor: 'white'
          }}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesScreen)
