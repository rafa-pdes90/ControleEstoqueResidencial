import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class DetailsScreen extends React.Component {
    static navigationOptions = {
      title: 'Details',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#f4511e',
    };
  
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
        </View>
      );
    }
  }
  