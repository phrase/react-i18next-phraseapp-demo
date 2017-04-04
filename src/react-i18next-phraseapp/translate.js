import hoistNonReactStatics from 'hoist-non-react-statics'
import React from 'react'
import {translate as translateI18next} from 'react-i18next'

const translateWithEditor = true;

export default function translate (...args) {
  if (!translateWithEditor) {
    return translateI18next(...args)
  } else {
    return function (WrappedComponent) {
      class TranslateWithPhraseApp extends React.Component {
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
