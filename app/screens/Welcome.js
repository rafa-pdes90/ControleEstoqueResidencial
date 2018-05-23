import React from 'react';
import {
  View,
  Button,
} from 'react-native';

export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
      headerMode: 'none',
    };
  
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Link Start!"
                onPress={() => this.props.navigation.navigate('Home')}
            />
        </View>
      );
    }
  }
  