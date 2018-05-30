import React from 'react';
import {
  YellowBox,
} from 'react-native';

YellowBox.ignoreWarnings(["Warning: Can't call setState"])

export default class GambiarraScreen extends React.Component {
    componentDidMount () {
        this.props.navigation.navigate('Home')
    }

    render() {
        return (null);
    }
  }
  