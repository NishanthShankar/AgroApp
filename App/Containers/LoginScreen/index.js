import React, { Component } from 'react'
import { ScrollView, View, TextInput } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './styles.js'

class LoginScreen extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
        <View style={styles.logo} />
        <TextInput
          style={styles.input}
          underlineColorAndroid='transparent'
          keyboardType='numeric'
        />
        <View style={styles.button} />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
