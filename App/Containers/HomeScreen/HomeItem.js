import React, { Component } from 'react'
import { View, Text } from 'react-native'
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
      selected: ''
    }
  }

  onPress = () => {
    // Animate stuff
    this.props.onPress && this.props.onPress()
  }

  render () {
    const { id, label, reverse, icon } = this.props
    const flexDirection = reverse ? 'row-reverse' : 'row'

    return (
      <Touchable
        onPress={this.onPress}
        style={[styles.container, { flexDirection }]}
      >
        <View style={[styles.card, { flexDirection }]}>
          <View style={{ width: 12, backgroundColor: Colors[id] }} />
          <View style={styles.content}>
            <Text style={[Fonts.style.h3, { color: Colors[id] }]}>{label}</Text>
          </View>
        </View>
        <View style={[styles.iconContainer, { backgroundColor: Colors[id] }]}>
          <Icon name={icon} size={36} color={Colors.snow} />
        </View>
      </Touchable>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(HomeItem)
