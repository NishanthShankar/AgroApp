import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  LayoutAnimation,
  UIManager
} from 'react-native'
import { connect } from 'react-redux'

// Styles
import { ActionCard, BottomCard } from '@Components'
import I18n from '@I18n'
import styles from './styles'

const Option = props => {
  return (
    <View key={props.label} style={styles.optionHolder}>
      <View style={styles.option} />
      <Text style={styles.optionLabel}>{props.label}</Text>
    </View>
  )
}

const options = ['Option1', 'Option2', 'Option3', 'Option4']
const options2 = ['Option12', 'Option23', 'Option34', 'Option41']
class ActivitiesScreen extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true)
  }

  open = () => {
    // this.refs.acard.setPage(1)
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({ open: true })
  }

  render () {
    return (
      <View style={styles.container}>
        <ActionCard
          ref='acard'
          heading={I18n.t('chooseOption')}
          actionText={I18n.t('showMore')}
          onPress={this.open}
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <ScrollView horizontal contentContainerStyle={styles.optionHolder}>
              {options.map(label => <Option label={label} />)}
            </ScrollView>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'green' }}>
            <ScrollView horizontal contentContainerStyle={styles.optionHolder}>
              {options2.map(label => <Option label={label} />)}
            </ScrollView>
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
