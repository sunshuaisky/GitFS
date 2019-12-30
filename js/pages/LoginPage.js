import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Image,
  Linking,
  AsyncStorage
} from 'react-native'
import { Hoshi } from 'react-native-textinput-effects'
import UserUtils from '../utils/UserUtils'
import HomePage from './HomePage'

const animaTime = 600

export default class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.params = ''
    UserUtils.getLoginParams().then(res => {
      this.params = res
    })
    this.state = {
      opacity: new Animated.Value(0),
      userName: '',
      passWord: ''
    }
  }

  componentDidMount() {
    Animated.timing(this.state.opacity, {
      duration: animaTime,
      toValue: 1
    }).start()
  }

  toLogin() {
    console.log(this.state.userName)
    console.log(this.state.passWord)
    AsyncStorage.setItem('userName', this.state.userName)
    AsyncStorage.setItem('passWord', this.state.passWord)
    // console.log(this.params)
    this.props.navigator.resetTo({
      component: HomePage
    })
  }

  render() {
    return (
      <Animated.View
        style={[styles.container, { opacity: this.state.opacity }]}
      >
        <View style={styles.loginBody}>
          <Image
            style={styles.logoStyle}
            source={require('../../res/images/logo.png')}
          />
          <Hoshi
            label="userName"
            borderColor="black"
            borderHeight={3}
            inputPadding={16}
            style={[styles.inputStyle, { marginTop: -15 }]}
            defaultValue={this.params.userName}
            onChangeText={value => {
              this.setState({
                userName: value
              })
            }}
          />
          <Hoshi
            label="passWord"
            borderColor="black"
            borderHeight={3}
            inputPadding={16}
            style={[styles.inputStyle, { marginTop: 10 }]}
            password={true}
            defaultValue={this.params.passWord}
            onChangeText={value => {
              this.setState({
                passWord: value
              })
            }}
          />
          <TouchableOpacity
            onPress={() => {
              this.toLogin()
            }}
          >
            <View style={[styles.centered, styles.btnStyle]}>
              <Text style={styles.subText}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.centered, { marginTop: 10 }]}
            onPress={() => {
              Linking.openURL('https://github.com/join')
            }}
          >
            <Text style={[styles.subSmallText]}>register</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#21242a',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginBody: {
    backgroundColor: 'white',
    width: 300,
    height: 340,
    borderWidth: 1,
    borderColor: '#f9f9f9',
    borderRadius: 10,
    alignItems: 'center'
  },
  logoStyle: {
    width: 200,
    height: 100,
    marginLeft: -20
  },
  subText: {
    fontSize: 18,
    color: 'white'
  },
  subSmallText: {
    fontSize: 14,
    color: '#959595'
  },
  inputStyle: {
    width: 250,
    height: 70
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnStyle: {
    width: 230,
    backgroundColor: '#24292e',
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5
  }
})
