import React, { Component } from 'react'
import { View, Text, Animated, BackHandler } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

// Styles
import styles from './styles.js'
import { Colors, Fonts } from '@Themes'

import HomeItem from './HomeItem'
import HomeItemAnim from './HomeItemAnimated'

const actionMap = [
  { id: 'activities', label: 'Activities', icon: 'note' },
  { id: 'transactions', label: 'Money', icon: 'briefcase', reverse: true },
  { id: 'people', label: 'People', icon: 'people' }
]
class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      top: new Animated.Value(500)
    }
  }

  layout = {}

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBack)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBack)
  }

  onChoose = id => () => {
    this.state.top.setValue(this.layout[id].top)
    this.currentId = id
    this.setState({ show: true, anySelected: true }, () =>
      this.setState({ selected: id }, this.animate(0))
    )
  }

  onBack = () => {
    const top = this.layout[this.currentId].top
    this.setState(
      { anySelected: false },
      this.animate(top, () => {
        this.setState({ selected: null, show: null })
      })
    )
  }

  animate = (toValue, callback) => _ =>
    Animated.timing(this.state.top, { toValue }).start(callback)

  onLayout = (id, index) => () => {
    this.refs[id] &&
      this.refs[id].measure((_, __, w, h, left, top) => {
        this.layout[index] = {
          top,
          left,
          width: w,
          height: h
        }
      })
  }

  renderHomeItem = (data, i) => (
    <View
      key={data.id}
      ref={data.id}
      style={{ flex: 1 }}
      onLayout={this.onLayout(data.id, i)}
      collapsable
    >
      <HomeItem {...data} onPress={this.onChoose(i)} />
    </View>
  )

  renderAnimator = () => {
    const { selected, top } = this.state
    const style = this.layout[selected]
    if (this.state.show == null) return null
    return (
      <Animated.View style={[style, styles.animator, { top }]}>
        <HomeItemAnim
          {...actionMap[selected]}
          selected={this.state.anySelected}
          onBack={this.onBack}
        />
      </Animated.View>
    )
  }

  renderMainContent = () => {
    if (this.state.selected != null) return null
    return (
      <View style={{ flex: 1 }}>
        <View key='logo' style={styles.logo}>
          <View style={styles.logoContainer} />
          <Text style={[Fonts.style.h1, styles.label]}> Agro </Text>
        </View>
        <View style={{ flex: 1, marginBottom: 24 }}>
          {actionMap.map(this.renderHomeItem)}
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

  render () {
    return (
      <View key='container' style={styles.container}>
        {this.renderMainContent()}
        {this.renderAnimator()}
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
