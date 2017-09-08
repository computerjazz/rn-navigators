import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

class TabB extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Tab B',
  })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I'm Tab B</Text>
      </View>
      )
  }
}

export default TabB

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8e44ad',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
