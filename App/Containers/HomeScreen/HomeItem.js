import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
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

  shouldComponentUpdate = nextProps =>
    this.props.selected !== nextProps.selected

  getProps = () => {
    const flexDirection = this.props.reverse ? 'row-reverse' : 'row'
    const color = Colors[this.props.id]

    const iconColor = this.props.selected ? Colors.snow : color
    const iconHolder = this.props.selected ? color : Colors.clear
    const cardColor = this.props.selected ? Colors.red : Colors.snow

    const cardStyle = { backgroundColor: cardColor, flexDirection }

    return { iconHolder, iconColor, cardStyle }
  }

  renderBar = flexDirection => {
    if (this.props.selected) return null
    return (
      <View style={{ ...StyleSheet.absoluteFillObject, flexDirection }}>
        <View style={{ flex: 5, backgroundColor: Colors[this.props.id] }} />
        <View style={{ flex: 95 }} />
      </View>
    )
  }

  renderCloseIcon = () => {
    if (!this.props.selected) return null
    return (
      <Touchable onPress={this.props.onBack} style={styles.closeIconContainer}>
        <Icon name='close' size={32} color={Colors.snow} style={styles.icon} />
      </Touchable>
    )
  }

  render () {
    const { id, label, reverse, icon } = this.props
    const flexDirection = reverse ? 'row-reverse' : 'row'
    const color = Colors[id]

    const { iconHolder, iconColor, cardStyle } = this.getProps()

    return (
      <Touchable
        onPress={this.props.onPress}
        style={[styles.container, { flexDirection }]}
      >
        <View style={[styles.card, cardStyle]}>
          {this.renderCloseIcon()}
          <View style={styles.content}>
            <Text style={[Fonts.style.h3, { color, textAlign: 'center' }]}>
              {label}
            </Text>
            {this.renderBar(flexDirection)}
          </View>
        </View>

        <View style={[styles.iconContainer, { backgroundColor: iconHolder }]}>
          <Icon name={icon} size={32} color={iconColor} style={styles.icon} />
        </View>
      </Touchable>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(HomeItem)
