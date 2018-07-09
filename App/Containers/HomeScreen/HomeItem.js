import React, { Component } from 'react'
import { View, Text, Animated, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import Icon from 'react-native-vector-icons/SimpleLineIcons'
import PropTypes from 'prop-types'
// Styles
import styles from './HomeItem.styles.js'
import { Colors, Fonts } from '@Themes'
import { Touchable } from '@Components'

class HomeItem extends Component {
  static propTypes = {
    reverse: PropTypes.bool,
    label: PropTypes.string,
    icon: PropTypes.string,
    id: PropTypes.string,
    onPress: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      selected: false,
      progress: new Animated.Value(0)
    }
  }

  onPress = () => {
    // Animate stuff
    const config = {toValue: 1, duration: 1000}
    Animated.timing(this.state.progress, config).start()
    this.props.onPress && this.props.onPress()
  }

  getProps = () => {
    const flex = this.state.progress.interpolate({
      inputRange: [0, 0.3, 0.6, 0.8],
      outputRange: [5, 100, 5, 0]
    })

    const bgColor = this.state.progress.interpolate({
      inputRange: [0, 0.45, 0.55],
      outputRange: ['#ffffff', '#ffffff', Colors.background],
      extrapolate: 'clamp'
    })

    const iconBg = this.state.progress.interpolate({
      inputRange: [0, 0.7, 1],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })

    const opacity = this.state.progress.interpolate({
      inputRange: [0, 0.9, 1],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })

    return { flex, bgColor, iconBg, opacity }
  }

  getDummyProps = () => {
    const dummy = this.state.progress.interpolate({
      inputRange: [0, 0.4, 1],
      outputRange: [95, 0, 0]
    })

    const dummy2 = this.state.progress.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 95]
    })

    const dummy3 = this.state.progress.interpolate({
      inputRange: [0, 0.7, 1],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp'
    })

    return { dummy, dummy2, dummy3 }
  }

  render () {
    const { id, label, reverse, icon } = this.props
    const flexDirection = reverse ? 'row-reverse' : 'row'

    const { flex, bgColor, iconBg, opacity } = this.getProps()
    const { dummy, dummy2, dummy3 } = this.getDummyProps()
    return (
      <Touchable
        onPress={this.onPress}
        style={[styles.container, { flexDirection }]}
      >
        <Animated.View
          style={[styles.card, { backgroundColor: bgColor, flexDirection }]}
        >
          <View style={styles.content}>
            <Text style={[Fonts.style.h3, { color: Colors[id] }]}>{label}</Text>
            <View style={{...StyleSheet.absoluteFillObject, flexDirection}}>
              <Animated.View style={{ flex: dummy2 }} />
              <Animated.View style={{ flex, backgroundColor: Colors[id] }} />
              <Animated.View style={{ flex: dummy }} />
            </View>
          </View>
        </Animated.View>
        <View style={[styles.iconContainer, { backgroundColor: Colors.clear }]}>
          <View style={{...StyleSheet.absoluteFillObject, flexDirection}} >
            <Animated.View
              style={{ flex: iconBg, backgroundColor: Colors[id] }}
            />
            <Animated.View style={{ flex: dummy3 }} />
          </View>
          <View style={{position: 'absolute', opacity: 1}}>
            <Icon name={icon} size={36} color={Colors[id]} />
          </View>
          <Animated.View style={{position: 'absolute', opacity}}>
            <Icon name={icon} size={36} color={Colors.snow} />
          </Animated.View>
        </View>
      </Touchable>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(HomeItem)
