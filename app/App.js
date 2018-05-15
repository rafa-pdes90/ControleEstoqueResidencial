import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

import styles from './config/styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
type State = {};

export default class App extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
        </View>
        <View>
          <Button
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
            title="Press Me"
          />
        </View>
      </View>
    );
  }
}
