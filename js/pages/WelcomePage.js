import React, { Component } from 'react'
import { View, Text, StyleSheet, AsyncStorage } from 'react-native'
import UserUtils from '../utils/UserUtils'
import NavigationBar from '../common/NavigationBar'
import LoginPage from './LoginPage'
import HomePage from './HomePage'

export default class WelcomePage extends Component {
  constructor(props) {
    super(props)
    this.isLogin = UserUtils.isNeedLogin()
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      if (this.isLogin) {
        this.props.navigator.resetTo({
          component: LoginPage
        })
      } else {
        this.props.navigator.resetTo({
          component: HomePage
        })
      }
    }, 2000)
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer)
  }

  render() {
    return (
      <View>
        <NavigationBar title={'欢迎'} />
        <Text style={{ fontSize: 29 }}>欢迎</Text>
      </View>
    )
  }
}
