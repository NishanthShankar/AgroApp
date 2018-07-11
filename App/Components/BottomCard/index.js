import React, { Component } from 'react'
import { Animated, PanResponder } from 'react-native'

import { connect } from 'react-redux'
import { Metrics, Colors } from '@Themes'
import ActivitiesScreen from './main'
const AnimatedItem = Animated.createAnimatedComponent(ActivitiesScreen)

const FINAL_TOP = 80
const INITIAL_TOP = Metrics.screenHeight - Metrics.navBarHeight - 44 - 54
const MOVEMENT_DELTA = 100

class BottomCard extends Component {
  constructor (props) {
    super(props)
    this.initialTop = INITIAL_TOP
    this.currentTop = this.initialTop
    this.state = {
      top: new Animated.Value(this.initialTop)
    }
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        let top = this.initialTop + gestureState.dy
        if (top < FINAL_TOP) top = FINAL_TOP
        if (top > INITIAL_TOP) top = INITIAL_TOP
        this.currentTop = top
        this.state.top.setValue(top)
        // Optimze
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        this.currentTop = Math.abs(gestureState.dy) < MOVEMENT_DELTA
          ? this.initialTop
          : gestureState.dy < 0 ? FINAL_TOP : INITIAL_TOP
        this.initialTop = this.currentTop
        Animated.timing(this.state.top, { toValue: this.currentTop }).start()
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true
      }
    })
  }

  onPress = () => this.animateUp()
  animateUp = () => Animated.timing(this.state.top, {toValue: FINAL_TOP}).start()

  render () {
    const aHor = this.state.top.interpolate({
      inputRange: [FINAL_TOP, INITIAL_TOP],
      outputRange: [8, 24]
    })
    const aColor = this.state.top.interpolate({
      inputRange: [FINAL_TOP, INITIAL_TOP],
      outputRange: [Colors.background, Colors.clear]
    })
    return (
      <AnimatedItem
        aHor={aHor}
        aColor={aColor}
        onOpen={this.onPress}
        aTop={this.state.top}
        handlers={this._panResponder.panHandlers}
        {...this.props}
      />
    )
  }
}
const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(BottomCard)
