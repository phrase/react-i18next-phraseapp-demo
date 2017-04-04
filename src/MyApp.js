import React from 'react';
import { translate, PhraseAppInitializer } from './react-i18next-phraseapp';

class MyApp extends React.Component {
  render() {
    return (
      <div>
        <PhraseAppInitializer debugMode={false} projectId="00000000000000004158e0858d2fa45c"></PhraseAppInitializer>
        <h1>{this.props.t('hello')}, {this.props.name}</h1>
        <h2>{this.props.t('claim')}</h2>
      </div>
    );
  }
}

export default translate()(MyApp);
