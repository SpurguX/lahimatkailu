/* eslint-disable react-native/split-platform-components */
/* eslint-disable no-undef */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { BackHandler, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';

import { Settings } from '../settings';

class SettingsContainer extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.androidBackHandler);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.androidBackHandler);
  }

  backPress = 0;

  androidBackHandler = () => {
    setTimeout(() => {
      this.backPress = 0;
    }, 1000);

    this.backPress += 1;
    if (this.backPress <= 1) {
      ToastAndroid.show(this.context.t('closeApp'), ToastAndroid.SHORT);
      return true;
    }
    return false;
  };

  render() {
    return <Settings {...this.props} />;
  }
}

const mapStateToProps = state => ({
  lang: state.i18nState.lang,
  navigation: state.navigation,
  icons: state.icon.list
});

SettingsContainer.contextTypes = {
  t: PropTypes.func.isRequired
};

SettingsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(SettingsContainer);
