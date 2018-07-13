import React, { Component } from 'react'
import { View, Text, LayoutAnimation, UIManager } from 'react-native'
import { connect } from 'react-redux'

import { ActionCard, BottomCard } from '@Components'
import OptionItem from '@Components/OptionItem/'
import I18n from '@I18n'
import styles from './styles'

const pageOptions = {
  0: [{ label: 'Give', id: 'give' }, { label: 'Get', id: 'get' }],
  1: [{ label: 'Payment', id: 'payment' }, { label: 'For Field', id: 'field' }],
  2: ['Sale', 'Withdrawal']
}

const idPageMap = {
  home: 0,
  give: 1,
  get: 2,
  payment: 3,
  field: 4
}

class ActivitiesScreen extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true)
  }

  open = () => {
    // this.refs.acard.setPage(1)
  }

  onPress = ({ id }) => () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({ open: true }, this.moveToPage({ id }))
  }

  moveToPage = ({ id }) => () => {
    this.refs.acard.setPage(idPageMap[id])
  }

  render () {
    return (
      <View style={styles.container}>
        <ActionCard ref='acard' heading={I18n.t('chooseOption')}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {pageOptions[0].map(item => (
              <OptionItem {...item} onPress={this.onPress(item)} />
            ))}
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {pageOptions[1].map(item => (
              <OptionItem {...item} onPress={this.onPress(item)} />
            ))}
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {pageOptions[2].map(label => <OptionItem label={label} />)}
          </View>
          <View style={{}}>
            <Text style={styles.textLabel}> Area ID</Text>
            <Text style={styles.textLabel}> Field ID</Text>
            <Text style={styles.textLabel}> Site ID</Text>
          </View>

        </ActionCard>
        <View style={{ height: this.state.open ? 0 : 96 }} />
        {this.state.open
          ? null
          : <BottomCard>
            <View style={{ flex: 1, padding: 24 }}>
              <Text>JELLO</Text>
              <Text>JELLO</Text>
              <Text>JELLO</Text>
              <Text>JELLO</Text>
            </View>
          </BottomCard>}
      </View>
    )
  }
}
const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesScreen)
