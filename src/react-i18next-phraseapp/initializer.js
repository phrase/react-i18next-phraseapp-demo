import React, { Component, PropTypes } from 'react';

class PhraseAppInitializer extends React.Component {
  componentDidMount() {
    const { projectId, autoLowercase, debugMode, prefix, suffix } = this.props;

    window.PHRASEAPP_CONFIG = {
      projectId: projectId,
      autoLowercase: autoLowercase,
      debugMode: debugMode,
      prefix: prefix,
      suffix: suffix
    }

    const phraseapp = document.createElement('script');
    phraseapp.type = 'text/javascript';
    phraseapp.async = true;
    phraseapp.src = ['https://', 'phraseapp.com/assets/in-context-editor/2.0/app.js?', new Date().getTime()].join('');
    var s = document.getElementsByTagName('script')[0];
    if (s != undefined) {
      s.parentNode.insertBefore(phraseapp, s);
    } else {
      document.insertBefore(phraseapp, null);
    }
  }

  render() {
    return false;
  }
}

PhraseAppInitializer.defaultProps = {
  projectId: null,
  autoLowercase: true,
  debugMode: false,
  prefix: "{{__",
  suffix: "__}}"
};

PhraseAppInitializer.propTypes = {
  projectId: PropTypes.string,
  autoLowercase: PropTypes.bool,
  debugMode: PropTypes.bool,
  prefix: PropTypes.string,
  suffix: PropTypes.string
};

export default PhraseAppInitializer;
