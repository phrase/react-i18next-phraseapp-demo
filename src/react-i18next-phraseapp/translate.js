import hoistStatics from 'hoist-non-react-statics'
import React, {PropTypes} from 'react'
import {translate as translateI18next} from 'react-i18next'

export default function translate(...args) {
  console.log("Reading Config");

  if (!window.PHRASEAPP_ENABLED) {
    return translateI18next(...args)
  } else {
    return function (WrappedComponent) {
      class TranslateWithPhraseApp extends React.Component {
        constructor(props, context) {
          super(props, context);
          this.phraseapp = context.phraseapp;
        }

        decoratedKeyName(key) {
          return `${this.phraseapp.prefix}phrase_${key}${this.phraseapp.suffix}`
        }

        render () {
          return (
            <WrappedComponent {...this.props} t={(key) => this.decoratedKeyName(key)}/>
          )
        }
      }

      TranslateWithPhraseApp.contextTypes = {
        phraseapp: PropTypes.object.isRequired
      };

      return hoistStatics(TranslateWithPhraseApp, WrappedComponent)
    }
  }
}
