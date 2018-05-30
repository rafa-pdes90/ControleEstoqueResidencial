import React from 'react';
import {
    createStackNavigator,
    createDrawerNavigator,
    createSwitchNavigator,
} from 'react-navigation';
import { Icon } from 'react-native-elements'

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
        headerMode: 'float',
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerLeft: <Icon
                raised
                name='bars'
                type='font-awesome'
                color='#f50'
                onPress={() => navigation.openDrawer()} />
        }),
    }
);

const RootStack = createDrawerNavigator (
    {
        HomeStack: HomeStack,
        HomeTest: HomeTestScreen,
    },
    {
        initialRouteName: 'HomeStack',
        backBehavior: 'none',
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
