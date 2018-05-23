import React from 'react';
import {
    createStackNavigator,
} from 'react-navigation';

import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';

export const RootStack = createStackNavigator (
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
