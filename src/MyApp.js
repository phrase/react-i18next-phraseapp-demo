import React from 'react';
import { translate, PhraseAppInitializer } from './react-i18next-phraseapp';
import Item from './item';

class MyApp extends React.Component {
  render() {
    return (
      <div>
        <PhraseAppInitializer />
        <h1>{this.props.t('hello')}, {this.props.name}</h1>
        <h2>{this.props.t('claim')}</h2>
        <Item />
        <Item />
      </div>
    );
  }
}

export default translate()(MyApp);
