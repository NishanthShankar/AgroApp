import React, { Component } from 'react'
import { View, ViewPagerAndroid, Text } from 'react-native'

import { Fonts, ApplicationStyles } from '@Themes'
import { Touchable } from '@Components'
import styles from './styles'

class ActionCard extends Component {
  setPage = (number) => this.refs.vpa && this.refs.vpa.setPage(number)

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={Fonts.style.h4}>{this.props.heading}</Text>
        </View>
        <ViewPagerAndroid
          ref='vpa'
          style={ApplicationStyles.flex}
          scrollEnabled={false}
        >
          {this.props.children}
        </ViewPagerAndroid>
        <Touchable onPress={this.props.onPress} style={styles.buttonContainer} >
          <Text style={styles.buttonText}>{this.props.actionText}</Text>
        </Touchable>
      </View>
    )
  }
}

export default ActionCard
