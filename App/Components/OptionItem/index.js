import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { Touchable } from '@Components'
import styles from './styles'

export default class OptionItem extends Component {
  static propTypes = {
    dynamic: PropTypes.bool,
    label: PropTypes.string,
    id: PropTypes.string,
    onPress: PropTypes.func
  }

  state = { size: null }

  shouldComponentUpdate (nextProps, nextState) {
    return this.state.size !== nextState.size
  }

  onLayout = ({ nativeEvent: { layout: { width } } }) =>
    this.setState({ size: width })

  render () {
    let { size } = this.state
    size -= 16
    const optionStyle = size && this.props.dynamic
      ? { width: size, height: size, borderRadius: size / 2 }
      : {}
    return (
      <Touchable
        onPress={this.props.onPress}
        _key={this.props.label}
        style={styles.optionHolder}
        onLayout={this.onLayout}
      >
        <View style={[styles.option, optionStyle]} />
        <Text style={styles.optionLabel}>{this.props.label}</Text>
      </Touchable>
    )
  }
}
