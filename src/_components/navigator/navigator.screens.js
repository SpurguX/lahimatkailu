import React from 'react';
import I18n from 'redux-i18n';

import WelcomeScreen from '../welcome/welcome.component.js';
import MainPage from '../mainpage/main.component';
import ListPageContainer from '../listpage/listpage.container';
import SettingsContainer from '../settings/settings.container';

import { translations } from '../../_helpers';

export const WelcomeI18n = () => (
  <I18n translations={translations} fallbackLang="fi">
    <WelcomeScreen />
  </I18n>
);
export const SettingsI18n = () => (
  <I18n translations={translations} fallbackLang="fi">
    <SettingsContainer />
  </I18n>
);
export const MapI18n = () => (
  <I18n translations={translations} fallbackLang="fi">
    <MainPage />
  </I18n>
);
export const ListI18n = () => (
  <I18n translations={translations} fallbackLang="fi">
    <ListPageContainer />
  </I18n>
);
