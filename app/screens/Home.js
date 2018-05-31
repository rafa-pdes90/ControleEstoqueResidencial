import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Icon, SearchBar, Button } from 'react-native-elements';
import Dimensions from 'Dimensions';

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

export default class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
      const params = navigation.state.params || {};
      const screen = Dimensions.get("window");

      return {
        title: 'Principal',
        headerTitle: params.isSearchActive ?
        (
          <View style={{width: screen.width - 150, marginLeft: 20}}>
            <SearchBar
              round
              containerStyle={{backgroundColor: 'transparent'}}
              onChangeText={null}
              onClearText={null}
              icon={{ type: 'font-awesome', name: 'search' }}
              placeholder='Pesquisar...' />
            </View>
        ) :
        (
          undefined
        ),
        headerTitleStyle: {
          marginLeft: 20,
        },
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerLeft: (
          <View>
            <Icon
              raised
              name='bars'
              type='font-awesome'
              color='#f50'
              onPress={() => navigation.openDrawer()} />
            </View>
        ),
        headerRight: params.isSearchActive ?
        (
          <View style={{marginRight: 20}}>
            <Icon
              name='close'
              type='font-awesome'
              color='#fff'
              onPress={() => navigation.setParams({isSearchActive: !params.isSearchActive})} />
          </View>
        ) :
        (
          <View style={{marginRight: 20}}>
            <Icon
              name='search'
              type='font-awesome'
              color='#fff'
              onPress={() => navigation.setParams({isSearchActive: !params.isSearchActive})} />
          </View>
        ),
      };
    };

    componentWillMount() {
      this.props.navigation.setParams({ isSearchActive: false });
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
              title="Go to Details"
              onPress={() => {
                this.props.navigation.setParams({ isSearchActive: false });
                this.props.navigation.navigate('Details');
              }}
            />
          </View>
        </View>
      );
    }
  }
