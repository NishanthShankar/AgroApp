import React, { Component } from 'react'
import { View, ViewPagerAndroid, Text } from 'react-native'
import { Fonts } from '@Themes'
import { ApplicationStyles } from '../../Themes'
import styles from './styles'

class ActionCard extends Component {
  constructor (props) {
    super(props)
    this.state = { setPage: 0 }
  }
  componentDidMount () {
    // this.setState({ setPage: 1 })
    setTimeout(() => {
      this.refs.vpa && this.refs.vpa.setPage(1)
    }, 1000)
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={Fonts.style.h4}>Heading</Text>
        </View>
        <ViewPagerAndroid
          ref='vpa'
          style={ApplicationStyles.flex}
          scrollEnabled={false}
          setPage={this.state.setPage}
        >
          <View style={ApplicationStyles.flex} key='1'>
            <View style={{}} />
          </View>
          <View style={ApplicationStyles.flex} key='2' />
          <View style={ApplicationStyles.flex} key='3' />
        </ViewPagerAndroid>
        <View style={styles.buttonContainer} />
      </View>
    )
  }
}

export default ActionCard
