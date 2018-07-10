import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

// Styles
import { Colors } from '@Themes'

class ActivitiesScreen extends Component {
  render () {
    return <View style={{ flex: 1, backgroundColor: Colors.background }} />
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesScreen)
