import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { PhraseAppProvider } from './react-i18next-phraseapp';

import MyApp from './MyApp';
import i18n from './i18n';

// PhraseApp Config
console.log("Setting the config");
const phraseappConfig = {
  debugMode: false,
  projectId: "00000000000000004158e0858d2fa45c",
  prefix: "[[--",
  suffix: "--]]"
}

ReactDOM.render(
  <I18nextProvider i18n={ i18n }>
    <PhraseAppProvider phraseapp={ phraseappConfig }>
      <MyApp name="Hello World" />
    </PhraseAppProvider>
  </I18nextProvider>,
  document.getElementById('root')
);
