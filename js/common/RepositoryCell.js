import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class RepositoryCell extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onSelect()}>
        <View style={styles.cell_container}>
          <Text style={styles.title}>{this.props.data.full_name}</Text>
          <Text style={styles.description}>{this.props.data.description}</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Text>Author：</Text>
              <Image
                style={{ height: 22, width: 22 }}
                source={{ uri: this.props.data.owner.avatar_url }}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>Stars：</Text>
              <Text>{this.props.data.stargazers_count}</Text>
            </View>
            <Image
              style={{ width: 22, height: 22 }}
              source={require('../../res/images/ic_star.png')}
            />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 8,
    color: '#212121'
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
    color: '#757575'
  },
  cell_container: {
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    marginVertical: 3,
    borderColor: '#dddddd',
    borderWidth: 0.5,
    borderRadius: 2,
    shadowColor: 'gray',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 2
  }
})
