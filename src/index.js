import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { PhraseAppProvider } from 'react-i18next-phraseapp';

import MyApp from './MyApp';
import i18n from './i18n';

console?.log?.('This package has been deprecated. Consider migrating to i18next-phrase-in-context-editor-post-processor instead (https://www.npmjs.com/package/i18next-phrase-in-context-editor-post-processor).');

ReactDOM.render(
  <I18nextProvider i18n={ i18n }>
    <PhraseAppProvider config={ window.PHRASEAPP_CONFIG }>
      <MyApp />
    </PhraseAppProvider>
  </I18nextProvider>,
  document.getElementById('root')
);
