import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'redux-zero/react';
import { ScrollView, StatusBar, View } from 'react-native';
import { ListItem, Separator } from '../components/List';
import { actions as themeActions } from '../store/theme';

class Themes extends Component {
  static propTypes = {
    changePrimaryColor: PropTypes.func.isRequired,
    colors: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired,
  };

  handleThemePress = color => {
    const { changePrimaryColor, navigation } = this.props;

    changePrimaryColor(color);
    navigation.goBack();
  };

  render() {
    const { colors } = this.props;

    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        {colors.map(c => (
          <View key={c.name}>
            <ListItem
              checkmark={false}
              onPress={() => this.handleThemePress(c.color)}
              text={c.name}
              backgroundColor={c.color}
              selected
            />
            <Separator />
          </View>
        ))}
        <Separator />
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ theme }) => ({
  colors: theme.colors,
});

export default connect(mapStateToProps, themeActions)(Themes);
