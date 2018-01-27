import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'redux-zero/react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ListItem, Separator } from '../components/List';
import { actions as themeActions } from '../store/theme';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
});

class Themes extends Component {
  static propTypes = {
    changePrimaryColor: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  };

  handleThemePress = color => {
    const { changePrimaryColor, navigation } = this.props;

    changePrimaryColor(color);
    navigation.goBack();
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          id="what"
          checkmark={false}
          onPress={() => this.handleThemePress(styles.$blue)}
          text="Blue"
          backgroundColor={styles.$blue}
          selected
        />
        <Separator />
        <ListItem
          checkmark={false}
          onPress={() => this.handleThemePress(styles.$orange)}
          text="Orange"
          backgroundColor={styles.$orange}
          selected
        />
        <Separator />
        <ListItem
          checkmark={false}
          onPress={() => this.handleThemePress(styles.$green)}
          text="Green"
          backgroundColor={styles.$green}
          selected
        />
        <Separator />
        <ListItem
          checkmark={false}
          onPress={() => this.handleThemePress(styles.$purple)}
          text="Purple"
          backgroundColor={styles.$purple}
          selected
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default connect(null, themeActions)(Themes);
