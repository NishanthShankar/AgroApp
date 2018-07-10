import React, { Component } from 'react'
import { Animated } from 'react-native'

import { connect } from 'react-redux'
import _ from 'lodash'
import HomeItemAnim from './HomeItemAnimated'
import styles from './HomeItem.styles'

import HeaderActions from '@Redux/HeaderRedux'

// const actionMap = [
//   { id: 'activities', label: 'Activities', icon: 'note' },
//   { id: 'transactions', label: 'Money', icon: 'briefcase', reverse: true },
//   { id: 'people', label: 'People', icon: 'people' }
// ]

const actionObject = {
  activities: { id: 'activities', label: 'Activities', icon: 'note' },
  transactions: {
    id: 'transactions',
    label: 'Money',
    icon: 'briefcase',
    reverse: true
  },
  people: { id: 'people', label: 'People', icon: 'people' }
}

class AnimatedHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      top: new Animated.Value(100),
      height: new Animated.Value(200)
    }
  }

  static getDerivedStateFromProps (props, state) {
    if (props.show !== state.selected) {
      return { selected: props.show }
    } else return null
  }

  componentDidUpdate (prevProps, prevState) {
    if (!prevState.selected && this.state.selected) {
      this.animateUp(this.state)
    }

    if (!this.state.selected && prevState.selected) {
      this.animateDown(prevState)
    }
  }

  animateUp = (state) => {
    const { selectedId } = this.props
    this.curentObject = actionObject[selectedId]
    this.state.top.setValue(this.props.layouts[selectedId].top)
    this.state.height.setValue(this.props.layouts[selectedId].height)
    this.setState({ show: true }, _ =>
      Animated.sequence([
        Animated.timing(this.state.top, { toValue: 0 }),
        Animated.timing(this.state.height, {toValue: 88})
      ]).start()
    )
  }

  animateDown = (state) => {
    this.curentObject = actionObject[this.props.selectedId]
    const toValue = this.props.layouts[this.props.selectedId].top
    const toHeightValue = this.props.layouts[this.props.selectedId].height
    Animated.sequence([
      Animated.timing(this.state.height, {toValue: toHeightValue}),
      Animated.timing(this.state.top, {toValue}),
      Animated.delay(200)
    ]).start(
      _ => this.setState({show: false})
    )
  }

  // onBack = () => this.setState({ selected: false })
  onBack = () => this.props.hide()

  render () {
    if (_.isEmpty(this.props.layouts)) return null
    // const { selected, top } = this.state
    const style = this.props.layouts[this.props.selectedId]
    if (!this.state.show) return null
    const {top, height} = this.state
    return (
      <Animated.View style={[style, styles.animator, { top, height }]}>
        <HomeItemAnim
          {...this.curentObject}
          onBack={this.onBack}
          selected={this.state.selected}
        />
      </Animated.View>
    )
  }
}

export default connect(
  state => ({
    layouts: state.header.layouts,
    selectedId: state.header.selectedId,
    show: state.header.show
  }),
  dispatch => ({
    hide: _ => dispatch(HeaderActions.headerHide())
  })
)(AnimatedHeader)
