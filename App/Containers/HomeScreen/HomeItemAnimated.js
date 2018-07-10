import React, { Component } from 'react'
import { View, Text, Animated, StyleSheet, UIManager } from 'react-native'
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

  static getDerivedStateFromProps (props, state) {
    if (props.selected !== state.selected) {
      return { selected: props.selected }
    } else return null
  }

  constructor (props) {
    super(props)
    console.disableYellowBox = true
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true)
    this.state = {
      selected: false,
      progress: new Animated.Value(0)
    }
  }

  componentDidUpdate (prevProps, prevState) {
    this.animate(this.state.selected)
  }

  animate = forward => {
    // Animate stuff
    if (forward) {
      const config = { toValue: 1, duration: 1000 }
      Animated.timing(this.state.progress, config).start()
      return
    }

    const config = { toValue: 0, duration: 1000 }
    Animated.timing(this.state.progress, config).start()
  }

  onPress = () => {
    this.props.onPress && this.props.onPress()
  }

  onClose = () => {
    this.props.onBack()
  }

  getProps = () => {
    const flex = this.state.progress.interpolate({
      inputRange: [0, 0.3, 0.8],
      outputRange: [5, 100, 5]
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

    const width = this.state.progress.interpolate({
      inputRange: [0, 0.7, 1],
      outputRange: [0, 0, 64],
      extrapolate: 'clamp'
    })

    return { flex, bgColor, iconBg, opacity, width }
  }

  getDummyProps = () => {
    const dummy = this.state.progress.interpolate({
      inputRange: [0, 0.4, 1],
      outputRange: [95, 0, 0]
    })

    const dummy2 = this.state.progress.interpolate({
      inputRange: [0, 0.6, 1],
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
    const color = Colors[id]

    const { flex, bgColor, iconBg, opacity, width } = this.getProps()
    const { dummy, dummy2, dummy3 } = this.getDummyProps()

    const textAlign = 'center'

    // const textStyle = reverse ? { marginRight } : { marginLeft: marginRight }
    return (
      <Touchable
        onPress={this.onPress}
        style={[styles.container, { flexDirection }]}
      >
        <Animated.View
          style={[styles.card, { backgroundColor: bgColor, flexDirection }]}
        >
          <Animated.View style={[styles.closeIconContainer, { width }]}>
            <Touchable onPress={this.onClose}>
              <Icon
                name={'close'}
                size={32}
                color={Colors.snow}
                style={styles.icon}
              />
            </Touchable>
          </Animated.View>
          <View style={styles.content}>
            <Text style={[Fonts.style.h3, { color, textAlign }]}>
              {label}
            </Text>
            <View style={{ ...StyleSheet.absoluteFillObject, flexDirection }}>
              <Animated.View style={{ flex: dummy2 }} />
              <Animated.View style={{ flex, backgroundColor: color }} />
              <Animated.View style={{ flex: dummy }} />
            </View>
          </View>
        </Animated.View>
        <View style={[styles.iconContainer, { backgroundColor: Colors.clear }]}>
          <View style={{ ...StyleSheet.absoluteFillObject, flexDirection }}>
            <Animated.View style={{ flex: iconBg, backgroundColor: color }} />
            <Animated.View style={{ flex: dummy3 }} />
          </View>
          <View style={{ position: 'absolute', opacity: 1 }}>
            <Icon name={icon} size={32} color={color} style={styles.icon} />
          </View>
          <Animated.View style={{ position: 'absolute', opacity }}>
            <Icon name={icon} size={32} color={'white'} style={styles.icon} />
          </Animated.View>
        </View>
      </Touchable>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(HomeItem)
