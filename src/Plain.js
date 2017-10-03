import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

class Plain extends Component {
  render () {
    return (
      <View style={styles.container}>

        <Text style={styles.text}>I'm just a plain old component</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
        >
          <Text style={styles.buttonText}>Open Drawer</Text>
        </TouchableOpacity>
      </View>
      )
  }
}

export default Plain

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16a085',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    top: 50,
    left: 0,
    width: 150,
    height: 50,
    backgroundColor: '#f39c12',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white'
  }
})
