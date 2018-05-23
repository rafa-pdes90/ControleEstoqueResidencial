import React from 'react';
import {
    createStackNavigator,
    createSwitchNavigator,
} from 'react-navigation';

import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';

const RootStack = createStackNavigator (
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
            backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        },
    }
);

export const AppNavigator = createSwitchNavigator (
    {
        Root: RootStack, 
    },
    {
        initialRouteName: 'Root',
    }
);
