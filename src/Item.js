import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

class Item extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{`I'm item # ${this.props.navigation.state.params.title}`}</Text>
      </View>
      )
  }
}

export default Item

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0392b',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
