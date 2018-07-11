import React, { Component } from 'react'
import { Animated, PanResponder } from 'react-native'

import { connect } from 'react-redux'
import { Metrics } from '@Themes'
import ActivitiesScreen from './Content'
import { Colors } from '../../Themes'
const AnimatedItem = Animated.createAnimatedComponent(ActivitiesScreen)

const FINAL_TOP = 80
const INITIAL_TOP = Metrics.screenHeight - Metrics.navBarHeight - 44
const MOVEMENT_DELTA = 100
class ActivitiesContainer extends Component {
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
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
        console.log('GS1:', gestureState)
      },
      onPanResponderMove: (evt, gestureState) => {
        console.log('GS2:', gestureState.dy)
        let top = this.initialTop + gestureState.dy
        if (top < FINAL_TOP) top = FINAL_TOP
        if (top > INITIAL_TOP) top = INITIAL_TOP
        this.currentTop = top
        this.state.top.setValue(top)

        // return Animated.event([
        //   null, // ignore the native event
        //   // extract dx and dy from gestureState
        //   // like 'pan.x = gestureState.dx, pan.y = gestureState.dy'
        //   { dy: this.state.top }
        // ])(evt, gestureState)
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        this.currentTop = Math.abs(gestureState.dy) < MOVEMENT_DELTA
          ? this.initialTop
          : this.initialTop === INITIAL_TOP ? FINAL_TOP : INITIAL_TOP
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

  componentDidMount () {
    // setTimeout(() => {
    //   Animated.timing(this.state.top, { toValue: 200 }).start()
    // }, 2000)
  }

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
        aTop={this.state.top}
        handlers={this._panResponder.panHandlers}
      />
    )
  }
}
const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer)
