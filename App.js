import React from 'react';
import { View, Text } from 'react-native';
import * as Font from 'expo-font';
import Application from './src/index'

export default class App extends React.Component {

  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })
    this.setState({ fontLoaded: true })
  }
  render() {
    
    const { fontLoaded } = this.state;

    if (!fontLoaded) {
      return <View><Text>Loading Font!</Text></View>
    }
    return <Application></Application>

  }
}

