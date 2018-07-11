import React, { Component } from 'react'
import { View, ViewPagerAndroid, Text } from 'react-native'
import {Fonts} from '@Themes'
import { Colors } from '../../Themes'

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
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          elevation: 2,
          margin: 24,
          borderRadius: 16,
          overflow: 'hidden'
        }}
      >
        <View
          style={{
            height: 56,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomColor: '#ddd',
            borderBottomWidth: 1,
            marginHorizontal: 16
          }}
        >
          <Text style={Fonts.style.h4}>Heading</Text>
        </View>
        <ViewPagerAndroid
          ref='vpa'
          style={{ flex: 1 }}
          scrollEnabled={false}
          setPage={this.state.setPage}
        >
          <View style={{ flex: 1 }} key='1'>
            <View style={{}} />
          </View>
          <View style={{ flex: 1 }} key='2' />
          <View style={{ flex: 1, backgroundColor: 'blue' }} key='3' />
        </ViewPagerAndroid>
        <View
          style={{
            height: 56,
            backgroundColor: Colors.primary,
            borderRadius: 16,
            margin: 12
          }}
        />
      </View>
    )
  }
}

export default ActionCard
