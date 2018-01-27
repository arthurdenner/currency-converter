import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Linking, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#898989';
const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    alertWithType: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  };

  handleThemesPress = () => {
    const { navigation: { navigate } } = this.props;

    navigate('Themes');
  };

  handleSitePress = () => {
    const { alertWithType } = this.props;

    Linking.openURL('http://fixer.io').catch(() =>
      alertWithType('error', 'Sorry', "Fixer.io can't be opened right now")
    );
  };

  render() {
    return (
      <ScrollView>
        <ListItem
          customIcon={
            <Ionicons
              color={ICON_COLOR}
              name={`${ICON_PREFIX}-arrow-forward`}
              size={ICON_SIZE}
            />
          }
          onPress={this.handleThemesPress}
          text="Themes"
        />
        <Separator />
        <ListItem
          customIcon={
            <Ionicons
              color={ICON_COLOR}
              name={`${ICON_PREFIX}-link`}
              size={ICON_SIZE}
            />
          }
          onPress={this.handleSitePress}
          text="Fixer.io"
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default connectAlert(Options);
