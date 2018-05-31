import React from 'react';
import {
  Platform,
} from 'react-native';
import {
    createStackNavigator,
    createDrawerNavigator,
    createSwitchNavigator,
} from 'react-navigation';

import WelcomeScreen from '../screens/Welcome';
import GambiarraScreen from '../screens/Gambiarra';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';
import HomeTestScreen from '../screens/HomeTest';

const HomeStack = createStackNavigator (
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
        headerMode: Platform.OS == 'android' ? 'screen' : 'float',
        navigationOptions: {
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

const RootStack = createDrawerNavigator (
    {
        Principal: HomeStack,
        HomeTest: HomeTestScreen,
    },
    {
        initialRouteName: 'Principal',
        backBehavior: 'none',
        order: ['Principal', 'HomeTest'],
        contentOptions: {
            activeTintColor: '#f4511e',
        },
    }
);

const GambiarraStack = createSwitchNavigator (
    {
        Gambiarra: GambiarraScreen,
        Root: RootStack,
    },
    {
        initialRouteName: 'Gambiarra',
        backBehavior: 'initialRoute',
    }
);

export const AppNavigator = createSwitchNavigator (
    {
        Welcome: WelcomeScreen,
        Gambiarra: GambiarraStack,
    },
    {
        initialRouteName: 'Welcome',
        backBehavior: 'none',
    }
);
