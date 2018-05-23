import React from 'react';
import {
  YellowBox,
} from 'react-native';

import { RootStack } from './config/routes';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <RootStack />;
  }
}
