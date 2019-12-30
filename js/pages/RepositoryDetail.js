/**
 *
 */

import React, { Component } from 'react'
import { View, Text, StyleSheet, WebView } from 'react-native'
import NavigationBar from '../common/NavigationBar'
import ViewUtils from '../utils/ViewUtils'

export default class RepositoryDetail extends Component {
  constructor(props) {
    super(props)
    let title = this.props.data.full_name
    this.state = {
      url: this.props.data.html_url,
      title: title,
      canGoBack: false
    }
  }

  onNavigationStateChange(e) {
    this.setState({
      canGoBack: e.canGoBack
    })
  }

  goBack() {
    if (this.state.canGoBack) {
      this.webView.goBack()
    } else {
      this.props.navigator.pop()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title={this.state.title}
          leftButton={ViewUtils.getLeftButton(() => this.goBack())}
        />
        <WebView
          ref={webView => (this.webView = webView)}
          source={{ uri: this.state.url }}
          onNavigationStateChange={e => this.onNavigationStateChange(e)}
          startInLoadingState={true}
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
