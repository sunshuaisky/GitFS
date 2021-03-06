/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  DeviceEventEmitter
} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import PopularPage from './PopularPage'
import AsyncStorageTest from './AsyncStorageTest'
import MyPage from './my/MyPage'
import Toast, { DURATION } from 'react-native-easy-toast'

import WebViewTest from './WebViewTest'

export default class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'tb_polular'
    }
  }

  componentDidMount() {
    this.listener = DeviceEventEmitter.addListener('showToast', text => {
      this.toast.show(text, DURATION.LENGTH_LONG)
    })
  }

  componentWillUnmount() {
    this.listener && this.listener.remove()
  }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_polular'}
            title="最热"
            selectedTitleStyle={{ color: '#2196F3' }}
            renderIcon={() => (
              <Image
                style={styles.image}
                source={require('../../res/images/ic_polular.png')}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={[styles.image, { tintColor: '#2196F3' }]}
                source={require('../../res/images/ic_polular.png')}
              />
            )}
            onPress={() => this.setState({ selectedTab: 'tb_polular' })}
          >
            <PopularPage {...this.props} />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_trending'}
            title="趋势"
            selectedTitleStyle={{ color: 'yellow' }}
            renderIcon={() => (
              <Image
                style={styles.image}
                source={require('../../res/images/ic_trending.png')}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={[styles.image, { tintColor: 'yellow' }]}
                source={require('../../res/images/ic_trending.png')}
              />
            )}
            onPress={() => this.setState({ selectedTab: 'tb_trending' })}
          >
            <AsyncStorageTest />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_favorite'}
            title="收藏"
            selectedTitleStyle={{ color: 'red' }}
            renderIcon={() => (
              <Image
                style={styles.image}
                source={require('../../res/images/ic_favorite.png')}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={[styles.image, { tintColor: 'red' }]}
                source={require('../../res/images/ic_favorite.png')}
              />
            )}
            onPress={() => this.setState({ selectedTab: 'tb_favorite' })}
          >
            <WebViewTest />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_my'}
            title="我的"
            selectedTitleStyle={{ color: 'yellow' }}
            renderIcon={() => (
              <Image
                style={styles.image}
                source={require('../../res/images/ic_my.png')}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={[styles.image, { tintColor: 'yellow' }]}
                source={require('../../res/images/ic_my.png')}
              />
            )}
            onPress={() => this.setState({ selectedTab: 'tb_my' })}
          >
            <MyPage {...this.props} />
          </TabNavigator.Item>
        </TabNavigator>
        <Toast ref={toast => (this.toast = toast)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  page1: {
    flex: 1,
    backgroundColor: 'red'
  },
  page2: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  image: {
    height: 22,
    width: 22
  }
})
