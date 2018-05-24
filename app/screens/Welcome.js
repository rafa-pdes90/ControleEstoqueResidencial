import React from 'react';
import {
  View,
} from 'react-native';
import { Button } from 'react-native-elements'

export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
      headerMode: 'none',
    };
  
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
              raised
              large
              icon={{name: 'link'}}
              backgroundColor="red"
              title="Link Start!"
              onPress={() => this.props.navigation.navigate('Home')}
            />
        </View>
      );
    }
  }
  