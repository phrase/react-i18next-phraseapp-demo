import React, { Component, PropTypes, Children } from 'react';
import PhraseAppInitializer from './initializer';

class PhraseAppProvider extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.phraseapp = props.phraseapp;
  }

  getChildContext() {
    return { phraseapp: this.phraseapp };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.phraseapp !== nextProps.phraseapp) {
      throw new Error('[react-i18next-phraseapp][PhraseAppProvider] does not support changing the phraseapp config object');
    }
  }

  render() {
    const { children } = this.props;
    return Children.only(children);
  }
}

PhraseAppProvider.propTypes = {
  phraseapp: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
}

PhraseAppProvider.childContextTypes = {
  phraseapp: PropTypes.object.isRequired
}

export default PhraseAppProvider;
