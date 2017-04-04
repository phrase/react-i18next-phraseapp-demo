import hoistNonReactStatics from 'hoist-non-react-statics'
import React from 'react'
import {translate as translateI18next} from 'react-i18next'

let phraseAppEditor = false

function initializePhraseAppEditor () {
  if (phraseAppEditor) return
  phraseAppEditor = true

  window.PHRASEAPP_CONFIG = {
    projectId: '00000000000000004158e0858d2fa45c',
    autoLowercase: false,
  };

  (function() {
    var phraseapp = document.createElement('script'); phraseapp.type = 'text/javascript'; phraseapp.async = true;
    phraseapp.src = ['https://', 'phraseapp.com/assets/in-context-editor/2.0/app.js?', new Date().getTime()].join('');
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(phraseapp, s);
  })();
}

const translateWithEditor = true;

export default function translate (...args) {
  if (!translateWithEditor) {
    return translateI18next(...args)
  } else {
    return function (WrappedComponent) {
      class TranslateWithPhraseApp extends React.Component {
        componentDidMount () {
          initializePhraseAppEditor()
        }

        render () {
          return (
            <WrappedComponent
              {...this.props}
              t={(key) => `{{__phrase_${key}__}}`}/>
          )
        }
      }

      return hoistNonReactStatics(TranslateWithPhraseApp, WrappedComponent)
    }
  }
}

module.exports = {
  translate: translate
};
