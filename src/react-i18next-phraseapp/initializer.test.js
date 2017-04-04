import React from 'react';
import PhraseAppInitializer from './initializer';
import renderer from 'react-test-renderer'

test('Initializer has default config', () => {
  const component = renderer.create(
    <PhraseAppInitializer />
  )

  expect(window.PHRASEAPP_CONFIG.debugMode).toBe(false);
  expect(window.PHRASEAPP_CONFIG.projectId).toBe(null);
  expect(window.PHRASEAPP_CONFIG.prefix).toBe("{{__");
  expect(window.PHRASEAPP_CONFIG.suffix).toBe("__}}");
})

test('Initializer config can be modified', () => {
  const component = renderer.create(
    <PhraseAppInitializer debugMode={true} projectId="foobar" prefix="[[__" suffix="__]]" />
  )

  expect(window.PHRASEAPP_CONFIG.debugMode).toBe(true);
  expect(window.PHRASEAPP_CONFIG.projectId).toBe("foobar");
  expect(window.PHRASEAPP_CONFIG.prefix).toBe("[[__");
  expect(window.PHRASEAPP_CONFIG.suffix).toBe("__]]");
})

test('Initializer load the In-Context Editor JS', () => {
  const component = renderer.create(
    <PhraseAppInitializer />
  )

  expect(document.getElementsByTagName('script')[0].src)
    .toMatch(/https:\/\/phraseapp.com\/assets\/in-context-editor\/2.0\/app.js\?[\d]/);
})
