import React from 'react';
import ReactDOM from 'react-dom';
import { translate } from './react-i18next-phraseapp';

class MyApp extends React.Component {
  render() {
    return <h1>{this.props.t('hello')}, {this.props.name}</h1>;
  }
}

export default translate()(MyApp);
