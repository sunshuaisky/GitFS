/**
 *
 */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  WebView,
  TextInput,
  DeviceEventEmitter
} from 'react-native'
import NavigationBar from '../common/NavigationBar'

const URL = 'https://www.baidu.com'

export default class WebViewTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: URL,
      title: '',
      canGoBack: false
    }
  }

  onNavigationStateChange(e) {
    this.setState({
      canGoBack: e.canGoBack,
      title: e.title
    })
  }

  goBack() {
    if (this.state.canGoBack) {
      this.webView.goBack()
    } else {
      DeviceEventEmitter.emit('showToast', '到顶了')
    }
  }

  go() {
    this.setState({
      url: this.text
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title="WebViewTest"
          statusBar={{
            backgroundColor: 'red'
          }}
          style={{
            backgroundColor: 'red'
          }}
        />
        <View style={styles.row}>
          <Text style={styles.tips} onPress={() => this.goBack()}>
            返回
          </Text>
          <TextInput
            style={{ borderWidth: 1, height: 40, margin: 6, flex: 1 }}
            onChangeText={text => (this.text = text)}
            defaultValue={URL}
          />
          <Text style={styles.tips} onPress={() => this.go()}>
            前往
          </Text>
        </View>
        <WebView
          ref={webView => (this.webView = webView)}
          source={{ uri: this.state.url }}
          onNavigationStateChange={e => this.onNavigationStateChange(e)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  }
})
