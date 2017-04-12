import React, { Component, PropTypes, Children } from 'react';
import PhraseAppInitializer from './initializer';

class PhraseAppProvider extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.phraseappConfig = props.config;
  }

  getChildContext() {
    return { phraseappConfig: this.phraseappConfig };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.phraseappConfig !== nextProps.phraseappConfig) {
      throw new Error('[react-i18next-phraseapp][PhraseAppProvider] does not support changing the phraseapp config object');
    }
  }

  render() {
    const { children } = this.props;
    return Children.only(children);
  }
}

PhraseAppProvider.propTypes = {
  phraseappConfig: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
}

PhraseAppProvider.childContextTypes = {
  phraseappConfig: PropTypes.object.isRequired
}

export default PhraseAppProvider;
