import React, { Component } from 'react'
import { View, Text, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

// Styles
import styles from './styles.js'
import { Colors, Fonts } from '@Themes'

import HomeItem from './HomeItem'

const actionMap = [
  { id: 'activities', label: 'Activities', icon: 'note' },
  { id: 'transactions', label: 'Transactions', icon: 'briefcase' },
  { id: 'people', label: 'People', icon: 'people' }
]
class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: ''
    }
  }

  onChoose = id => () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({ selected: id })
  }

  renderHomeItem = (data, i) => (
    <HomeItem
      {...data}
      key={data.id}
      reverse={!(i % 2)}
      onPress={this.onChoose(data.id)}
    />
  )

  render () {
    return (
      <View key='container' style={styles.container}>
        <View key='logo' style={{ margin: 24, alignItems: 'center' }}>
          <View style={styles.logoContainer} />
          <Text style={[Fonts.style.h1, styles.label]}> Agro </Text>
        </View>
        <View style={{flex: 1, marginBottom: 24}}>
          {actionMap.map(this.renderHomeItem)}
        </View>
        <View style={styles.topIcon}>
          <Icon name='menu' size={28} color={Colors.snow} />
        </View>
        <View style={[styles.topIcon, {right: 0}]}>
          <Icon name='bell' size={28} color={Colors.snow} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
