import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class HomeTestScreen extends React.Component {
    static navigationOptions = {
      title: 'HomeTest',
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#000"
        />
      ),
    };
  
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
              title="Go to Details"
              onPress={() => this.props.navigation.navigate('Details')}
            />
          </View>
        </View>
      );
    }
  }
