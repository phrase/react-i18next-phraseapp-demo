import React from 'react';
import { translate } from 'react-i18next-phraseapp';
import { PhraseAppInitializer } from 'react-i18next-phraseapp';
import Item from './item';

class MyApp extends React.Component {
  render() {
    return (
      <div>
        <PhraseAppInitializer />
        <h1>{this.props.t('headline')}</h1>
        <Item keyName="foo" />
        <Item keyName="bar" />
      </div>
    );
  }
}

export default translate()(MyApp);
