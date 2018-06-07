import React from 'react';
import {
  YellowBox,
} from 'react-native';

import { AppNavigator } from './config/routes';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
