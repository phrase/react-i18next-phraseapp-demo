import i18next from 'i18next';

const i18n = i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        "headline": "Hello",
        "foo": "Foo",
        "bar": "Example"
      }
    },
    de: {
      translation: {
        "headline": "Hallo",
        "foo": "Test",
        "bar": "Beispiel"
      }
    }
  }
}, (err, t) => {});

export default i18n;
