import { StackNavigator } from 'react-navigation'
import {Animated, Easing} from 'react-native'
import LoginScreen from '../Containers/LoginScreen/'
import LaunchScreen from '../Containers/LaunchScreen'
import HomeScreen from '../Containers/HomeScreen/'
import ActivitiesScreen from '../Containers/ActivitiesScreen/'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: LaunchScreen },
  ActivitiesScreen: { screen: ActivitiesScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ActivitiesScreen',
  navigationOptions: {
    headerStyle: styles.header
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 400,
      timing: Animated.timing,
      easing: Easing.step0
    }
  })
})

export default PrimaryNav
