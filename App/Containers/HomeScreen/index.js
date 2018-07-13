import React, { Component } from 'react'
import { View, BackHandler, Text } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

// Styles
import styles from './styles.js'
import { Colors, Fonts } from '@Themes'

import HomeItem from './HomeItem'

import HeaderActions from '@Redux/HeaderRedux'

const actionObject = {
  activities: { id: 'activities', label: 'Activities', icon: 'note' },
  transactions: {
    id: 'transactions',
    label: 'Transactions',
    icon: 'briefcase',
    reverse: true
  },
  people: { id: 'people', label: 'People', icon: 'people' }
}
class HomeScreen extends Component {
  constructor (props) {
    super(props)
    console.disableYellowBox = true
  }

  layout = {}

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBack)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBack)
  }

  onChoose = id => () => {
    this.props.updateSelected(id)
    this.props.navigation.navigate('ActivitiesScreen')
  }

  onBack = () => this.props.hideHeader()

  onLayout = (id) => () => {
    this.refs[id] &&
      this.refs[id].measure((_, __, w, h, left, top) => {
        const layout = {
          top,
          left,
          width: w,
          height: h
        }
        this.layout[id] = layout
        this.props.updateLayout(id, layout)
      })
  }

  renderHomeItem = (data, id) => (
    <View
      key={id}
      ref={id}
      style={{ flex: 1 }}
      onLayout={this.onLayout(id)}
      collapsable
    >
      <HomeItem {...data} onPress={this.onChoose(id)} />
    </View>
  )

  render () {
    return (
      <View key='container' style={styles.container}>
        <View key='logo' style={styles.logo}>
          <View style={styles.logoContainer} />
          {/* <Text style={[Fonts.style.h1, styles.label]}> Agro </Text> */}
        </View>
        <View style={{ flex: 1, marginBottom: 24 }}>
          {_.map(actionObject, this.renderHomeItem)}
        </View>
        <View style={styles.topIcon}>
          <Icon name='menu' size={28} color={Colors.snow} />
        </View>
        <View style={[styles.topIcon, { right: 0 }]}>
          <Icon name='bell' size={28} color={Colors.snow} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  updateLayout: (id, layout) =>
    dispatch(HeaderActions.headerUpdateLayout(id, layout)),
  updateSelected: (id) =>
    dispatch(HeaderActions.headerUpdateSelected(id)),
  hideHeader: () => dispatch(HeaderActions.headerHide())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
